# Week 7 Day 2 Study Guide

You do not need to know how to do floats for the assessment.

## Flexible Box Model

Learning Objectives:

- Explain how flexible box layout lays out elements
- Use the `flex` property to specify grow, shrink, and basis values.
- Use the `flex-direction` property to direct the layout of the content
- Use the `flex-wrap` property to affect the wrap of content layout within an
  element using flexible box layout
- Use `align-self`, `justify-content`, and `align-items` to change the way
  that children elements are laid out in a flexible box layout

### What is Flexbox?

- Flexbox is a 1-D layout system that lets developers position items in a
  flexible container
- Containers within a flexbox are resized and distributed to best fill the
  available space
  - Within a flexbox, a container's width and height automatically adjust to fit
    the viewport, then the sizing, alignment, and spacing between the items
    inside the container are optimized for the available space
- A flexbox layout includes:
  - a parent element or the **flex container**
  - the direct children elements or the **flex items**

### Flexbox properties to know

You should know or be able to easily locate in the docs and use the following
CSS properties:

- `display: flex;`
- `flex-flow`
  - `flex-wrap`
  - `flex-direction`
- `order`
- `justify-content` (behavior changes depending on the `flex-direction` property)
- `align-items` (behavior changes depending on the `flex-direction` property)
- `gap`
- `flex`
  - `flex-grow`
  - `flex-shrink`
  - `flex-basis`

### Flexbox Games

The following games are good practice to gain basic flexbox practice:

- [Flexbox Froggy](https://flexboxfroggy.com/) - complete all 24 levels!
- [Flexbox Defense](http://www.flexboxdefense.com/) - finish all 12 waves!

## Grid Layout

Learning Objectives:

- Explain how grid layout lays out elements
- Use the `grid-template-columns`, `grid-template-rows`, and `grid-template`
  properties to specify the layout of the grid using relative and absolute
  measures
- Use `grid-template-areas` to label areas of a grid and `grid-area` to assign
  an element to the area
- Use `grid-column-gap`, `grid-row-gap`, and `grid-gap` to set the "gutter"
  areas between elements in a grid layout
- Explain and use the "fr" unit of measure
- Use `justify-items`, `align-items`, `justify-content` and `align-content` to
  layout items in each grid area
- Compare and Contrast Flex Box and Grid layouts and their use cases

### What is Grid?

- CSS Grid is a 2-D layout system that lets developers create a grid with
  columns and rows
  - Why not use tables? You can use tables for tabular data, but you should not
    use tables for laying out elements on your web application
    - use tables for displaying tabular data
    - use grids for layout
- A grid layout includes:
  - a parent element or the **grid container**
  - the direct children elements or the **grid items**

### Grid properties to know

You should know or be able to easily locate in the docs and use the following
CSS properties:

- `display: grid;`
- `grid-template-columns`
- `grid-template-rows`
- `grid-template-areas` - grid parent
  - `grid-area` - grid child item
- `grid-gap`
  - `grid-row-gap`
  - `grid-column-gap`
- `justify-content` - grid parent
  - `justify-self` - grid child item
- `align-items` - grid parent
  - `align-self` - grid child item
- `grid-auto-flow`

Other things you need to know:

- The `fr` unit (fractional unit)
  - can be used interchangeably with the `%` unit
    - ex: `1fr 2fr 1fr` = `25% 50% 25%`
  - Some developers like to use `fr` instead of `%` because it means easier math
    when there are more columns with different widths (or rows with different
    heights)

### Grid Games

The following games are good practice to gain basic grid practice:

- [CSS Grid Garden](http://cssgridgarden.com/) - finish all 28 levels!

## Media Queries

Learning Objectives:

- Identify the different types of media that a media query can target
- Explain how the media features (and prefixed subfeatures) of "aspect ratio",
  "height", "orientation", and "width" are applied
- Use media queries to change the styles of content in an HTML page to achieve
  a desired effect

### What is a Media Query?

- Media queries are used to add CSS rules that are dependent on a user's device
  media type, viewport size, and resolution
- **viewport** - window of the browser, size changes based on the device
  - media queries can be used to define different CSS rules for different
    viewport sizes (min- or max-width or height)
- Use the `@media` keyword to start to define a media query for CSS rules
- Here are the different kinds of media query conditions:
  - **media type** - type of device distinguished by the browser, you can define
    CSS rules for specific media types
    - `all` - all devices (default media type if none is provided)
    - `print` - layout when printing
    - `screen` - displayed by the browser
    - `speech` - read by a screen reader
  - **media features** - used by the browser to characterize a user's device, you
    can define CSS rules for specific media features
    | Feature      | Applies to                                   | Subfeature prefixes |
    | ------------ | -------------------------------------------- | ------------------- |
    | aspect ratio | The ratio of width to height of the viewport | max- and min-       |
    | height       | The height of the viewport                   | max- and min-       |
    | orientation  | If width is larger than height or vice versa |                     |
    | width        | The width of the viewport                    | max- and min-       |
- You can combine two media queries conditions with the following operators in
  between them:
  - **and** - this will apply the CSS rules when **both** of the conditions of
    the two media queries you are combining are met
  - **,** - this will apply the CSS rules when **either** of the conditions of
    the two media queries you are combining are met
- `not()` CSS function can also be used with media query conditions
  - the media query's CSS rules will apply when the media query condition passed
    into the `not()` function is not met

### Example 1

```css
h1 {
  font-size: 14px;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 18px;
  }
}
```

In the above example, if the device has a media type of `screen` and a
minimum viewport width of `768px`, then the `h1` elements will have a
`font-size` property of `18px`. Otherwise, they will have a `font-size` of
`14px`.

### Example 2

```css
body {
  display: flex;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

In the above example, if the device has a viewport width **greater than** the
viewport height, than the `body` will have a `flex-direction` of `row`. But if
the viewport width is **less than** the viewport height, than the `body` will
have a `flex-direction` of `column`.

### Example 3

```css
html {
  background-color: blue;
}

@media (min-width: 301px) and (max-width: 600px) {
  html {
    background-color: red;
  }
}
```

In the above example, if the device has a viewport width equal to or less than
`600px` and equal to or greater than `301`, than it will have a
`background-color` of `red`. Otherwise, it will have a `background-color` of
`blue`.
