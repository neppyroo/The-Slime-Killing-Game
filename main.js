const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;

const keys = {};

let lastTime = 0;

// Collision detection

function checkCollision(a, b) {
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );
}

// Character class

class Character {
    constructor(x, y, width, height, speed, health, hunger, imageList, angryImageList = []) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.health = health;
        this.hunger = hunger;
        this.moving = false;
        this.direction = "down";
        this.image = 0;
        this.frameTimer = 0;
        this.frameDelay = 0.50;

        this.wanderX = 0;
        this.wanderY = 0;
        this.wanderTimer = 0;

        this.knockbackX = 0;
        this.knockbackY = 0;
        this.knockbackTimer = 0;
        this.knockbackMultiplier = 4;

        this.aggressionTimer = 0;
        this.aggressionMultiplier = 2;
        this.touchingJacob = false;

        this.imageList = this.loadImages(imageList);
        this.angryImageList = this.loadImages(angryImageList);
    }

    // Load sprite images

    loadImages(paths) {
        return paths.map(path => {
            const img = new Image();
            img.src = path;
            return img;
        });
    }

    // Select the correct sprite list

    get activeImageList() {
        if (this.aggressionTimer > 0 && this.angryImageList.length > 0) {
            return this.angryImageList;
        }

        return this.imageList;
    }

    // Keep character inside the game area

    checkBoundaries() {
        this.x = Math.max(
            0,
            Math.min(this.x, canvas.width - this.width)
        );

        this.y = Math.max(
            0,
            Math.min(this.y, canvas.height - this.height)
        );
    }

    // Reusable movement

    moveInDirection(dx, dy, deltaTime, multiplier = 1, blockers = []) {
        const length = Math.hypot(dx, dy);

        // Normalize movement

        if (length > 0) {
            dx /= length;
            dy /= length;
        }

        const oldX = this.x;
        const oldY = this.y;

        let hitX = false;
        let hitY = false;

        // Horizontal movement

        this.x += dx * this.speed * multiplier * deltaTime;

        if (this.x < 0 || this.x + this.width > canvas.width) {
            hitX = true;
        }

        this.checkBoundaries();

        if (blockers.some(other =>
            other !== this &&
            other.health > 0 &&
            checkCollision(this, other)
        )) {
            this.x = oldX;
            hitX = true;
        }

        // Vertical movement

        this.y += dy * this.speed * multiplier * deltaTime;

        if (this.y < 0 || this.y + this.height > canvas.height) {
            hitY = true;
        }

        this.checkBoundaries();

        if (blockers.some(other =>
            other !== this &&
            other.health > 0 &&
            checkCollision(this, other)
        )) {
            this.y = oldY;
            hitY = true;
        }

        this.moving = this.x !== oldX || this.y !== oldY;

        return { hitX, hitY };
    }

    // Player movement

    move(deltaTime) {
        let dx = 0;
        let dy = 0;

        if (keys["w"] || keys["arrowup"]) {
            dy -= 1;
            this.direction = "up";
        }

        if (keys["s"] || keys["arrowdown"]) {
            dy += 1;
            this.direction = "down";
        }

        if (keys["a"] || keys["arrowleft"]) {
            dx -= 1;
            this.direction = "left";
        }

        if (keys["d"] || keys["arrowright"]) {
            dx += 1;
            this.direction = "right";
        }

        this.moveInDirection(dx, dy, deltaTime);
    }

    // Random slime movement

    wander(deltaTime) {
        this.wanderTimer -= deltaTime;

        if (this.wanderTimer <= 0) {
            this.wanderX = Math.floor(Math.random() * 3) - 1;
            this.wanderY = Math.floor(Math.random() * 3) - 1;

            this.wanderTimer = Math.random() * 2 + 1;
        }

        const collision = this.moveInDirection(
            this.wanderX,
            this.wanderY,
            deltaTime,
            this.aggressionTimer > 0 ? this.aggressionMultiplier : 1,
            slimes
        );

        // Reverse direction when hitting something

        if (collision.hitX) {
            this.wanderX *= -1;
        }

        if (collision.hitY) {
            this.wanderY *= -1;
        }
    }

    // Chase another character

    chase(target, deltaTime) {
        const dx = target.x + target.width / 2 -
            (this.x + this.width / 2);

        const dy = target.y + target.height / 2 -
            (this.y + this.height / 2);

        this.moveInDirection(
            dx,
            dy,
            deltaTime,
            this.aggressionMultiplier,
            slimes
        );
    }

    // Start knockback away from another character

    knockback(attacker) {
        this.knockbackX = this.x + this.width / 2 -
            (attacker.x + attacker.width / 2);

        this.knockbackY = this.y + this.height / 2 -
            (attacker.y + attacker.height / 2);

        // Handle characters with identical positions

        if (this.knockbackX === 0 && this.knockbackY === 0) {
            this.knockbackX = 1;
        }

        this.knockbackTimer = 0.5;
    }

    // Update slime behavior

    updateSlime(target, deltaTime) {
        if (this.health <= 0) {
            return;
        }

        this.aggressionTimer = Math.max(
            0,
            this.aggressionTimer - deltaTime
        );

        if (this.knockbackTimer > 0) {
            const knockbackTime = Math.min(
                deltaTime,
                this.knockbackTimer
            );

            this.moveInDirection(
                this.knockbackX,
                this.knockbackY,
                knockbackTime,
                this.knockbackMultiplier,
                slimes
            );

            this.knockbackTimer -= knockbackTime;

        } else if (
            this.aggressionTimer > 0 &&
            target &&
            target.health > 0
        ) {
            this.chase(target, deltaTime);

        } else {
            this.wander(deltaTime);
        }
    }

    // Sprite animation

    updateAnimation(deltaTime) {
        const frameCount = this.activeImageList.length;

        if (frameCount === 0) {
            return;
        }

        this.image %= frameCount;

        this.frameTimer += deltaTime;

        while (this.frameTimer >= this.frameDelay) {
            this.image++;
            this.frameTimer -= this.frameDelay;

            if (this.image >= frameCount) {
                this.image = 0;
            }
        }
    }

    // Drawing

    draw() {
        if (this.health <= 0) {
            return;
        }

        const images = this.activeImageList;
        const sprite = images[this.image % images.length];

        if (sprite && sprite.complete && sprite.naturalWidth > 0) {
            ctx.drawImage(
                sprite,
                this.x,
                this.y,
                this.width,
                this.height
            );
        } else {
            ctx.fillStyle = "mediumpurple";

            ctx.fillRect(
                this.x,
                this.y,
                this.width,
                this.height
            );
        }
    }

    // Damage

    takeDamage(amount) {
        this.health = Math.max(0, this.health - amount);
    }
}

