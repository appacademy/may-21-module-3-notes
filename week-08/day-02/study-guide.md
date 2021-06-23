# Week 8 Day 2

**Syntax will be useful for the assessment, but will not be required to know.**

## Node HTTP

Learning Objectives:

- Build a server using the `http` package
- Compare and contrast the Request and Response objects in the `http` package
- Formulate and send a response based on the components of a request:
  - Read the method and URI of a request
  - Write the body of a response
  - Set the status code of a response
  - Read the headers of a request
  - Set the headers of a response
  - Send a response
- Send a static asset as a response
- Debug a hanging server
- Use Postman to debug a server

### Create a Server

- `http.createServer(cb)` - creates a server instance
  - will call the `cb(req, res)` for any request that the server accepts
  - For every request, the server will create instances for two objects:
    - **Request** object or `req` - contains information about the server, like
      the method or URL
      - useful properties on `req`:
        - `method` - value is a string of the method of the request
          - ex: `console.log(req.method); //=> POST`
        - `url` - value is a string is the url path of the request
          - ex: `console.log(req.url); //=> /hello-world`
        - `headers` - value is an object with the key-value pairs as the
          header names and values
          - ex: `console.log(req.headers['host']); //=> localhost:5000`
      - useful methods on `req`:
        - `on(eventName, cb)` - listens for an event with the `eventName` on
          the request and triggers the `cb` function to run when that event is
          triggered
    - **Response** object or `res` - has properties and methods to interact and
      formulate the components of the response for the particular request
      - useful properties of `res`:
        - `statusCode` - value is the status code of the response
          - ex: to set the status code to `404` - `res.statusCode = 404`
      - useful methods of `res`:
        - `setHeader(name, value)` - sets a header `name` to a `value`
          - ex: to set a `Content-Type` header of
            `application/x-www-form-urlencoded` -
            `res.setHeader('Content-Type', 'application/x-www-form-urlencoded')`
        - `write(body)` - allows you to add to the `body` of the request
          - ex: `res.write('Hello '); res.write('World!');` will formulate a
            body of "Hello World!" that will be sent as the response
        - `end([body])` - allows you to add to the body of the request AND send
          the response
          - calling `res.end()` will tell the server that you want to finish
            formulating the response and want to send it, you cannot change the
            response after calling this!
          - ex: to finish sending the response without adding more to the body -
            `res.end();`
          - ex: to finish sending a response with a body of "Hello World!" -
            `res.write('Hello '); res.end('World!');`
- `server.listen(port, cb)` - allows the created server instance to listen for
  requests on the specified `port`
  - will call the `cb` when this is successful

To create a server in `http` that listens for request on port `5000`:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  // ...
});

const port = 5000; // 3000, 5000, 8000, 8080

server.listen(port, () => console.log('Server is listening on port', port));
```

Start the server by running the file that you created the server in with `node`.
For example, if the file that you created the server in is called **server.js**,
start the server with the following command:

```shell
node server.js
```

Now you should be able to make requests to the server by prefixing
`http://localhost:5000` to the desired route.

To stop the server, press `CTRL + C` in your terminal. **Stop the server
whenever you finish working with it to free up the port that the server was
listening to.**

### Parsing the Request Body

When the body of the request comes in, it will come in as a series of data
packets. You need to put those data packets together to get the entire string
of the body. Here's example code for how to put together the body:

```js
const server = http.createServer((req, res) => {
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    console.log(req.body);
  });
});
```

Once you put together the body, the server should parse the body of the request
depending on the `Content-Type` of the body. If the request came from an HTML
web form submission, then the `Content-Type` will be
`application/x-www-form-url-encoded` and the body will be Percent-Encoded.

To parsing the body includes turning percent-encoded body string into a
JavaScript object.

```js
const percentEncoded = "username=azure+green&password=password"
// turn percentEncoded into a JavaScript object => 
const javaScriptObj = {
  username: 'azure',
  password: 'password'
}
```

Here's example code for how to turn a percent-encoded body into a JavaScript
object:

```js
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      // example: reqBody = "username=azure+green&password=password%21"
      req.body = reqBody
        .split("&") // ["username=azure+green", "password=password%21"]
        .map((keyValuePair) => keyValuePair.split("="))
        // [["username", "azure+green"], ["password", "password%21"]]
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        // [["username", "azure green"], ["password", "password%21"]]
        .map(([key, value]) => [key, decodeURIComponent(value)])
        // [["username", "azure green"], ["password", "password!"]]
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
        // {
        //   username: 'azure green',
        //   password: 'password!'
        // }
      console.log(req.body);
    }
  });
});
```

### Formulating and Sending a Response

To formulate response components using `http`:

- set the status code
- set any headers
- write to the body
- end the response and send it

Here's an example of how to send a response with a status code of 200,
`Content-Type` header of `text/plain`, and a body of "Hello World!":

```js
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.write('Hello ');
res.end('World!');
```

### Route Handlers

