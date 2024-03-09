

# Checkers App for Project 1


## Explaination of Project

This is a two player game of checkers.  

- Orange chips represent black
- Blue chips represent red
- Green squares represent black squares
- White squares represent red squates

Player 2 goes first, just as in traditional checkers.

## User Story and Wireframes

### User Stories:

As player 1\
I want to play checkers with with player 2\
So that I can try to win the game.

As player 2\
I want to play checkers with with player 1\
So that I can try to win the game.

### Wireframes:

#### Starting Screenshot:

![Image of starting screen](/images/Screenshot_for_start_example.png)

#### Winning Screenshot:

![Image of starting screen](/images/Screenshot_for_winning_example.png)

## Technologies Used and Approach

### Technologies Used
- HTML
- JavaScript
- CSS

### Approach

- Used DOM manipulation to move and take chips
- Added Event Listeners to the following to find IDs:
  - Blue Chips
  - Orange Chips
  - Green Squares
- The chips' event listeners run a function which checks all possible moves
- The square event listener runs a function which checks:
  - If the chip was selected
  - And completes the move and runs the following functions:
    - For a simple Move:
      - `isChipKing(x_location_of_chip,y_location_of_chip)`
      - `changeTurn(turn)`
      - `winCheck()`
    - For a Move to Take Oppenent:
      - `takeOpponent(opponent_x_locaiton,opponent_y_location)`
      - `isChipKing(x_location_of_chip,y_location_of_chip)`
      - `changeTurn(turn)`
      - `winCheck()`
- The turn continues to alternate until someone wins:
  - Player can no longer make moves
  - OR
  - Player runs out of chips on the board

### Player Tracking:

Each square was given an ID in the HTML corresponding to the image below:

![Image of starting screen](/images/Screenshot_of_board_with_IDs.png)

Two arrays were used for tracking.

One Array had the player locations:
- *n* - can not move here
- *0* - open space to move
- *1* - represents player 1's location
- *2* - represents player 2's location

The other Array held the IDs of the board.
(See image below)

![Image of starting screen](/images/Array_helpers.png)


### Possible Move Logic:

Depending on the player and the kind of chip, all possible moves were checked and stored it move was possible.

For Player 2, the 4 positions were evaluated:

![Image of starting screen](/images/Screenshot_of_Player2_moves.png)

For Player 1, the 4 positions were evaluated:

![Image of starting screen](/images/Screenshot_of_Player1_moves.png)

For King Chips, regardless of Player, 8 positions were evaluated:

![Image of starting screen](/images/Screenshot_of_King_possible_moves.png)



## Unsolved Problems

### Cound not work on the following due to time constraints:
- Error Handling
- Reset Button
- Implement responsive design 

## Forthcoming Features
- Implement Rule where if another chip can be taken, it will be taken
- Error Handling
- Reset Button
- Implement responsive design 
