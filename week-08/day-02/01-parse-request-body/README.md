# Practice: Parsing the Body of a Request

In this practice, you will implement the code to parse the body of a typical
HTML form submission request with a `Content-Type` header of
`application/x-www-form-urlencoded`.

## Phase 1: Creating the Server

Clone the project from the [starter].

Create a server using `http`. Reference the readings for help if you get stuck.

## Phase 2: Request Method and URL

Log the method and URL of the request in your server. What do you expect will
happen in your terminal if a client makes a request to your server? How about
multiple requests?

Use Postman to make some requests with different method and URL path
combinations to confirm your expectations.

## Phase 3: Read the Body of the Request

Reference the _Parsing the Body of the Request_ reading for the steps to take to
parse the body of a typical HTML form submission request with a `Content-Type`
header of `application/x-www-form-urlencoded`. Implement these steps in the
server that you created and log the parsed request body to your terminal.

To test your code to make sure it's working, create a server, start the server,
and send a request using Postman with a body and `Content-Type` header of
`application/x-www-form-urlencoded` with a method of `POST`. The URL path can be
anything.

Tip: You can use the following functions to aid you:

- [`String.split`] - to split a string into an array by a given delimiter
- [`String.replace`] - to replace the substrings in a string with another
  substring
  - Use `str.replace(/\+/g, " ")` to replace all `+` symbols in the string
    with a space
- [`Array.map`] - to convert each element in the array to a new element
- [`Array.reduce`] - to convert an array into an object (TRICKY to use so don't
  use this unless you have a good idea of how to do this)
- [`decodeURIComponent(str)`] - decodes a given string from [Percent Encoding]

[`String.split`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[`String.replace`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[`Array.map`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[`Array.reduce`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[`decodeURIComponent`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
[Percent Encoding]: https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding
[starter]: https://github.com/appacademy-starters/practice-parsing-request-body