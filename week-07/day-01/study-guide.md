# Week 7 Day 1 Study Guide

## Web Design

Learning Objectives:

- Select a palette of colors that follow basic color theory
- Demonstrate a basic understanding of spacing and typography for readable
  interfaces
- Demonstrate familiarity with standard navigation iconography and conventions
- Be able to identify and label HTML elements in a low-res wireframe spec

### Skeumorphic vs. Flat Design

- Skeumorphic - digital components that resemble physical components as closely
  as possible
- Flat - Opposite of Skeumorphic (flat components with solid outlines and
  colors, no gradients or shadows)

### Dieter Rams's Web Design Principles

1. White Space - leave empty space surrounding text, images, and interactive
   elements
2. Colors
   - Aesthetics - colors should complement each other
     - Use a color wheel like https://color.adobe.com/create/color-wheel
   - Accessibility - make colors distinguishable even for the color-blind
     - Use a color blindness simulator like https://www.color-blindness.com/coblis-color-blindness-simulator/
3. Typography - use readable fonts
   - serif fonts - small strokes on the ends of letters like Times New Roman
   - sans-serif fonts - no serifs or small strokes like Helvetica or Verdana
4. Conventions - there are common conventions in design like for iconography
   that should be studied as a web developer
   - ex: three stacked hortizontal lines = hamburger menu icon

### Wireframes

- **Wireframes** are lightweight, rapidly developed design specs that outline
  the structure and layout of a web page
- tend to be rough and `low-resolution`, think of wireframes as a draft for the
  layout of your web application
- you should be able to identify semantic HTML elements and generate an HTML
  structure from a wireframe spec.

## HTML Fundamentals

Learning Objectives:

- Appropriately structure an HTML page
- Identify, utilize, and distinguish common semantic HTML tags
- Compare and contrast similar semantic HTML tags
  - _div_ vs. _span_ vs. _p_
  - _h1_ vs. _h2_ vs. _h3_
  - _ol_ vs. _ul_
  - _br_ vs. _hr_
  - _link_ vs. _a_
  - _head_ vs. _header_
  - _head_ vs. _body_ vs. _footer_

### HTML Basics

- **tag** - any text inside angle brackets (`<` and `>`) is a tag
  - Tags should be lowercase by convention
  - Tags come in pairs with an opening and closing tag
    - Closing tag is different from opening tags in that they have a forward
      slash (`/`) right after the opening angle bracket (`<`)
    - ex: `<h1>random text</h1>`
    - You cannot put whitespace right after the opening angle bracket
      - ex: cannot do `< h1>`
  - Not displayed in the browser
  - Used to tell the browser how to display or transform the text between the
    opening and closing tags
  - There are many default tags that you can use, see the docs for some
    examples: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- **element** - includes opening tag, closing tag, and the contents between the
  opening and closing tag
  - Examples:
    - `<title>Pictures of Barry's Beautiful Baby</title>`
    - `<img src="./images/baby-bess-bouncing-backwards.jpg">`
      - Image tags don't need a closing tag
- **attribute** - additional information about an element
  - key-value pairs in the opening tag (`name="value"`)
    - value should be wrapped in double quotations (not single)
    - should be in lowercase only
  - Examples:
    - `<img src="./images/baby-bess-bouncing-backwards.jpg">`
      - the `src` attribute on the `img` tag has a value of
        `"./images/baby-bess-bouncing-backwards.jpg"`
- whitespace is ignored in an HTML document (line breaks between tag names,
  attributes, and inside content will be considered as a single space)
- HTML comments - similar to JavaScript comments in that it prevents any of the
  text inside from being processed
  - ex: `<!-- This is an HTML comment. It will not be turned into an HTML element. -->`

### Semantic HTML

Review the [semantic-html.html] file for all the HTML tags that you should know
the semantic use of for the assessment. Try opening it in the browser to see
what the outcome is!

- Pay particular attention to picking the most appropriate semantic HTML
  elements. Not everything goes in a `div`!
- Think of the `div`s as sections and group items within where appropriate
- Make sure you keep your HTML code neat and easily maintainable
  - The HTML is indented consistently
  - Spacing is applied consistently
  - Code is fairly terse

[semantic-html.html]: ./semantic-html.html
