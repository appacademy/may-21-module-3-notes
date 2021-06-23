# AJAX Steps

In the previous reading, you learned about what the purpose behind AJAX and what
AJAX meant.

In this reading, you'll walk through the specific steps of AJAX using the
example from the previous reading.

Specifically, we'll walk through each step of the Goodreads example using this
diagram:

![ajax steps](https://assets.aaonline.io/Module-Web/ajax/ajax.svg)

## Quick overview of the Fetch API

As you go through the AJAX example, you'll use an API that you've used in the
past: the Fetch API.

At a high level, Fetch is used to make HTTP requests. It uses Promises to handle
the asynchronous nature of HTTP requests and responses.

Since the Fetch API is provided by almost all major browsers, open up a console
in Chrome or Firefox to use the `fetch` function.

### GET request

Let's start with a GET request. As a refresher, GET requests are used to
retrieve information from the server. Here's what a GET request might look like
using the Fetch API:

```js
fetch("https://jservice.xyz/api/games")
  .then(function(res) {
    console.log("response: ", res);
    return res.text();
  })
  .then(function(data) {
    console.log("data:", data);
  });
```

In the code example above, the following happens:

1. `fetch`'s first argument is the URL that you want to make a request to. The
   second argument is an optional `options` object that is not necessary for
   now, but will be used in a later example.
2. Invoking `fetch` returns a Promise that resolves with a [Fetch Response
   object]. This Response object represents the entire HTTP response, and it
   holds crucial information like `status` and `url`.
3. In the first callback, the body of the response is a [ReadableStream]. We
   won't get into the details of data streams here, but for now just know that
   the `.text()` method takes that stream and, according to the MDN docs on the
   [.text()] method, _"It returns a promise that resolves with the result of
   parsing the body text"_
4. In the second callback, you can now access the data found in the body of the
   response. In this case, a GET request to `https://jservice.xyz/api/games`
   returns a list of Jeopardy games.

### POST request

Next, let's walk through a POST request. As a reminder, POST requests are used
to create data on the server.

```js
fetch("https://jservice.xyz/api/categories", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "title=ACTORS & THEIR FILMS")
})
  .then(function(res) {
    return res.text();
  })
  .then(function(data) {
    console.log(data);
  });
```

If you're following along, you probably just got an error response here with a
message notifying you that the `category already exists`. Go ahead and update
that `title` to be something different until you are able to create a unique
category.

Now that it's a POST request, a second `options` argument is passed in to
configure this HTTP request. In this example, you specify the request as a POST
request, notify the server that you will be sending data in a HTML web form
format, and then also pass along the data in the body.

When the POST request succeeds, the server responds with data about your newly
created category.

## What you've learned

You've now learned each step of a typical AJAX flow. As a recap, it usually
starts with an event on the client side that triggers an HTTP request to the
server. In this case, we used the Fetch API to asynchronously interact with the
server. When the server sent its response, the Fetch API resolved the promise,
and the HTML can be updated to reflect the updated data.

More importantly, using AJAX, the web page can be updated without requiring a
full page reload.

Now that you've learned about each step of AJAX, it's time to try it out
yourself!

[fetch response object]: https://developer.mozilla.org/en-US/docs/Web/API/Response
[ReadableStream]: https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
[.text()]: https://developer.mozilla.org/en-US/docs/Web/API/Body/text
