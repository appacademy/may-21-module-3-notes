# Practice Data Attribute on HTML Elements

In this practice, you will be explore the `data-` attribute on HTML elements.
You will be provided an `index.html` file with a basic form set up to add items
to a shopping list.

The form consists of a `#name` `<input>` field, representing the name of the
list item, as well as a `#type` `<select>` field representing the category the
item belongs to. The `#add` button to add the item to the list is currently
non-functional.

Your job will be to complete the following tasks in `data.js` and `index.css`:

- Create an event listener for the `#add` button to add items to the list.
- Display the items in the `#shopping-list` `<ul>` element.
- Set the `data-type` attribute of each `<li>` element with the value of the
  `type` field.
- For each type, style the `<li>` a different background color in `index.css`.
  Recall that CSS supports attribute selectors using square brackets.

To start, clone the [repository][repo].

[repo]: https://github.com/appacademy-starters/data-in-elements