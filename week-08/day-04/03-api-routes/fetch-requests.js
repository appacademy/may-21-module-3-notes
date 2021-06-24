// Log the body of the response to the console as a JSON string
fetch('/posts')
.then(async res => {
  console.log(res.status)
  console.log(res.headers.get('content-type'))
  const body = await res.text();
  console.log(body); // JSON string 
  // [{"postId":1,"message":"Hello World!"},{"postId":2,"message":"Ciao!"}]
});

// Log the body of the response to the console as a JavaScript object parsed
  // from the JSON string
fetch('/posts')
.then(async res => {
  console.log(res.status)
  console.log(res.headers.get('content-type'))
  const body = await res.text(); // JSON string
  console.log(JSON.parse(body)); // JavaScript object
  /*
  [
    {postId: 1, message: "Hello World!"},
    {postId: 2, message: "Ciao!"}
  ]
  */
});
// OR
fetch('/posts')
.then(async res => {
  console.log(res.status)
  console.log(res.headers.get('content-type'))
  const body = await res.json(); // JavaScript object
  console.log(body);
  /*
  [
    {postId: 1, message: "Hello World!"},
    {postId: 2, message: "Ciao!"}
  ]
  */
});