# Window Object Debugging Project

In this project, your tasks will be to use the `window` object to manipulate a
basic portfolio page, find objects within the `document` by implementing some
search functions, and import/export files with ES6 modules.

To get started:

- Clone the [starter]
- Run `node app.js` to start your application at `localhost:5000`
- View the site on your browser and follow the instructions below.

## Connecting JavaScript Modules

You will be provided an `index.html` file within the `assets` folder that
contains a basic portfolio site. However, there is some JavaScript in
`/assets/js/index.js` that we want to connect to it to execute. However, you'll
notice there are some calls to functions that don't exist in the file.

These functions exist in `/assets/js/manipulate.js` and `/assets/js/search.js`.
Your task will be to properly import and export the functions within to
`index.js`.

Note: They should be coming from other JavaScript files in the form of ES6
modules.

## Connecting HTML with JavaScript

You will want the execute the code in `index.js` after everything on the page
has loaded. To achieve this, wrap the code in `index.js` within a
`window.onload` callback. Then import `index.js` into the HTML in the
appropriate location to continue.

## Filling out the Modules

Now that you've connected everything, the functions being called need to be
filled in! Start in `/assets/js/manipulate.js`.

Here you will find functions that manipulate the `document` in various ways.
Read the comments within the functions to complete the functions accordingly.

Next, move to `/assets/js/search.js`. Here you will combine your knowledge of
search algorithms and the DOM. You can think of the DOM as a sort of tree,
where each item in the DOM (e.g. `<div>`, `<p>`, etc.) can be considered a
node of the tree.

Some search functions are described in the file for you to complete (e.g.
`findElementById`, `findElementsOfTag`, etc.). You may find the `children`
property of an element to be useful. If necessary, you may create your own
helper functions.

To view the output of the functions in `search.js`, use `console.log()` to
print the results of calling the functions in `index.js`.

[starter]: https://github.com/appacademy-starters/window-debug-project
