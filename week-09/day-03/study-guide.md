# Week 9 Day 3

## Event Handling

Learning Objectives:

- Be very familiar with these common event listeners: `click`, `submit`,
  `change`, and `DOMContentLoaded`
- Research to discover and utilize a new event listener to accomplish a given
  task
- Add and/or remove an event listener from one or more HTML elements
- Manipulate the DOM as a response to an event
- Diagram how an event propagates
- Predict and prevent the default behavior of an event
- Add, remove, and read data on an HTML element

### What are Events?

- **Event** - an action that happens on an HTML DOM element
  - common events that you need to know well for the assessment:
    - `click` - when the mouse presses and releases on an _HTML element_
      - [MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
      - ex: a `click` event on a `button` element
    - `submit` - when an _HTML `form` element_ is submitted
      - [MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
      - ex: the `submit` event on a `form` element
    - `change` - when the value of an _HTML `input`/`select`/`textarea` element_
      is committed as a change
      - [MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
      - ex: the user selects a different option on a `select` element
      - to check the `value` of an HTML `input`/`select`/`textarea` element in
        JavaScript, use the `value` property on the HTML element:
        - ex: if you type "Hello World!" into an input of type "text",
          `input.value` would be "Hello World!"
    - `input` - whenever an _HTML `input`/`select`/`textarea` element_'s value
      changes
      - [MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
      - ex: the user types in a value in an `input` element
    - `DOMContentLoaded` - when the HTML DOM is fully loaded without waiting
      for stylesheets, images, and other assets to finish loading
      - [MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)
      - `DOMContentLoaded` event is an action that can only be done on the
        `window` object (BOM) or the `document` object (DOM)
      - **NOTE**: this is different from the `window.onload` function because
        the `window.onload` gets called when the HTML DOM AND all assets are
        finished loading. It's more common to use the `DOMContentLoaded` event
        when running JS files in the frontend that read/manipulate HTML DOM
        elements.
  - there are a ton other events that you don't need to know how to use exactly,
    but you should be able to use the MDN documentation for any event type and
    figure out how to use it
    - all other event types: [MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing)
  - **Event Capturing and Bubbling** - the order which the event handlers get
    called for an action
    - You can add an event handler that will be triggered for a specific action
      and let the browser know in what order it should be triggered
    - There are two phases which you can attach the event handler to are
      the capturing and bubbling phases
      - the default phase, if no phase is specified when attaching the event
        listener, is the bubbling phase
      - the capturing phase will happen first when the action is triggered,
        then the bubbling phase
      - **you don't need to know about the capturing phase for the assessment!**
    - **Event Propagation** - the order in which the event handlers on each
      element gets triggered in each phase:
      - In the capturing phase:
        - The browser checks to see if the element's outer-most ancestor `<html>`
          has a capturing event handler registered on it for the triggered action
          and runs it if so
        - Then it moves on to the next element inside `<html>` and does the same
          thing, then the next one, and so on until it reaches the element that
          was actually selected
      - In the bubbling phase, the exact opposite occurs:
        - The browser checks to see if the element selected has a bubbling event
          handler registered on it for the triggered action and runs it if so
        - Then it moves on to the next immediate ancestor element and does the
          same thing, then the next one, and so on until it reaches the `<html>`
          element
      - to stop the propagation of the event to the next element, you can call
        `event.stopPropagation()` on the `event` object
        - See [MDN docs on Event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
  - **Default Event Behavior** - default actions on an event
    - depends on the event itself
    - examples of default event behavior:
      - toggling a checkbox is the default action of clicking on a checkbox
      - loading a new page is the default action of submitting a `form`
      - automatically change the value of the text `input` whenever the user
        types something inside of it is the default text `input` action
    - to prevent the default action from happening, call `.preventDefault()`
      on the `event` object
      - ex: `event.preventDefault()`
    - See [MDN docs on Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
  - So how do you programmatically execute code whenever an event on an HTML
    element happens or gets triggered? By subscribing to the particular event
    on a specific HTML element using an event listener
- **Event Listener** - allows you to execute code whenever a particular event
  on a specific HTML element happens or gets triggered
  - like a subscription to an event
  - `element.addEventListener(eventType, callbackFunction)` - execute the
    `callbackFunction` when an event of the type of `eventType` happens to the
    specific HTML element, `element`, that you call the `.addEventListener()`
    method on
    - `callbackFunction(event)` will be invoked or called with an `event` object
      whenever the event gets triggered
      - `event` object - contains information about the elements that were
        involved in the event and some properties and methods that you can use
        to influence what happens next
      - useful properties on the `event` object:
        - `event.target` - the HTML element that triggered the event listener
        - `event.currentTarget` - the HTML element that you attached the event
          listener to
        - `event.defaultPrevented` - a boolean representing if the default
          behavior of the event has been prevented or not
      - useful methods on the `event` object:
        - `event.preventDefault()` - prevents the default behavior of the event
          to happen
        - `event.stopPropagation()` - prevents the event from bubbling or
          triggering event listeners on HTML elements higher than the HTML
          element that you attached the event listener to in the HTML DOM tree
  - `element.removeEventListener(eventType, callbackFunction)` - remove the
    event listener set by a previous `.addEventListener()` call for the event
    type of `eventType` on a specific HTML element, `element`, and a reference
    to the original function that you called `.addEventListener()` with

Examples of using event listeners:

To print "Hello World!" to the console when the HTML DOM is fully loaded, you
would add an event listener to the `window` for the `eventType` of
`DOMContentLoaded` and in the `callbackFunction`, print "Hello World!":

```js
window.addEventListener('DOMContentLoaded', () => console.log("Hello World!"));
// can also do this:
// document.addEventListener('DOMContentLoaded', () => console.log("Hello World!"));
```

To print the value of a form `<input type="text">` when a user types a character
in the input, you would add an event listener to the `<input>` element for the
`eventType` of `input` and in the `callbackFunction`, print the value of the
`<input>` using the information about the `<input>` element in the `event`
object:

```js
const textInput = document.querySelector('input[type="text"]')
textInput.addEventListener('input', (event) => {
  console.log(event.currentTarget.value));
});
```

### Read/Update `data-` attributes

`data-` attributes are really useful for storing data that doesn't need to be
displayed on HTML elements.

Given the following HTML:

```html
<div data-banana="yellow"></div>
```

You can read and update `data-` attributes on an HTML element:

```js
const div = document.querySelector('div');
div.dataset.banana; // "yellow"
div.dataset.coolInfo = "Hello World!";
```

The above code will change the HTML to be:

```html
<div data-banana="yellow" data-cool-info="Hello World!"></div>
```
