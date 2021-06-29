// Set up listener and test with console.log
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("This is my profile page!");

  // Create and append new h1 element
  const h1 = document.createElement("h1");
  h1.setAttribute("id", "name");
  h1.setAttribute("class", "my-name");
  h1.innerText = "My Name";
  document.body.appendChild(h1);

  // Create and append new ul element
  const myDetailsList = document.createElement("ul");
  myDetailsList.setAttribute("id", "details");
  myDetailsList.setAttribute("class", "my-details");
  document.body.appendChild(myDetailsList);

  // Insert the list items programmatically
  const myDetailsArr = [
    "I like to drink iced lattes.",
    "I have two cats and eight kittens.",
    "My favorite place to get lunch is Chipotle.",
    "On the weekends, I play flag football."
  ]
  myDetailsArr.forEach(detail => {
    const li = document.createElement('li');
    li.setAttribute("class", "details");
    li.innerText = detail;
    myDetailsList.appendChild(li);
  });

  // Add a new element and insert a clock into it
  const clockDiv = document.createElement("div");
  clockDiv.setAttribute("id", "clock");
  document.body.appendChild(clockDiv);
  const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clockDiv.innerText = "Current time is " + hours + ":" + minutes + ":" + seconds;
  };
  setInterval(time, 1000);

});