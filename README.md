# Cowz-bulls/Escape
##WDI project 1

Escape is based on the old game Cows and Bulls.

The numerical version of the game is usually played with 4 digits, but this version can also be played with any number of cells.

The player tries to guess the number  Then, in turn, the players try to guess their opponent's number who gives the number of matches. If the matching digits are in their right positions, they are "Sineloa's", if in different positions, they are "Zetas". Example:

Secret number: 4271
Opponent's try: 1234
Answer: 1 Sineloa and 2 Zetas. (The Sineloa is "2", the Zetas are "4" and "1".)

You have to let El Chapo Escape otherwise he is going to kill you and your family.

#Build
HTLM5, JQUERY, Javascript,Googlefonts


Play it here! https://bibliotheque-monsieur-1632.herokuapp.com/

Screen Shot 2015-07-15 at 16.01.58


#Rules

You get 7 attempts to try and guess the code
Numbers must be between 0-9
Dont try and play with too many boxes as you will lose

#Approach/How it works

The user selects the difficulty that they want to play.  In this case how many boxes they want to guess in order to break the code.  Once selected the boxes are created dynamically and then a random number given to each box which is then added to an array.

It is then the users turn to guess the value of the boxes.  Once they press the key aka submit the code enters a loop where it is checked against the other array to see if the values match.  If they appear in the code they are returned Zetas.  If they appear in the code and are in the correct place they are returned Sineloas.  

A player wins when they have all Sineloas.  The padlock will then open.

#Problems

Main problem was from my dodgy code and not knowing how to do something properly.  I managed to break down the logic in my head but when I put it into practive I had syntax errors.
