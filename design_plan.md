# Plan (+spoilers):

## Intro Part 1:

- Main character (Jacob): Gets close to slime, kills it with sword.
- There are about 10 slimes that come out over about 30 seconds.
- Jacob has 6 health. Slimes aren't aggressive. Slimes have 1-2 health.
- If Jacob dies, he restarts level.
- The game counts down until "next level".
- After Jacob kills last slime, the game pauses and you can click a button that says "next level"
- Jacob walks off screen
- Game actually zooms in on last slime instead of following Jacob
- Fade into dead slime's family waiting on him for dinner.

## Intro Part 2 (at slime dinner table):

- Seamus: "Daddy's been gone for a while, mommy? Shouldn't he be here by now?"
- Shirley: "I'm sure he's just running late, sweetie. You know how hard it is to find food nowadays."
- Seamus: "But mommy, it's not like we eat people. We eat flowers. We're slimes that pick flowers."
- Shirley: "What if he's having a slime affair?"
- Shirley: "That's not appropriate, Samantha."
- Samantha: "Well what are we gonna do if Daddy doesn't come home?
- Shirley: "He'll be home."
- Shirley:

Shirley's slime husband never came home. (Fade to black)

## Important Info:

Slimes have health and hunger bars.

| Slime | Hunger | Health | Shown as |
| --- | ---: | ---: | ---: |
| Seamus | 2 | 2 | 22 |
| Samantha | 4 | 4 | 44 |
| Shirley | 6 | 6 | 66 |

- Shirley is a large purple slime with a yellow bow.
- Seamus is a blue little slime.
- Samantha is a pink bigger slime.

Every choice = -1 hunger per slime.

### Path Rules:

- The first digit represents hunger.
- The second digit represents health.
- XX means the slime is dead.
- Hunger and health cannot exceed their original maximums.
- A flower normally restores 1 point of hunger.
- Starting in Choice 4, the potion doubles the calories in all flowers.
- After obtaining the potion, one flower restores 2 points of hunger.
- Apply food gains before checking for starvation.
- A slime dies if its hunger or health reaches zero.
- Lone Shirleys automatically go to the final stage.
- Lone Shirleys do not lose any more hunger or health until the final stage begins.
- All Shirleys survive.
- All slime kids die.

---

# Choice 1:

It's been three days. Shirley and her slime kids are getting hungry. Her kids don't think their dad is ever coming home. Shirley still has some hope.

| Slime | Stats |
| --- | ---: |
| Seamus | 12 |
| Samantha | 24 |
| Shirley | 36 |

## 1. Pick the flowers herself?

- 3 flowers spawn randomly. One flower goes to each.

## 2. Wait for her slime husband?

- Seamus, the weakest and smallest, dies of hunger.
- All surviving slimes lose a point of hunger.

---

# Choice 2:

It's been six days. Samantha is sick. Shirley can either go look for flowers, or she can stay and nurse Shirley back to health.

| Slime | 1 | 2 |
| --- | ---: | ---: |
| Seamus | 12 | XX |
| Samantha | 24 | 14 |
| Shirley | 36 | 26 |

## 1. Stay home and take care of Samantha.

