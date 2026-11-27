# Plan:
  
  ## Intro Part 1:
  
      - Main character: Gets close to slime, kills it with sword.
      - There are about 10 slimes that come out over about 30 seconds.
      - The game counts down until "next level".
      - After character kills last slime, the game pauses and you can click a button that says "next level"
      - The character walks off screen
      - Game actually zooms in on last slime instead of following character
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
      - 
    Shirley's slime husband never came home. (Fade to black)
  
  ## Important Info:
      Slimes have health and hunger bars.
      Seamus: 2, 2 (shown as 22)
      Samantha: 4, 4 (shown as 44)
      Shirley: 6, 6 (shown as 66)
      
      Shirley is a large purple slime with a yellow bow.
      Seamus is a blue little slime.
      Samantha is a pink bigger slime.
      
      Every choice = -1 hunger per slime.
  
# Choice 1:
  It's been three days. Shirley and her slime kids are getting hungry. Her kids don't think their dad is ever coming home. Shirley still has some hope. 
  Seamus:     12
  Samantha:   24
  Shirley:    36
  
  ## 1. Pick the flowers herself?
        3 flowers spawn randomly. One flower goes to each.
  ## 2. Wait for her slime husband?
        Seamus, the weakest and smallest, dies of hunger.
        All surviving slimes lose a point of hunger.
  
  # Choice 2:
  It's been six days. Samantha is sick. Shirley can either go look for flowers, or she can stay and nurse Shirley back to health.
              1        2
  Seamus:     12   -   XX
  Samantha:   24   -   14
  Shirley:    36   -   26
  
  ## 1. Stay home and take care of Samantha.
        Seamus, the weakest and smallest, dies of hunger (if he isn't dead already).
        Shirley loses a point of hunger.
  ## 2. Pick flowers.
        2 flowers spawn randomly. One goes to Shirley and one goes to Samantha.
        Seamus, the weakest and smallest, dies of hunger (if he isn't dead already)
        Samantha loses 2 points of health.
  
  # Choice 3:
  It's been nine days. Shirley wants to go with you to get flowers.
              11       21       12       22
  Seamus:     XX   -   XX   -   XX   -   XX
  Samantha:   24   -   14   -   22   -   12 
  Shirley:    16   -   16   -   26   -   26
  
  ## 1. Let Samantha go with you to pick flowers.
        Enough flowers to fill the hunger bars entirely spawn.
        The slimes get attacked, each losing 2 points of health.
        Samantha may die.
  ## 2. Pick flowers on your own.
        Shirley finds one flower. She feeds herself.
        Samantha loses a point of hunger (and may die)
  
  # Choice 4
  .
              111      211      121      221      112      212      122      222
  Seamus:     XX   -   XX   -   XX   -   XX   -   XX   -   XX   -   XX   -   XX
  Samantha:   42   -   42   -   XX   -   XX   -   14   -   XX   -   12   -   XX
  Shirley:    64   -   64   -   64   -   64   -   16   -   16   -   26   -   26
  
  Samantha has died in half of these. Lone Shirleys don't participate in this choice. We'll call 111 and 211 "a" for simplicity:
              a        112      122
  Seamus:     XX   -   XX   -   XX 
  Samantha:   42   -   14   -   12 
  Shirley:    64   -   16   -   26
  
  
  # Final Stage:
  Shirleys:
  121: 64
  221: 64
  212: 16
  222: 26