// Create characters

const shirley = new Character(100, 100, 32, 32, 120, 6, 3, [
    "assets/shirley1.png",
    "assets/shirley2.png"
]);

const jacob = new Character(
    (canvas.width - 32) / 2,
    (canvas.height - 32) / 2,
    32,
    32,
    120,
    6,
    null,
    [
        "assets/jacob_temp1.png",
        "assets/jacob_temp2.png"
    ]
);

// Spawn slimes

const slimes = [];

function spawnSlimes(amount) {
    let attempts = 0;

    while (amount > 0 && attempts < 1000) {
        attempts++;

        let width = 32;
        let height = 32;

        let x = Math.random() * (canvas.width - width);
        let y = Math.random() * (canvas.height - height);

        let spawnArea = { x, y, width, height };

        // Prevent spawning inside Jacob or another slime

        if (checkCollision(spawnArea, jacob)) {
            continue;
        }

        if (slimes.some(slime =>
            slime.health > 0 && checkCollision(spawnArea, slime)
        )) {
            continue;
        }

        let health = Math.floor(Math.random() * 2) + 2;
        let speed = Math.random() * 20 + 20;

        const slime = new Character(
            x,
            y,
            width,
            height,
            speed,
            health,
            null,
            [
                "assets/slime_temp1.png",
                "assets/slime_temp2.png"
            ],
            [
                "assets/angry_temp1.png",
                "assets/angry_temp2.png"
            ]
        );

        slime.frameTimer = Math.random() * slime.frameDelay;

        slimes.push(slime);
        amount--;
    }

    if (amount > 0) {
        console.warn("Not enough room to spawn all slimes.");
    }
}

spawnSlimes(10);

// Currently controlled character

let player = jacob;

// combat

function checkCombat() {
    if (player !== jacob || jacob.health <= 0) {
        return;
    }

    for (const slime of slimes) {
        if (slime.health <= 0) {
            continue;
        }

        if (jacob.health <= 0) {
            break;
        }

        const touching = checkCollision(jacob, slime);

        // Only attack when a new collision occurs

        if (touching && !slime.touchingJacob) {

            if (slime.aggressionTimer > 0) {
                jacob.takeDamage(1);

            } else {
                slime.takeDamage(1);

                if (slime.health > 0) {
                    slime.aggressionTimer = 3;
                }
            }

            // Only knock back surviving slimes

            if (slime.health > 0) {
                slime.knockback(jacob);
            }
        }

        slime.touchingJacob = touching;
    }
}

// Keyboard controls

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    keys[key] = true;

    if (key.startsWith("arrow")) {
        event.preventDefault();
    }
});

document.addEventListener("keyup", (event) => {
    keys[event.key.toLowerCase()] = false;
});

window.addEventListener("blur", () => {
    for (const key in keys) {
        keys[key] = false;
    }
});

// Game display

const display = document.querySelector(".display");
const displayHealth = document.querySelector(".display_health");
const displaySlimes = document.querySelector(".display_slimes");

function updateDisplay() {
    const remainingSlimes = slimes.filter(slime => slime.health > 0).length;

    displayHealth.textContent = `Health: ${jacob.health}`;
    displaySlimes.textContent = `Slimes left: ${remainingSlimes}`;

    if (jacob.health <= 0 || remainingSlimes === 0) {
        const button = document.createElement("button");
        button.type = "button";

        if (jacob.health <= 0) {
            button.textContent = "retry";

            button.addEventListener("click", () => {
                window.location.reload();
            });
        } else {
            button.textContent = "next level";
        }

        display.replaceChildren(button);
        return true;
    }

    return false;
}

// Game loop


function gameLoop(currentTime) {
    let deltaTime = lastTime === 0
        ? 0
        : (currentTime - lastTime) / 1000;

    lastTime = currentTime;

    deltaTime = Math.min(deltaTime, 0.05);

    // Update player

    if (player.health > 0) {
        player.move(deltaTime);
        player.updateAnimation(deltaTime);
    }

    // Update slimes

    for (const slime of slimes) {
        if (slime.health <= 0) {
            continue;
        }

        slime.updateSlime(
            player === jacob ? jacob : null,
            deltaTime
        );

        slime.updateAnimation(deltaTime);
    }


    checkCombat();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const slime of slimes) {
        slime.draw();
    }
    player.draw();
    if (!updateDisplay()) {
        requestAnimationFrame(gameLoop);
    }
}

requestAnimationFrame(gameLoop);