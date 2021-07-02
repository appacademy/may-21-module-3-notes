# Week 8 Day 2

## Element Selection and Manipulation

Learning Objectives:

- Compare and contrast `NodeList` and `HTMLCollection`
- Write a JavaScript statement that selects one or more elements by their
  attributes or tags
- Write JavaScript to add/remove attributes to an HTML element(s)
- Write JavaScript to get the children elements of a given parent element
- Write JavaScript to create/remove an HTML element(s) from the DOM
- Append a child HTML element to a parent HTML element using JavaScript
- Use a string to construct HTML elements with `.innerHTML`
- Compare and contrast `.innerHTML` and `.innerText` methods on an HTML
  element
- Write JavaScript to add/remove CSS inline-styling to an HTML element(s)
- Manipulate DOM elements using the response of a `fetch` request

### NodeList vs. HTMLCollection

See [00-NodeLists-vs-HTMLCollections](./00-NodeLists-vs-HTMLCollections) for
definitions and examples of Nodes, HTML Elements, NodeLists, and
HTMLCollections.

### Element Selectors

- **element selectors** in JavaScript - methods on the DOM or `document`
  (`window.document`) that will help you easily find HTML elements or Nodes on
  the DOM
  - different kinds of element selectors:
    - `document.getElementById(id)` - takes in an `id` string and returns the
      first HTML element with an `id` attribute that matches the given `id`
      string
      - ex: `document.getElementById('title')` will return an HTML DOM element
        with an `id` attribute with a value of "title"
    - `document.getElementsByTagName(tag)` - takes in a `tag` string and returns
      all the HTML elements in an `HTMLCollection` with the tagname matching the
      given `tag` string
      - ex: `document.getElementsByTagName('span')` will return an
        `HTMLCollection` containing all the `<span>` HTML elements
    - `document.getElementsByClassName(class)` - takes in a `class` string and
      returns all the HTML elements in an `HTMLCollection` with the `class`
      attribute containing the value of the given `class` string
      - ex: `document.getElementsByClassName('yellow')` will return an
        `HTMLCollection` containing all the HTML elements with a class of
        "yellow"
    - `document.querySelector(selector)` - takes in a `selector` string and
      returns the first Node or HTML Element that matches the given CSS
      `selector`
      - ex: `document.querySelector('div.blue')` will return the first `div`
        HTML element with a class of "blue"
    - `document.querySelectorAll(selector)` - takes in a `selector` string and
      returns all the Nodes or HTML Elements in a `NodeList` that matches the
      given CSS `selector`
      - ex: `document.querySelectorAll('div.blue')` will return a `NodeList`
        containing all the `div` HTML elements with a class of "blue"

### HTML Element

- **HTML element** -  is a HTML DOM element with a tag
  - ex: if you have an HTML DOM element of `<h1>Hello World!</h1>`, `h1` is an
    HTML element.
- `document.createElement(tag)` - a method on the DOM or the `document` used to
  create an HTML element
  - returns a new HTML element with the given `tag` name
  - ex: `const h1 = document.createElement('h1')` creates an HTML element that
    looks like this: `<h1></h1>`
  - important note: it does not add it to the DOM or the HTML on the page
    - to add it to the DOM, you need to add it as a child element to any of the
      existing HTML elements on the DOM using the `appendChild()` method (see
      below for details about how to use this method)
- useful properties of an HTML element
  - `children` - returns all the HTML elements as an `HTMLCollection` that are
    the direct children of the given element
    - ex:
      - HTML: `<div>Hello <span>World!</span></div>`
      - element: `const div = document.querySelector('div')`
      - `div.children` would be an `HTMLCollection` that includes just the
        `span` element (`[span]`)
      - `Array.from(div.children)` allows you to turn the `HTMLCollection` into
        an array
  - `childNodes` - returns all the Nodes as an `NodeList` that are the direct
    children of the given element
    - ex:
      - HTML: `<div>Hello <span>World!</span></div>`
      - element: `const div = document.querySelector('div')`
      - `div.childNodes` would be an `NodeList` that includes the text "Hello "
        and the `span` element (`[text, span]`)
      - `Array.from(div.childNodes)` allows you to turn the `NodeList` into an
        array
  - `innerText` - used to read and set the text content of an element
    - ex:
      - HTML: `<p>Hello World!</p>`
      - element: `const p = document.querySelector('p')`
      - `p.innerText` would be "Hello World!"
      - to change the text inside of the `p` element to "One Step", set the
        property of `innerText` on the `p` element like so:
        `p.innerText = "OneStep"`
  - `innerHTML` - used to read and set the HTML of an element
    - important note: best practice not to use it as it can create HTML elements
      that you may not want when showing data from a server or a source created
      from an application that isn't your own
    - ex:
      - HTML: `<p>Hello</p>`
      - element: `const p = document.querySelector('p')`
      - `p.innerHTML` would be "Hello"
      - to change the HTML inside of the `p` element and create a `span` element
        with the text of "World!" after "Hello" (`Hello <span>World!</span>`),
        set the property of `innerHTML` on the `p` element like so:
        `p.innerHTML = "Hello <span>World!</span>"`
  - `style` - an object that represents the inline-styling for the element
    - important note: inline-styling is the MOST-SPECIFIC CSS rule (will
      override even `id` rules)
    - each `key` on the object is by default an empty string "" and represents
      a CSS property
    - ex:
      - HTML: `<p>Hello World!</p>`
      - element: `const p = document.querySelector('p')`
      - `p.style.backgroundColor` would be ""
      - to change the background-color CSS property of the `p` element set the
        property of `backgroundColor` to "green" on the `p` element's `style`
        object like so: `p.style.backgroundColor = "green"`. This will result in
        changing the actual HTML for the `p` element to be:
        `<p style="background-color: green;">Hello World!<p>`
- useful methods of an HTML element:
  - `getAttribute(name)` - reads the attribute value of the given attribute
    `name` on the given element
    - ex:
      - HTML: `<div class="yellow">Hello World!</div>`
      - element: `const div = document.querySelector('div')`
      - `div.getAttribute('class')` would return "yellow"
  - `setAttribute(name, value)` - sets the attribute `value` of the given
    attribute `name` on the given element
    - ex:
      - HTML: `<div>Hello World!</div>`
      - element: `const div = document.querySelector('div')`
      - `div.setAttribute('class', 'yellow')` would apply a class name of
        "yellow" to the `div` element
  - `appendChild(node)` - adds the given `node` to the given element as the
    last child of the element
    - ex:
      - HTML: `<ul></ul>`
      - element: `const ul = document.querySelector('ul')`
      - node: `const li = document.createElement('li')`
      - `ul.appendChild(li)` would add the newly created `li` element to the
        existing `ul` element
  - `remove()` - removes the given element from the DOM completely
    - ex:
      - HTML: `<div>Hello <span>World!</span></div>`
      - element: `const span = document.querySelector('span')`
      - `span.remove()` would remove the `span` element from the DOM so the
        `div` element would look like this: `<div>Hello </div>`
