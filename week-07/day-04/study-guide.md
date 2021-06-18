# Week 7 Day 4 Study Guide

## Interactivity

Learning Objectives:

- Describe and use the `transition` property show animated changes due to
  class and pseudo-class CSS rule application

### Transitions

- Transitions provide animations when changing certain CSS properties
  - ex: if the `background-color` of a CSS element changes when it gets hovered,
    the transition from one color to another will happen over time instead of
    instantaneously
- CSS transitions let you decide the following CSS properties:
  - **transition-property** - which properties to animate
    - Here are some [common property values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)
    - can select a single property `transition-property: color;`
    - can select multiple properties `transition-property: margin-right, color;`
    - can select all animatable properties `transition-property: all;`
  - **transition-delay** - when the animation will start (by setting a delay)
    - ex: start the animation after 2 seconds: `transition-delay: 2s;`
  - **transition-duration** - how long the transition will last (by setting a
    duration)
    - ex: animate the transition for 4 seconds: `transition-duration: 4s;`
  - **transition-timing-function** - how the transition will run (by defining a
    timing function, e.g. linearly or quick at the beginning, slow at the end).
    - [common property values](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function):
      - `ease-in`
      - `ease-out`
      - `linear`
    - ex: start animation slowly then keep speeding it up:
      `transition-timing-function: ease-in;`
  - **transition** - shorthand for `transition-property`, `transition-duration`,
    `transition-timing-function`, and `transition-delay`
    - See here for usage of the [transition property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- A helpful [guide for CSS transitions](https://www.joshwcomeau.com/animation/css-transitions/)

## Design Specs

Learning Objectives:

- Given a wire-frame spec and a style guide, create a professional looking
  webpage
- Given a high-res spec, create a webpage that is a pixel-perfect match
- Create a base CSS file containing styles for headings, paragraphs, buttons,
  links and horizontal rules

### Wireframes

- **wireframes** - common method used by designers to produce product
  specifications for developers
  - will usually contain:
    - drawings of the layout of every important page in the site or app
    - color and font selections
    - a navigation map
    - descriptions of how interactions should behave
    - anything else needed to define how the site or app should look, feel, and
      operate
  - **low-fidelity** - low truth or accuracy
    - provide a minimal amount of guidance to the developer and often allow for
      a greater degree for the developer to interpret the design
    - use wireframe development tools like [Balsamiq](https://balsamiq.com/)
    - more likely to see this at smaller companies because there are less
      resources
      - ex: the designer and engineer of App Academy Open were one and the same
  - **high-fidelity** - high truth or accuracy
    - these wireframes look and feel almost exactly like the final product
    - use wireframe development tools like [Figma](https://www.figma.com/)
    - more likely to see this at bigger companies because there is more
      specialization of roles

### Why pixel-perfect?

- the job of a developer is to build the designer's vision, not their own
- designers decide what things should look like and where they should go
- the mark of a good frontend developer is how close they can get to achieving
  the designer's vision
- **pixel-perfect** - every single thing on the design down to a single pixel in
  a single drop-shadow is implemented in the final product
  - this approach is usually reserved for the critical pages of sites or apps
    with tens of millions of users
  - Being able to produce pixel perfect results is what will separate you from
    other junior developers who are competing for the same jobs that you are.
    Your ability to place things exactly where you want them to are a
    demonstration of your control over your code and the quality of your
    results.

## Framework

Learning Objectives:

- Recognize a variety of CSS frameworks, including Bootstrap, Material and
  Tailwind
- Load a CSS framework into a project
- Extend and modify element styles in a CSS framework to match a spec

### What is a CSS Framework?

- pre-built CSS libraries that include styling for various HTML elements or
  components (group(s) of HTML elements)
- two different types of frameworks:
  - **un-opinionated** - simple, lightweight packages with only visual style
    - examples of more un-opinionated CSS frameworks:
      - [Pure CSS](https://purecss.io/layouts/)
        - lightweight
        - responsive
      - [Tailwind](https://tailwindcss.com/docs)
        - lightweight
        - utility-first
  - **opinionated** - dictate the structure and functionality of your entire
    site
    - More opinionated means that a framework comes with more features and
      functionality at the increasing expense of flexibility and
      customizability
    - examples of more opinionated CSS frameworks:
      - [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
        - responsive
        - developed by Twitter
      - [Material UI](https://material-ui.com/)
        - responsive
        - developed by Google
