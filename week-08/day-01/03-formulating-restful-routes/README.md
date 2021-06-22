
# RESTful Routes

In this exercise, determine an endpoint for each of the use cases. Don't worry
about getting it perfect as this is just practice!

For example, to access the home page of a site, the RESTful endpoint could be
`GET /` or `GET /home`

- Access the home page
  - `GET /`
  - `GET /home`
- Submit a contact form
  - `POST /contact`
- Access the posts page
  - `GET /posts`
- Access the edit page for a post
  - `GET /posts/:postId/edit`
- Access the create page for a post
  - `GET /posts/new`
- Create a new user
  - `POST /users`
- Log In
  - `POST /users/login`
  - `POST /login`
  - `POST /session`
- Log Out
  - `POST /users/logout`
  - `POST /logout`
  - `POST /session/delete`
- Access the comments for a post page
  - `GET /posts/:postId/comments`
- Access the create page for a post's comment
  - `GET /posts/:postId/comments/new`
- Access the edit page for a comment
  - `GET /comments/:commentId/edit`
- Submit a like for a post
  - `POST /posts/:postId/like`
- Delete a like for a post
  - `POST /posts/:postId/like/delete`
- Access all the posts of a user
  - `GET /users/:userId/posts`
- Submit a search on posts
  - `POST /posts/search`
  - `GET /posts/search`
