# Practice: Serving Static Assets

Clone the project from the [starter].

Your goal is to send files in an entire folder from an `http` server.

Allow clients to request any files from the `assets` folder in your server. To
do this, set up your server to look for and send files from the `assets` folder
whenever the URL path starts with `/assets`

If you start your server make a `GET /assets/images/dog.jpg` request,
then the server will look for a file in its memory called `dog.jpg` in the
`./assets/images` folder and will send that file as a response with the
`Content-Type` header of `image/jpeg`.

To test your server, start your server and navigate to [http://localhost:5000].
You should see a page with a background color of yellow and a cute dog image.

Tip: Use the following functions to aid you:

- [`String.split`] - to split a string into an array by a given delimiter
- [`String.startsWith`] - returns true if the string starts with a given
  substring
- `getContentType` - takes a file name and outputs the `Content-Type` header
  value based on the file extension

[`String.split`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[`String.startsWith`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
[starter]: https://github.com/appacademy-starters/practice-serving-static-assets