- **route handler** - a set of code that will be executing for a particular
  route or request method and URL path combination
  - custom response for an endpoint
  - In `http`, you can create a route handler by simply using a conditional to
    check if the method and the url properties on the `req` match an endpoint.
    If the endpoint matches, then create formulate the endpoint-specific
    response.
  - ex: `if (req.method === "GET" && req.url === "/hello-world") { //...custom response }`

Here's example code for two route handlers:

```js
req.on("end", () => {
  // Parsing the body of the request
  if (reqBody) {
    req.body = reqBody
      .split("&")
      .map((keyValuePair) => keyValuePair.split("="))
      .map(([key, value]) => [key, value.replace(/\+/g, " ")])
      .map(([key, value]) => [key, decodeURIComponent(value)])
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
    console.log(req.body);
  }

  // route handlers
  // GET /
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Dog Club');
  }

  // GET /dogs/:dogId
  if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
    const urlParts = req.url.split('/');
    if (urlParts.length === 3) {
      const dogId = urlParts[2];
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('Dog details for dogId: ');
      res.write(dogId);
      return res.end();
    }
  }
});
```

### Static Assets

- **static asset** - some data or resource that doesn't change no matter how
  many times you ask the server for it
  - usually just a file that the server holds in memory and sends to a client
    when asked for
  - In `http`, use the built-in `fs` Node.js module to find and read files to
    a string. Set the file string as the body of the response.
    - `fs.readFileSync(relPathToFile, 'utf8')` - the `fs` module has a
      `readFileSync` method that takes in a relative path to the file that you
      want to find and read. It returns the contents of the file in a string

Here's an example of sending a cat image for the `GET /assets/cat-image.png`
endpoint:

```js
// GET /assets/cat-image.png
if (req.method === 'GET' && req.url === '/assets/cat-image.png') {
  const catImage = fs.readFileSync('./images/cat.png');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.end(catImage);
}
```

### HTML Form Submission

Here's an example of an HTML form that when submitted will make a request to
`POST /dogs` with `name`, `color`, `age`, and `description` fields:

```html
<form method="post" action="/dogs">
  <input type="text" name="name" />
  <select name="color">
    <option value="black">Black</option>
    <option value="brown">Brown</option>
    <option value="yellow">Yellow</option>
    <option value="white">White</option>
  </select>
  <input type="number" name="age" />
  <textarea name="description"></textarea>
  <button type="submit">Create Dog</button>
</form>
```

- When an HTML form is submitted on the browser, the following steps usually
  take place:
  - Form is submitted
  - Browser makes request to the server
  - Server parses the request body and does some CRUD action with the data
  - Server sends a redirection response
  - Browser receives response
  - Browser redirects user to the path specified in the `Location` header of the
    response
- Based on the above steps, the components of the response typically look like
  this when a form submission is successful:
  - status code - 302
  - `Location` header - path to redirect the user to
  - body - none

Using the HTML form example above, the server that processes the request sent
by the browser could have the following response components:

- status code: `302`
- headers:
  - `Location`: /dogs/:dogId (where :dogId is the id of the newly created dog)
- body: none

The server code to formulate the response could look something like this:

```js
res.statusCode = 302;
res.setHeader('Location', `/dogs/${newDogId}`);
res.end();
```

When the browser receives the response sent by the server, the browser will
redirect the user to `/dogs/:dogId` where :dogId is the id of the newly created
dog).

> Note: the redirect path could have been to an index page instead of a dog
> detail page

### HTML Templating

- **HTML Templating** - HTML templating is when you insert specific elements of
  data into an HTML file
  - allows you to create dynamic, not static, HTML web pages!
- **HTML template engine** - usually a package or library that processes HTML
  template files and inserts data into it
  - usually have their own conventions
  - sometimes they have a new programming languages to create dynamic HTML
    content from static HTML files and data variables
- The HTML templating syntax that you'll be using this week is App Academy's
  HTML templating for `http`
  - very rudimentary and definitely not as robust as a template engine, but it
    works well enough for our use case
  - A lot like string interpolation in JavaScript
  - Here's the HTML templating workflow
    - Create a HTML template file
      - an HTML file with places that strings can be interpolated into
      - interpolation spots start with `#{` and end with `}`
      - ex: `#{hello}` is an interpolation spot with a variable of `hello`
    - Read the HTML template file using `fs.readFileSync()` and save it to
      a string
    - Replace the interpolation spots in the file content string with another
      string
      - use the `String.replace()` method to replace interpolation spots with
        another string
      - ex: replace `#{hello}` with a string of "Hello World!" by using the
        syntax:
        `interpolatedFileContents = fileContents.replace(/#{hello}/g, 'Hello World!')`
    - Send the interpolated file contents as the body of the response
      - ex: `res.end(interpolatedFileContents)`

### Server Debugging

- There are several common errors when testing a server
  - the response never arrives, or the browser doesn't stop having the
    appearance of loading
    - solution: the server never sent a response, or is taking too long to send
      a response, make sure that a response is sent and to restart the server
      after any changes are made to server files
