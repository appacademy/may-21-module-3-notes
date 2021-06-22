# Postman Requests

Postman is used to make HTTP requests. In this exercise, you will use Postman to
make requests with different endpoints to a web server.

## Set up

Clone the project from the [starter].

To set up the server that you will test your routes on, run `npm install`
inside of the `server` folder. Please do not to look at the contents of the
`server` folder until you finish this project.

To start the server, run `npm start` inside of the `server` folder. This will
allow you to make requests to [http://localhost:5000] using any client (browser
and Postman).

To stop the server from listening to requests, press `CTRL + c` for
Windows/Linux or `CMD + c` for MacOS in the terminal that you started the server
(wherever you ran `npm start`).

## Endpoints

Below is a list of endpoints for this site.

- `GET /` - Home Page
- `GET /posts` - View all Posts
- `GET /posts/:postId` - View details about a specific post, a form for
  creating a new comment for that post, and a list of comments for that post
- `GET /posts/new` - A form for creating a new post
- `POST /posts` - Submit the creation of a new post
  - a post has a `title` field and a `description` field
- `GET /posts/:postId/edit` A form for editing a specific post
- `POST /posts/:postId` - Submit the edit of an existing post
- `POST /posts/:postId/delete` - Delete a specific post
- `POST /posts/:postId/comments` - Submit the creation of a comment for a
  specific post
  - a comment has a `text` field
- `GET /comments/:commentId/edit` - A form for editing a specific comment
- `POST /comments/:commentId` - Submit the edit of an existing comment
- `POST /comments/:commentId/delete` - Delete a specific comment

## Formulate requests on Postman

Go through each of the endpoints for this server and formulate requests to the
endpoints. Once you start your server, you can make requests in Postman with a
root URL path of [http://localhost:5000] followed by the endpoint's route.

Your goal is to request the following operations on the server using Postman:

- create a post
- leave two comments on the post
- edit the post
- delete one of the comments on the post

Formulate the requests in Postman and each request should be sent with all the
necessary request components. Analyze the response you get back in Postman after
you send the request. You should be able to list the components of the response
from the Postman UI.

If you see an error status code in the response, then that there was something
wrong with the request. After completing a request, confirm that the operation
was successful using one/some of the endpoint(s).

All requests that require a body should have the `Content-Type` header of
`x-www-form-urlencoded`.

[http://localhost:5000]: http://localhost:5000
[starter]: https://github.com/appacademy-starters/practice-postman-requests