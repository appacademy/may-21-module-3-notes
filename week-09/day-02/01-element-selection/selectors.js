const select = () => {
    /* Write queries for each of the following */

    /* PART 1 */
    // Get all seeded fruit elements
    const seeded = document.getElementsByClassName("seed");
    // const seeded = document.querySelectorAll(".seed");
    
    // Get all seedless fruit elements
    // const seedless = document.getElementsByClassName("seedless");
    const seedless = document.querySelectorAll(".seedless");

    // Get first seedless fruit element
    const firstSeedless = document.querySelector(".seedless");
    // const firstSeedless = document.querySelectorAll(".seedless")[0];

    /* PART 2 */
    // Get inner span with text "you"
    const you = Array.from(document.getElementsByTagName("span"))
        .filter(span => span.innerText === 'you');
    // const you = document.querySelectorAll("span");

    // Get all children of element "wrapper"
    const wrapperChildren = document.getElementById("wrapper").children; // HTML Collection

    // Get all odd number list items in the list
    const odds = document.getElementsByClassName("odd");

    // Get all even number list items in the list
    const evens = Array.from(document.querySelectorAll("#two > ol > li:not(.odd)"));
    // const evens = Array.from(document.querySelectorAll("#two > ol > li")).filter(node => node.className !== "odd");

    /* PART 3 */
    // Get all tech companies without a class name
    const nameless = document.querySelector("a");

    // Get "Amazon" list element
    const amazon = document.getElementsByClassName("shopping");

    // Get all unicorn list elements (not the image element)
    const unicorns = document.querySelector("#three > ul").children;
    debugger;
}

window.onload = select;