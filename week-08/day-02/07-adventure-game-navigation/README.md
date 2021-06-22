# Adventure Game Navigation

In this project, you will be creating UI through web pages for the Adventure
Game that you created some weeks ago. At that time, the terminal was the UI and
you could interact with the game through the terminal. This time, you will be
creating a UI through creating a server with page navigations and form
submissions.

## Phase 0: Context and Set Up

Clone the project from the [starter].

The project folder contains a `game` folder which holds files that you may recognize
from the earlier Adventure Game project. In the `class` folder, there are
several classes that are used to define the resources in the game, `Food`,
`Item`, `Player`, `Room`, and `World`. The `data` folder holds the seed data
for the resources. You will use the `basic-world-data.js` to test the basic
functionality of the server.

The server and the server data is in the `server.js` file. The
`basic-world-data.js` seed file is loaded into a new `World` to initialize the
game in the server.

Your goal is to create an interface for the game using HTML pages and HTML form
submission. In this project, you will create the following endpoints that
display the HTML pages and process the forms:

- `GET /` - Page to start the game with a form to name a new player
  - Submission of the form will start the Game
- `POST /player` - Create a new player of the game
  - Note: Only one player can be created for this game, so `player` is a
    singular resource and not a collection, which is why the resource in the
    route is singular and not plural
- `GET /rooms/:roomId` - Page to view a room in the world
  - The player of the game should only be able to view the room they are
    currently in
- `GET /rooms/:roomId/:direction` - Navigate to a room in a direction
  - The player of the game should only be able to go in a specified direction
    from their current room
- `POST /items/:itemId/action` - Attempt an action with the specified item
  - The player should only be able to interact with the items in their
    inventory or the room

## Phase 1: GET /

The `GET /` endpoint should display the `new-player.html` view page. This page
has a form for filling out the name of the player. For now, you can assume that
there is only one player in this game.

Create a route handler in the server for this endpoint. Make sure to test this
route by starting the server and making a request on the browser or Postman.

## Phase 2: POST /player

The `POST /player` endpoint creates a new player for the game with the name
given in the request body.

Examine the `Player` class to see how you can initialize a new player. A new
player should be created with a `name` and a `startingRoom`.

The player can start in any room that you want in the current world. You can
select the room by `id` from the `world` object created at the top of the server
file, `world.rooms[id]` (replace `id` with the `room_id` from the
form on `new-player.html`).

Assign the created player to the `player` variable defined at the top of the
server file. There can only be one player per server instance for now.

Afterwards, redirect the client to the route `/rooms/:roomId` where the
`:roomId` route parameter is replaced with the starting room of the newly
created player.

Make sure to test this endpoint! Test the endpoint on Postman first. After you
confirm the response components in Postman, try submitting the player creation
form on the browser and confirm that it works.

## Phase 3: GET /rooms/:roomId

At this point, you may have noticed that every time the server restarts, the
information the player is reset. Do you understand why that is? Make sure to
confirm your hypothesis by analyzing the `player` variable in your server
before and after restarting your server. (Hint: use `console.log`.)

The `GET /rooms/:roomId` endpoint should display the details of the specified
room. Take a look at the `room.html` view page and take note of all the
variables that should be replaced in the HTML.

- `roomName` - specified room's name
- `roomId` - specified room's id
- `roomItems` - list of the specified room's items
- `inventory` - list of the player's items
- `exits` - links to each of the rooms connected to the specified room

Take a look at the `Player` and `Room` class API's and identify the appropriate
properties or methods for each of these values.

Create the route handler for this endpoint that returns the replaced HTML
content.

Make sure to test this route by making the request on Postman. After you confirm
the response components in Postman, try submitting the player creation form on
the browser.

Finally, if the specified room in the route is not the player's current room,
then the server's response should redirect the client to the current room of the
player.

## Phase 4: GET /rooms/:roomId/:direction

In the room details view, you should be able to see the links to each of the
rooms connected to the specified room with a direction.

Create the `GET /rooms/:roomId/:direction` endpoint to allow the player to
navigate to a different room by specifying a direction they wish to travel from
their current room.

The server should redirect the client to the room detail page of the room in
the specified direction from the specified room.

To move the player to the room in the specified direction, take a look at the
`Player` class to identify and use a method to move the player.

Finally, if the specified room in the route is not the player's current room,
then the server's response should redirect the client to the current room of the
player.

Make sure to test this route by making the request on Postman. After you confirm
the response components in Postman, try navigating to another room using one of
the links in the room detail page.

## Phase 5: POST /items/:itemId/:action

If you examine the HTML elements in the first room details view in the browser
or the response in Postman, you should see a form for taking the rock which is
one of the available items in the room. The form will make a
`POST /items/0/take` call when submitted, where `0` is the `itemId` and `take`
is an `action`.

Create a `POST /items/:itemId/:action` endpoint that will allow the player to
do an action on the specified item. An `action` can be one of the following:

- `drop`
- `eat`
- `take`

Examine the `Player` class to identify methods for these actions on an item
based on an `itemId`.

Based on the `:action` route parameter, try allowing the player to perform the
action on the specified item by the `:itemId` route parameter.

If there is an error thrown from performing an action on an item, then render
the message of the error in the `error.html` view.

Make sure to test this route by making the requests for different actions on
Postman. After you confirm the response components in Postman, try performing
those actions in the browser.

## Bonus Phase: Style!

Style the HTML views! Add CSS styling and images to make the game look better.

## Bonus Phase: Add more rooms and items

Add more interesting rooms and items to the seed. You can even make different
kinds of items that are not just food, like weapons! You can also include
logic that will change the CSS styling of the page when the player is holding a
particular item. Like a flashlight!

[http://localhost:5000]: http://localhost:5000
[starter]: https://github.com/appacademy-starters/adventure-game-navigation
