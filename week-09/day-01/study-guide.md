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
- **DOM** - Document Object Model, or `window.document` or just `document`
  - contains a collection of HTML elements
  - the web page and the object hierarchy of the HTML document
