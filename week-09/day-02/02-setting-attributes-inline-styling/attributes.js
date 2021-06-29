window.onload = () => {
  const a = document.querySelector('a');

  /* -------------------- Reading and Setting Attributes --------------------*/
  // Read the href attribute on the link
  console.log(a.getAttribute('href')); // undefined
  // Add an href attribute to the link
  a.setAttribute('href', 'https://www.humanesociety.org/sites/default/files/styles/2000x850/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=lJefJMMQ');
  console.log(a.getAttribute('href')); // u'https://www.humanesociety.org/sites/default/files/styles/2000x850/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=lJefJMMQ'

  /* ---------------------------- Inline Styling ----------------------------*/
  // Remove underline from the link
  a.style.textDecoration = 'none';
  // Make the link color red
  a.style.color = 'red';
  // Make the link text bigger
  a.style.fontSize = '24px';
  // Make the link bold
  a.style.fontWeight = 'bold';
};