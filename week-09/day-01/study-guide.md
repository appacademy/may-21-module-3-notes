# Week 9 Day 1

## Browser Basics

Learning Objectives:

- Run JavaScript on the browser by importing scripts into HTML files
- Import JavaScript from one file into another
- Diagram the process in which the browser loads HTML, images, CSS stylesheets,
  scripts, fonts, and other assets
- Compare and contrast running JavaScript in Node in a console vs. the runtime
  environment on the browser
- Execute specified JavaScript after all of the elements in a page have loaded
- Compare and contrast DOM and BOM
- Manipulate key elements of the BOM, including the `window` and the `document`,
  using JavaScript

## Chrome Developer Tools

- Elements tab
  - test and manipulate your HTML and CSS
- Console tab
  - test JavaScript and debug JavaScript code on the frontend
- Sources tab
  - inspect an application's file structure and create/edit files to the
    application
- Network tab
  - see HTTP requests the page is making
- Application tab
  - view and manipulate the application's data (Web Storage and Cookies)

## Importing JavaScript files into HTML

- Using the `<script>` HTML tag with the `src` attribute, you can load
  JavaScript files into an application that will be run when loaded
- The JavaScript files will be loaded in the order that they are placed in the
  HTML document (from top-down)
- Placement of the `<script>` tags determine when the JavaScript file that it
  imports gets loaded
- Best practices for where to place the `<script>` tags:
  1. As children in the `<head>` HTML element
     - JavaScript files that are imported this way may be loaded and run BEFORE
       all the HTML DOM elements are constructed in the `<body>` HTML element
  2. As the last child elements of the `<body>` HTML element
     - This will guarantee the JavaScript files that are imported to be loaded
       and run AFTER all the HTML DOM elements are constructed before them

Example of imported JavaScript files inside of the `<head>` HTML element:

```html
<!DOCTYPE html>
<html>
 <head>
   <title>Importing JavaScript to HTML</title>
   <script src="your-script-here.js"></script>
   <script src="../your-other-script-here.js"></script>
   <script src="/another-script-here.js"></script>
 <head>
 <body>
   ...
 </body>
</html>
```

Example of imported JavaScript files at the end of the `<body>` HTML element:

```html
<!DOCTYPE html>
<html>
 <head>
   <title>Importing JavaScript to HTML</title>
   ...
 <head>
 <body>
   ...
   <script src="your-script-here.js"></script>
   <script src="../your-other-script-here.js"></script>
   <script src="/another-script-here.js"></script>
 </body>
</html>
```

## DOM vs. BOM

- **BOM** - Browser Object Model, the chief browser object is the `window`
  - useful properties on the `window` object:
    - `navigator` - information about the browser and device
      - ex: `window.navigator.cookieEnables` or `navigator.cookieEnables`
    - `screen` - information about the dimensions and how the HTML is rendered
      - ex: `window.screen.height` or `screen.pixelDepth`
    - `history` - interface for reading and manipulating the browser history
      - ex: `window.history.back()` or `history.go(-1)`
    - `location` - interface for reading and manipulating the URL
      - ex: `window.location.host` or `location.pathname`
    - `document` - interface for reading and manipulating the HTML elements
      - ex: `window.document.title` or `document.body`
      - `document.body.children` results in an array-like object whose elements
        are the child HTML elements of the `<body>` HTML element
- **DOM** - Document Object Model, or `window.document` or just `document`
  - contains a collection of HTML elements
  - the web page and the object hierarchy of the HTML document

## ES6 Modules

- used to import/export JavaScript files into other JavaScript files
- `export default ...` - statement to export one unnamed item per file
  - the item will be named when imported
  - can only have one `default` or unnamed export per file
- `export ...` - keyword to export multiple named items per file
  - the items will be named when exported
  - can have as many named exports per file
- `import ... from ...` statement to import items from one file to another
  - define the items you want to import between `import` and `from`
  - define the file path of the file you want to import from after `from`
    - takes in a relative file path
    - must have the file extension name in the file path
    - ex: `./exported-items.js`
  - ex: `import printHelloWorld from './export.js'` where `printHelloWorld` is
    the `default` exported item from the `export.js` file in the same folder
    as the file that you are importing into
- `as` keyword (in an `import ... from ...` statement) to alias and namespace
  all of a file's exported items

### Examples

How to import an exported unnamed item:

```js
// export.js
export default function() {
  console.log('Hello World!');
}
```

```js
// import.js
import printHelloWorld from './export.js';

printHelloWorld(); // "Hello World!" will be printed to the console
```

How to import multiple exported named items:

```js
export const hello = "Hello World!";
export const oneStep = "One Step at a Time...";
export function printPhrase(phrase) {
  console.log(phrase);
}
```

```js
// import.js
import { hello, printPhrase } from './export.js';

printPhrase(hello); // "Hello World!" will be printed to the console
printPhrase(oneStep); // Error: oneStep is not defined
```

How to import multiple exported named items AND an unnamed item:

```js
export const hello = "Hello World!";
export const oneStep = "One Step at a Time...";
export default (phrase) => {
  console.log(phrase);
}
// default export above could have been written as:
// export default function nameDoesntMatterHere(phrase) {
//   console.log(phrase);
// }
```

```js
// import.js
import printPhrase, { hello, oneStep } from './export.js';

printPhrase(hello); // "Hello World!" will be printed to the console
printPhrase(oneStep); // "One Step at a Time..." will be printed to the console
```
