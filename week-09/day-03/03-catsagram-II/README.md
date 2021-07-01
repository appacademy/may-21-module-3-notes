# Catstagram

Today you'll be building a project called Catstagram! Here are the features of
Catstagram:

- It shows a random kitten picture from the `https://thecatapi.com/` API.
- Users can vote on the picture.
- Users can comment on the picture.
- Users can delete comments.
- Users can request a new random kitten image to be shown.

You can download the [starter] to get started.

The most important feature of Catstagram is that all of the other features
listed above can be performed without requiring a page reload. For example,
when a new comment is created, the comment smoothly gets added to the page
without requiring the website to reload.

In building Catstagram, you will master the fundamentals of interacting with
APIs and implementing DOM manipulation behaviors in response to API calls.
This project will be a 3 day project. Each day will be outlined below. Come
back to this `README` for instructions each day.

## Day 1: Fetching a new cat image on page load

Today, you will be building out the HTML structure of the page using
JavaScript and using the Cats API to display a new cat whenever the page is
loaded.

To start, download the starter code. Take some time to browse through each
file. `public/index.html` is where your page will exist and where your scripts
will inject DOM elements into.

You'll be primarily working in the `public/index.js` file today, and at the
current moment, it's empty. Your job will be to write an `window.onload`
callback. This callback should inject the page with all the necessary elements
to match `wireframes/day1.png`. The image will have to be fetched from the Cats
API. Make sure you look through the [API documentation].

Don't forget to connect `index.html` with `index.js`.

If you wish, you may also add your own flair to the styling. You can choose to
create a CSS file, use inline-styles with JavaScript, or a mix of both.

## Day 2: Adding interactivity to the page

After learning about event listeners, it's time for you to add some
interactivity and complexity to the page.

First, add a button that requests and displays a new cat image, replacing the
original image.

Second, for the active image, allow the user to upvote/downvote the image and
display the score (upvotes - downvotes).

Third, allow the user to add comments to the image. You may want to look into
the [FormData] API if you're looking to use `form`.

Whenever a new image is requested, the upvotes and comments should be reset.

The final product should at the very least match `wireframes/day2.png`. If you
finish early, try to implement a delete comment feature!

By this point, your code could be getting a little bit messy within
`index.js`. Try DRYing up your code and keeping everything as SOLID as
possible.

## Day 3: Storing application state in web storage

Your product from day 2 will reset every time you reset the page. You will be
storing the state of the application, which includes the current image, the
upvote counter, and the comments, in `localStorage`.

Doing this prevents an accidental refresh from replacing the cute kitty you
were just looking at. This means that whenever the page loads, you will have to
check `localStorage` to see if there was a previous image and render the page
with that image data instead. Otherwise, your page should load in a fresh image
if it's the first time the user is accessing the page.

By the end of day 3, you should have the following features implemented:

- An image should load when a user arrives on Catstagram.
- If users want to fetch a new kitten image, then clicking the 'New Pic' button
  should load up a new image.
- The user can upvote and downvote the kitten image.
- The user can create a comment. When a comment is created, it gets appended
  below all the other existing comments.

Great job on implementing all the core features of Catstagram!

[starter]: https://github.com/appacademy-starters/catstagram-project
[API documentation]: https://docs.thecatapi.com/api-reference/images/images-search
[FormData]: https://developer.mozilla.org/en-US/docs/Web/API/FormData