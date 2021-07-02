window.addEventListener("DOMContentLoaded", () => {
  const red = document.querySelector("#red-div");
  const yellow = document.querySelector("#yellow-div");
  const blue = document.querySelector("#blue-div");

  red.addEventListener("click", (event) => {
    alert("red div event!");
  });

  yellow.addEventListener("click", (event) => {
    // comment in to see what alerts you see!
    // event.stopPropagation();
    alert("yellow div event!");
  });
  blue.addEventListener("click", (event) => {
    // comment in to see what alerts you see!
    // event.stopImmediatePropagation();
    alert("blue div event!");
  });
});
