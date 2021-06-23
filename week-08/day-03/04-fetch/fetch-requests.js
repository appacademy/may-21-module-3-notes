/*******
Make a request to GET /products and do the following in the browser
*******/

// Print the status code of the response
//!!START
fetch("/products")
  .then(res => console.log(res.status));
//!!END

// Print true if the status of the response was successful
//!!START
fetch("/products")
  .then(res => console.log(res.ok));
//!!END

// Print the Content-Type Header
//!!START
fetch("/products")
  .then(res => console.log(res.headers.get('Content-Type')));
//!!END

// Print the body of the response as text
//!!START
fetch("/products")
  .then(res => res.text())
  .then(body => console.log(body));
//!!END