- Seamus, the weakest and smallest, dies of hunger (if he isn't dead already).
- Shirley finds two old suspect flowers in the house.
- One goes to Samantha, the other to Shirley.
- Samantha's flower is fine.
- Shirley's flower gives her food poisoning. Her hunger is reduced to 2 points.

## 2. Pick flowers.

- 2 flowers spawn randomly. One goes to Shirley and one goes to Samantha.
- Seamus, the weakest and smallest, dies of hunger (if he isn't dead already)
- Samantha loses 2 points of health.
- Shirley is extra exhuasted. She loses a hunger point if it is above 2.

---

# Choice 3:

It's been nine days. Shirley wants to go with you to get flowers.

| Slime | 11 | 21 | 12 | 22 |
| --- | ---: | ---: | ---: | ---: |
| Seamus | XX | XX | XX | XX |
| Samantha | 24 | 14 | 22 | 12 |
| Shirley | 16 | 16 | 26 | 26 |

## 1. Let Samantha go with her to pick flowers.

- Enough flowers to fill the hunger bars entirely spawn.
- The slimes get attacked, each losing 2 points of health.
- Samantha may die.

## 2. Pick flowers on her own.

- Shirley finds one flower. She feeds herself.
- Samantha loses a point of hunger (and may die)

---

# Choice 4

It's been twelve days. Shirley notices 2 new flowers outside the house. Samantha wants Shirley to stay home with her. She asks Shirley if she's going to disappear like Daddy did.

### Results from Choice 3:

| Slime | 111 | 211 | 121 | 221 | 112 | 212 | 122 | 222 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Seamus | XX | XX | XX | XX | XX | XX | XX | XX |
| Samantha | 42 | 42 | XX | XX | 14 | XX | 12 | XX |
| Shirley | 64 | 64 | 64 | 64 | 16 | 16 | 26 | 26 |

Samantha has died in half of these. Lone Shirleys don't participate in this choice. We'll call 111 and 211 "a" for simplicity:

### Active Paths:

| Slime | a | 112 | 122 |
| --- | ---: | ---: | ---: |
| Seamus | XX | XX | XX |
| Samantha | 42 | 14 | 12 |
| Shirley | 64 | 16 | 26 |

Paths 121, 221, 212, and 222 go to the final stage.

## 1. Stay home with Samantha.

- Shirley picks the two flowers outside their house.
- Shirley finds a potion buried near their house! It doubles the calories in all flowers! Maybe everything will be alright.
- One flower goes to Shirley and one goes to Samantha.
- Shirley takes care of Samantha.
- Samantha gains 1 point of health.

## 2. Go farther away to pick flowers.

- Shirley picks the two flowers outside their house.
- Shirley finds a potion buried near their house! It doubles the calories in all flowers! Maybe everything will be alright.
- Shirley only finds one flower farther away.
- Shirley gets attacked on her way home.
- Shirley loses 1 point of health.
- She loses 2 flowers.
- She won't make it back home in time to feed Samantha.
- She eats one flower.
- Samantha may die of hunger.

### Results:

| Slime | a1 | 1121 | 1221 | a2 | 1122 | 1222 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Seamus | XX | XX | XX | XX | XX | XX |
| Samantha | 43 | 24 | 23 | 32 | XX | XX |
| Shirley | 64 | 26 | 36 | 63 | 25 | 35 |

1122 and 1222 go to the final stage.

---

# Choice 5:

It's been fifteen days. Samantha is sick again. Samantha says Daddy told her a story once about his favorite spot to pick flowers. She thinks she knows how to get there.

| Slime | a1 | 1121 | 1221 | a2 |
| --- | ---: | ---: | ---: | ---: |
| Seamus | XX | XX | XX | XX |
| Samantha | 43 | 24 | 23 | 32 |
| Shirley | 64 | 26 | 36 | 63 |

## 1. Go look for Daddy with Samantha.

- Enough flowers to fill the hunger bars entirely spawn.
- They don't find Shirley's slime husband.
- The slimes get attacked, each losing 2 points of health.
- Samantha loses 1 point of health from sickness.
- Samantha may die.

### Results:

| Slime | a11 | 11211 | 12211 | a21 |
| --- | ---: | ---: | ---: | ---: |
| Seamus | XX | XX | XX | XX |
| Samantha | XX | 41 | XX | XX |
| Shirley | 62 | 64 | 64 | 61 |

Samantha loses a total of 3 points of health.

a11, 12211, and a21 go to the final stage.

## 2. Stay home and wait for Daddy.

- Shirley finds one new flower outside their house.
- Shirley gives the flower to Samantha.
- Samantha loses 1 point of health from sickness.

### Results:

| Slime | a12 | 11212 | 12212 | a22 |
| --- | ---: | ---: | ---: | ---: |
| Seamus | XX | XX | XX | XX |
| Samantha | 42 | 33 | 32 | 41 |
| Shirley | 54 | 16 | 26 | 53 |

### Combined Results:

| Slime | a11 | 11211 | 12211 | a21 | a12 | 11212 | 12212 | a22 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Seamus | XX | XX | XX | XX | XX | XX | XX | XX |
| Samantha | XX | 41 | XX | XX | 42 | 33 | 32 | 41 |
| Shirley | 62 | 64 | 64 | 61 | 54 | 16 | 26 | 53 |

---

# Choice 6:

It's been eighteen days. Samantha is still sick. She asks Shirley if she can have dinner at the dinner table again, like they used to when Daddy and Seamus were alive. She says they should get four flowers, one for each of them.

| Slime | 11211 | a12 | 11212 | 12212 | a22 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Seamus | XX | XX | XX | XX | XX |
| Samantha | 41 | 42 | 33 | 32 | 41 |
| Shirley | 64 | 54 | 16 | 26 | 53 |

## 1. Let Samantha go with you to pick flowers.

- Enough flowers to fill the hunger bars entirely spawn.
- Samantha picks four flowers and asks Shirley which ones Daddy and Seamus would like.
- Jacob appears.
- Samantha gets attacked.
- Shirley tries to protect Samantha.
- Shirley loses 1 point of health.
- Samantha dies.
- Jacob walks off screen.
- Shirley takes Samantha's flowers and goes home.

### Results:

| Slime | 112111 | a121 | 112121 | 122121 | a221 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Seamus | XX | XX | XX | XX | XX |
| Samantha | XX | XX | XX | XX | XX |
| Shirley | 63 | 63 | 65 | 65 | 62 |

All of these Shirleys go directly to the final stage.

## 2. Pick flowers on your own.

- Samantha stays home and sets the dinner table.
- Shirley finds a patch of flowers.
- Enough flowers to fill Shirley's hunger bar spawn.
- Shirley rests for a little bit before going home.
- Shirley gains 1 point of health.
- Samantha dies from her sickness while Shirley is gone.
- Shirley comes home with the flowers.
- The dinner table is set for four.

### Results:

| Slime | 112112 | a122 | 112122 | 122122 | a222 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Seamus | XX | XX | XX | XX | XX |
| Samantha | XX | XX | XX | XX | XX |
| Shirley | 65 | 65 | 66 | 66 | 64 |

All of these Shirleys go directly to the final stage.

---

# Final Shirleys:

### From Choice 3:

| Path | Hunger | Health |
| --- | ---: | ---: |
| 121 | 6 | 4 |
| 221 | 6 | 4 |
| 212 | 1 | 6 |
| 222 | 2 | 6 |

### From Choice 4:

| Path | Hunger | Health |
| --- | ---: | ---: |
| 1122 | 2 | 5 |
| 1222 | 3 | 5 |

### From Choice 5:

| Path | Hunger | Health |
| --- | ---: | ---: |
| a11 | 6 | 2 |
| 12211 | 6 | 4 |
| a21 | 6 | 1 |

### From Choice 6:

| Path | Hunger | Health |
| --- | ---: | ---: |
| 112111 | 6 | 3 |
| a121 | 6 | 3 |
| 112121 | 6 | 5 |
| 122121 | 6 | 5 |
| a221 | 6 | 2 |
| 112112 | 6 | 5 |
| a122 | 6 | 5 |
| 112122 | 6 | 6 |
| 122122 | 6 | 6 |
| a222 | 6 | 4 |

| Final Path | Health | Number of Paths |
| --- | ---: | ---: |
| F1 | 1 | 1 |
| F2 | 2 | 2 |
| F3 | 3 | 2 |
| F4 | 4 | 4 |
| F5 | 5 | 6 |
| F6 | 6 | 4 |
| **Total** | | **19** |

---

# Final Stage
**Battle between Shirley and Jacob.**

Shirley still needs to eat. She needs to get flowers. She finds a large patch of flowers, the biggest one she's ever seen! As she collects them, she runs into Jacob.

- Jacob has 6 health. 
- Shirley hits first. 
- Only 4/19 Shirleys kill Jacob.

**If Jacob Wins:** Game over, player has the ability to restart.

**If Shirley wins:** Shirley goes home with tons of flowers. she lays flowers on the grave of Seamus. She makes new graves, one for Samantha and one for her slime husband, who we finally learned was named Slime. Both of their graves get flowers too.
