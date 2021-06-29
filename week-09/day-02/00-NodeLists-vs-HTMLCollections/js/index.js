window.onload = () => {
  const spanElements = document.querySelectorAll('span'); // NodeList of span elements
  const firstSpan = spanElements[0]; // first span element in the DOM
  
  // Get all the child nodes of the first span element as a NodeList
  const spanChildNodes = firstSpan.childNodes; // NodeList
  console.log(spanChildNodes); // [text, span, text]
  
  // Get all the child HTML elements of the first span element as a HTML Collection
  const spanChildElements = firstSpan.children; // HTML Collection
  console.log(spanChildElements); // [span]
};