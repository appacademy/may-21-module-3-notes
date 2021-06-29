# NodeList vs. HTMLCollection

An **HTML Element** is a HTML DOM element with a tag. For example, if you have
an HTML DOM element of `<h1>Hello World!</h1>`, `h1` is an HTML element.

A **Node** is a HTML DOM node that doesn't need to have a tag. It can be an HTML
element, but it can also be other smaller components of an HTML element. For
example, if you have an HTML DOM element of `<h1>Hello World!</h1>`, `h1` and
the text of "Hello World!" are both nodes.

An **HTML Collection** contains an array of HTML elements.

A **NodeList** contains an array of Nodes.

## Example Project

To start this project to understand the difference between NodeLists and
HTMLCollections, open the __index.html__ file in the browser and inspect the
browser console. The __js/index.js__ file will be loaded and print an example
of a NodeList and an HTMLCollection to compare the two.
