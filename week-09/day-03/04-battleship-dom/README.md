# Battleship

Today, you'll write a basic implementation of a single-player [Battleship] game!
There is only one game board - the computer will fill the board with ships at
random, and it will be your job to find and destroy these ships by guessing
their coordinates.

You'll be utilizing your knowledge of event listeners to create an interactive
board. To make things more interesting, we'll also be using an ES6 class to
represent the board.

## Phase 0: Game design

In order to come up with a design, you should think of what product you are
trying to create. How do you go about designing the classes and methods needed
for this game?

Start by outlining some goals:

1. You want to implement a simplified version of the game [Battleship].
2. You want your user, a human player, to be able to see the state of the game
   in the browser and make moves by clicking coordinates on an interface.
3. The state of the game can be represented by a board with 9x9 squares, with
   five different ship types: carrier (5 units), battleship (4), cruiser (3),
   submarine (3), and destroyer (2).
4. To change the state of the game, a user must press a square. If that square
   has a ship on it, then that square has been successfully hit. If there is no
   ship, then that's considered a miss. Hits, misses, and squares that haven't
   been attacked yet should be displayed to the player, but not the ships if
   they haven't been hit.

You will create a `Board` class that handles initializing a new game as well as
keeping track of the game state.

Then you will create an interface with HTML, CSS, and JavaScript that displays
the game for the user to see and interact with.

The game will by served via `app.js`. To view your game, run `node app.js` in
the base directory. All the necessary files will have been created for you
already.

You can get started by cloning the project from GitHub here: [repo]

## Phase 1: `Board` class

To begin, you should first create the `Board` class in `assets/js/board.js`.
For now, the user is the only one playing, so a random board will be generated
for the user to try to clear. Here are some critical components of the `Board`
class that you will need:

- Properties indicating the length and width of the board (9x9)
- A list of the ship types and their lengths
- The grid of the game state
- Number of points to still be cleared
- Method to populate the board
- Method to check if the game is over

Hint: Randomly populating the board with ships can be tricky. Thinking
carefully through your plan and separating it into helper functions will pay
off here.

Also, keeping track of how many points are remaining will be useful to knowing
when the game is over.

## Phase 2: UI layer

Now it's time to build the interface. As before, you will be provided an empty
`index.html` in the `assets` folder and your job will be to create the
interface from scratch using JavaScript. This will be done in
`assets/js/index.js`. A CSS file is located in `assets/css/index.css` for you
to use. No inline-styling will be necessary.

The interface should be constructed as a simple 9x9 grid. Each element should
be clickable and have a `data` attribute that contains its value (whether or
not the square is empty or is part of a ship).

Also, don't add a reset button that allows the user to reset the game.

Don't worry about making the interface interactive just yet, but keep in mind
where your event listeners will go as you'll be implementing those in the
next phase.

By the end of this phase, your interface should look similar to
`wireframes/phase2.png`.

## Phase 3: Interactivity

Now that you have the basic layout of the UI covered, what happens when the
user clicks on the squares?

When a user clicks a square, there should be some visual indication that lets
the user know if they've hit a ship or missed. This can be done by adding CSS
classes to the squares that have been clicked.

If there is a hit, the square turns green, but if there is a miss, the square
turns red. Remember adding the value to the square's data attribute? You can
use this to check whether or not you've hit or missed.

Now that the user can interact with the UI, now you have to figure out when the
game is over, or else your user will just be left hanging. Recall that your
`Board` object should be keeping track of how many squares are still remaining.
Whenever a square results in a hit, the board should be updated, and then
checked to see if the game is over.

If the game is over, the board should be locked out, and a message should
appear, notifying the user they've completed the game. Just as you can add
event listeners, you can also [remove] them. The only thing left to do is
implement the reset button so the user can start a new game.

By the end of this phase, you should have a barebones version of a single
player Battleship running! If you have time, continue on to the bonus section.

## Bonus Phase 1: Computer player

To implement a computer player, you will have to create a `ComputerPlayer` and
`HumanPlayer` class to separate the game logic/actions for each.

Two boards should now be generated and the computer should make a random move
after the user makes a move. To make sure the computer doesn't repeat moves,
the game state must be more sophisticated than just the number of squares
remaining.

Also, keep in mind that the user should not be able to click on their own
board.

## Bonus Phase 2: Choosing Ship Placement

Refactor the board initialization process so that the user can select where
to place their pieces. This can be done either by submitting a form indicating
the ship locations, or implement draggable pieces on the board. This may be
a bit more ambitious, but look in the [draggable] HTML property and the
[drag and drop API] if you're interested!

## Bonus Phase 3: Custom custom custom

Introduce a "setup" phase, where each player can choose the board size and
ship sizes.

More validation will be needed to make sure your board can support the ships
you want to add!

[battleship]: http://en.wikipedia.org/wiki/Battleship_%28game%29
[remove]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
[draggable]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable
[drag and drop API]: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
[repo]: https://github.com/appacademy-starters/dom-battleship
