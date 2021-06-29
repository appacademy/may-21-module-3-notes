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
      - ex: `document.getElementsById('title')` will return an HTML DOM element
        with an `id` attribute with a value of "title"
    - `document.getElementsByTagName(tag)` - takes in a `tag` 