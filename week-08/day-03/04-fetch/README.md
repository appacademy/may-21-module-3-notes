# Practice: fetch

In this exercise, you will practice extracting the response components from a
fetch request on the browser.

Clone the project from the [starter].

## Setup

The server you will be making requests to is the same server from the
HTTP Basics practice seen earlier this week.

`cd` into the `server` folder and run `npm install`.

Start the server by running `npm start`.

This will start the server at [http://localhost:5000].

## Extract the response components and print them

Make a GET request to the `/products` route using Postman. Take note of the
necessary request components and the components of the response returned from
the server.

Use the console in the browser to make the equivalent `fetch` request.

Print the status code, the `Content-Type` header, and the body of the response
as text in the console.

To extract these response components, use the following documented properties
and methods on the `Response` object that the `fetch` function resolves to:
[MDN Documentation on the `fetch` Response object].

## Additional practice

Make GET requests to other routes in this server to practice formulating
`fetch` requests. The documentation of this server is given in the solution of
the HTTP Basics project assigned a few days prior.

[starter]: https://github.com/appacademy-starters/practice-fetch
[http://localhost:5000]: http://localhost:5000
[MDN Documentation on the `fetch` Response object]: https://developer.mozilla.org/en-US/docs/Web/API/Response
