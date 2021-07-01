# Tic-Tac-Toe Project

Welcome to the Tic-Tac-Toe project! In this project, you will create a
well-designed HTML+CSS+JS browser-based application that will allow you to play
[tic-tac-toe]. It will combine all of the concepts that you learned in browser
basics, element selection and handling, and storage.

Please clone the [starter] to get started. In that repository,
you will find the following files:

* **index.html**: The HTML file that you'll modify to structure your UI
* **site.css**: The CSS file that you'll modify to style your UI
* **tic-tac-toe.js**: The JavaScript file you'll modify to add behavior to your
  game.

The goal of this project is for you to apply everything you've learned and
build the project with minimal guidance and hints. Time to get started:

## PART 1: The UI

The first step to complete on your way to a minimum viable product is to
build the front-end for the game. The UI should look like this [sketch].

The interface should include the following:

* A heading in which the game will announce a winner when the game ends
  (or a tie if that happens). The heading should be horizontally center aligned.
* A 3x3 grid for the playing surface. You should try to use either the
  _flexbox_ or _grid_ layouts to achieve this.
* Two buttons at the bottom that are , one that reads "New Game" on the
  left, and one that reads "Give Up" on the right. You should try to use either
  _flexbox_ or _grid_ layouts to achieve this.
* The entire UI should be horizontally center aligned in the page.

Apply paddings and margins where necessary to avoid overcrowding of components.
Remember, whitespace positioning is just as important as the actual UI elements'
positioning.

Use the images in `/wireframes` as guidelines for each step if the bullet
points above aren't clear.

## PART 2: Tracking Clicks

In this step, you will track the clicks of the players and fill the grid with
the appropriate symbols.

* For the "X" player, use [this][X] image.
* For the "O" player, use [this][O] image.
* When the player clicks an empty square, then it is filled with that player's
  symbol.
* When the player clicks a square that already contains a symbol, the game does
  nothing.
* The first click results in an "X". After that, the symbols "O" and "X"
  alternate with each click per the rules of tic-tac-toe.

During development, you can just refresh the browser to clear the board.

To make this game work, you'll eventually get around to checking if one of the
players won or if there is a tie. Refer back to Week 4's project for the game
logic.

## PART 3: Determining Game Status

In this step, you will determine if a game is won or in a tie state. A
reminder of the logic:

* If a player has any three in a row, then that player wins.
* If a player has any three in a column, then that player wins.
* If a player has either of the diagonals, then that player wins.
* If there is no win _and_ all squares have a player symbol in there, then
  the game is a tie.
* When the game begins, the header at the top should have no text in it.
* When a player wins the game, then the following happens:
  * The header at the top should read "Winner: X" or "Winner: Y" depending on
    which player won.
  * Empty squares in the grid no longer react to clicks.
* When the game goes into a tied state, the header at the top should read
  "Winner: None".

Again, refer back to your Week 4 tic-tac-toe project and make any necessary
updates.

## PART 4: Creating a New Game

In this step, you will now create the "New Game" button. The button should
behave like so:

* When the game status is not "won" or "tied", then the "New Game" button is
  disabled.
* When the game status is "won" or "tied", then the "New Game" button is
  enabled.
* When a player clicks the "New Game" button, then it
  * clears the game status,
  * clears the header,
  * clears the board, and
  * makes it so the next click of the tic-tac-toe board is an "X"
  * (disables the "New Game" button)

## PART 5: Giving Up

In this step, you will now make the "Give Up" button work. In the event one
user realized their impending doom, they may want to opt to immediately quit
and start a new game. Here's how it should work:

* When a player clicks the "Give Up" button:
  * Set the status of the game as "won" by the "other" player. That is, if "X"
    is the current player, when that player clicks the "Give Up" button, then
    "O" wins the game.
  * Show the winner status as won by the "other" player.
  * Disable the "Give Up" button.
  * Enable the "New Game" button.
* When a game is ongoing:
  * Enable the 'Give Up" button.

## PART 6: Saving Game State

In this part, store the game state using your choice of storage so that when
the user refreshes the page, the game isn't reset. The only way to reset should
be by pressing the "New Game" button.

## BONUS PART

When you click "New Game", randomly assign the computer as Player X or Player O.
Then, have the computer play automatically in response to its turn.

For example, if you click "New Game" and the computer becomes Player X, then it
will play an "X" on the board. Then, you will play an "O". After you click your
square, the computer will automatically play its "X". And, so on.

If the computer is Player O, then it will play after you play your first "X".

[tic-tac-toe]: https://en.wikipedia.org/wiki/Tic-tac-toe
[starter]: https://github.com/appacademy-starters/dom-tic-tac-toe
[sketch]: https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/ui-design.svg
[X]: https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg
[O]: https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg