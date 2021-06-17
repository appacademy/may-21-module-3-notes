# Week 7 Day 2 Study Guide

## CSS Fundamentals

Learning Objectives:

- Import a CSS stylesheet into an HTML page
- Import CSS from one file into another
- Explain how CSS rules are applied based on their order and specificity
- Select elements by tag, id, and/or class
- Write "combinators" to create compound selector statements to target
  specific elements
- Apply pseudo classes (active, hover, visited) for specific elements in
  specific states
- Use the `overflow`, `overflow-x`, and `overflow-y` properties to effect
  clipping and scrolling on elements
- Research and apply CSS to modify the text style on an element:
  - Type faces, sizes, styles, and weights
  - Text transformation and alignment
  - Colors expressed as names, hexadecimal RGB values, and decimal RGB values
  - Everything about borders
  - Shadows
  - Opacity (transparency)
- Explain the generic font names "serif", "sans-serif", and "monospace" and
  correctly identify examples of each
- Add and style an image to the background of an element
- Explain why using Web fonts helps with consistent experience across viewing
  devices
- Recall and explain the different absolute and relative length units in CSS
- Calculate the specificity of CSS rules and determine which rule override the
  properties of another

### What is CSS?

- CSS is a language and stands for Cascading Style Sheets
- Helps us to include colors, layouts, and fonts in our web applications
- CSS is used with HTML to provide an aesthetic layout for our web users

### Linking an External Stylesheet to HTML

- Common practice is to keep CSS styles in an external stylesheet
- To link an external stylesheet in an HTML document, use `link` tags
  - Insert `link` tags in between the `head` HTML tags
  - `link` tags should have a `rel` attribute with the value of `stylesheet`

```html
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
    <link rel="stylesheet" href="/styles/site.css">
  </head>
  <body>
  </body>
</html>
```

- As the `href` attribute, you can use relative paths or absolute paths as the
  value
  - Relative paths are pathing relative to the HTML document in your file
    structure
    - For example, if you have the following file structure:

      ```plaintext
      web-application
        ├── assets
        │   └── stylesheets
        │       └── application.css
        └── index.html
      ```

    - Then you can link the `application.css` file in your `index.html` file in
      the following ways:
      - `<link rel="stylesheet" href="./assets/stylesheets/application.css">`
      - `<link rel="stylesheet" href="/assets/stylesheets/application.css">`
      - `<link rel="stylesheet" href="assets/stylesheets/application.css">`
  - Absolute paths are pathing that are absolute to your file structure or
    exist somewhere on the web
    - For example, using the same file structure as before, you can use an
      absolute file path to link the `application.css` file in your `index.html`
      file:
      - `<link rel="stylesheet" href="/home/web-application/assets/stylesheets/application.css">`
      - This is **NOT** recommended! This is not maintainable because your
        file directories can be completely different from another person's file
        directory
    - You can also use stylesheets on the web:
      - `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">`

### Linking a Stylesheet in a Stylesheet

- Use the `import` keyword in a CSS stylesheet to import styles from a URL
  - URL can be relative file paths from the stylesheet or absolute file paths
  - URL can be an actual URL from the web
  - All `import`s **MUST** be at the top of the CSS stylesheet file

In the stylesheet you want to import into, add the `import` the URLs:

```css
@import <url>;
@import url(<url>);
```

Example:

```css
@import "main.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css");
```

- You can use single or double quotes

### CSS Selectors

- CSS selector is a pattern that you match to select one or more elements to
  apply CSS rules to
- Different kinds of selectors:
  - **type** selectors - by tag name
    - ex: `p`, `div`, etc.
  - **class** selectors - by class name
    - use a period, `.` in front of the class name to select all elements with
      that class name
    - ex: an HTML element `<button class="active">` has a class name of
      "active", to select it, use the selector `.active`
  - **id** selectors - by id
    - use a period, `#` in front of the id name to select all elements with
      that id name
    - ex: an HTML element `<ul id="list-1">` has an id of "list-1", to select
      it, use the selector `#list-1`
  - **universal** selectors - match any element of any tag
    - use the `*` character to select and match with any element
  - **attribute** selectors - by attribute name, can select by attribute-value
    pair as well
    - use brackets around the attribute name to select an element by an
      attribute
    - ex: an HTML element of `<a title="hello-world">` has an attribute of
      `title`, use the selector `a[title]`
    - ex: to select all elements with an attribute-value pair of `type=submit`,
      use the selector `*[type=submit]`
  - **compound** selectors - by multiple selectors
    - Combine multiple selectors together into one selector without any spaces
      between them
    - ex: To select all `div`s that also have a class name of "box", use the
      tag selector of `div` and the class name selector of `.box` and combine
      them without spaces to produce a selector of `div.box`
  - **combinator** selectors - by combining two selectors using an operator
    - **descendent** selectors - uses the **space operator**, " ", to combine
      two selectors, it will select all elements that match the second selector
      that are also descendents of all the elements matching the first selector
      - ex: to select the `p` elements that are descendents of the elements with
        class name of "contact-us" (like:
        `<section class="contact-us"><div><p></p><div></section>`), combine the
        `.contact-us` selector and the `p` selector with a space in between
        them, `.contact-us p`
    - **direct-child** selectors - uses the **greater than operator**, ">", to
      combine two selectors, it will select all elements that match the second
      selector that are also the children or direct descendents of all the
      elements matching the first selector
      - ex: to select the `h2` elements that are direct descendents of the
        elements with class name of "menu" (like:
        `<div class="menu"><h2></h2><div>`), combine the `.menu` selector and
        the `h2` selector with a greater than symbol between them, `.menu > h2`
    - **adjacent-sibling** selectors - uses the **plus operator**, "+", to
      combine two selectors, it will select all elements that match the second
      selector that also share the are the most adjacent younger sibling of all
      elements matching the first selector
      - the second selector **MUST** be the closest younger sibling of the
        first selector
      - ex: to select the `h2` elements that are adjacent-siblings with the `h1`
        elements (like: `<div class="menu"><h1></h1><h2></h2><div>`), combine
        the `h1` selector and the `h2` selector with a plus symbol between them,
        `h1 + h2`
      - ex: In the following example, only the second `h2` element will be
        selected if using the rule `h1 + h2`

        ```html
        <h2>Hello World!</h2>
        <h1>Hello World!</h1>
        <h2>Hello World!</h2>
        <h2>Hello World!</h2>
        ```

  - **pseudo-class** selectors - by element state
    - There are different kinds of of element states, here are some common
      examples: `active`, `disabled`, `hover`, `last-child`, `first-child`
    - use a colon, ":", in front of an element state to select an element by
      its state
    - ex: to select all elements that have a state of `hover`, use `*:hover`
- You can apply rules for multiple selectors using a comma `,`
  - ex: to apply the same styles for both `h1` and `h2` tags - `h1, h2`
- CSS rules can override each other depending on the order in which the rules
  are applied, but also the level of specificity
  - CSS rules are read top-down, so the bottom rules will override the top rules
    if their level of specificity are the same
  - **level of specificity** is the order of importance calculated by examining
    what type of CSS selectors are used for the rules:
    1. If one has a greater number of ids, then it wins. If there is a winner,
       STOP.
    2. They must have the same number of ids, so the one with the greater number
       of classes, pseudo-classes, and attributes wins. If there is a winner,
       STOP.
    3. They must have the same number of ids and the same number of classes,
       too. The rule with the greatest number of tags wins. If there is a
       winner, STOP.
    4. They have the same number of ids, classes, and tags. The rule that the
       browser read last wins.

## Box Model and Positioning

Learning Objectives:

- Describe how:
  - padding and margins work in the box model
  - the browser positions a fixed positioned element
  - the browser positions a relatively positioned element
  - the browser positions absolutely positioned elements with and without a
    relatively positioned parent element
  - the browser positions a static positioned element
- Identify elements rendered with specific padding and margin settings
- Apply padding and margins to HTML elements to achieve a desired layout
- Apply positioning settings to elements (fixed, relative, and absolute) to
  HTML elements to achieve a desired layout
- Identify which HTML elements have a default "inline" display value
- Identify which HTML elements have a default "block" display value
- Describe and use z-index positioning of elements

### CSS you should know

You should know or be able to easily locate in the docs and use the following
CSS properties:

- `color`
- `background-color`
- `font-family`
- `font-size`
- `font-style`
- `font-weight`
- `text-align`
- `text-decoration`
- `text-transform`
- `background-image` using the `url()` CSS function
- `background-size`
- `display`
- `width`
- `height`
- `padding`
- `border`
- `margin`
- `box-sizing`
- `box-shadow`
- `opacity`
- `position`
  - `top`
  - `bottom`
  - `left`
  - `right`
  - `z-index`

Others:

- `rgb()`, `hsl()`, `rgba()`, `hsla()` CSS functions
- alpha channel value
- colors in hex value
- absolute units
  - `px`
  - `pt`
- relative units
  - `rem`
  - `em`
