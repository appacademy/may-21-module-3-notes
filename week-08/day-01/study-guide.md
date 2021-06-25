# Week 8 Day 1

## Server and HTTP

Learning Objectives

- Explain the role of a server in a fullstack application
- Compare and contrast the traditional front and back ends of a web application
- Define HTTP and its role in sending information between a server and client

### What is a Server?
  
- Full-stack application consists of:
  - backend or server
    - **server** - a hardware or software that pushes and pulls data across a
      network
    - main purpose: send data to a client
    - other purposes:
      - send requested web pages
      - handle email messages
      - send files
      - store and send data in a database
      - handle web traffic
    - there could be multiple servers for a single full stack application
  - frontend or the client
- a client can request data from a server and the server processes that
  request and responds with desired data

### What is HTTP

- **HTTP** or HyperText Transfer Protocol
  - `HT` or HyperText - content with references to other content
    - ex: HTML (HyperText Markup Language)
  - `TP` or Transfer Protocol - defines the expectations for both ends of the
    data transfer between a client and a server
  - process of exchanging hypertext between systems
  - request/response protocol
    - client sends a request to the server for a particular resource (like a
      webpage, image, or data)
    - server provides a response containing the requested resource or an
      explanation of why it can't provide the resource
  - HTTP is one of other transfer protocols for the internet, but it is the main
    one
- Properties of HTTP:
  - Reliable Connections
    - confirmation that message has been sent
    - sacrifice speed for making sure that the whole package is received
      - may resend the smaller parts of the package if missing
  - Stateless Transfer
    - No specifications for storing data between requests
    - Each request should contain all the context it needs for the response
  - Intermediaries
    - Can have other servers or devices that can pass your request along to
      another server/device

## HTTP Request and Response Components

Learning Objectives:

- Match HTTP verbs (GET, PUT, PATCH, POST, DELETE) to their common uses
- Match common HTTP status codes (200, 302, 400, 401, 402, 403, 404, 500) to
  their meanings
- Appropriately construct a body for an HTTP request
- Identify common values of the Content-Type header and how they're interpreted
  
### HTTP Request Components

An HTTP request may look something like this:

```plaintext
POST / HTTP/1.0
Host: appacademy.io
Content-Length: 31
Content-Type: application/x-www-form-urlencoded
Host: appacademy.io
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9

username=azure&password=hunter2
```

- **request-line** first line of a request
  - in the above example, the request-line is `POST / HTTP/1.0`
  - **method** or **verb** - a simple way of declaring the intention of the
    request to the server
    - 5 common verbs and their uses:
      - `GET` - retrieving data or information
      - `POST` - creating a new resource or data entity
      - `PUT`/`PATCH` - updating an existing resource or data entity
      - `DELETE` - destroy a resource or data entity
    - Ultimately, how the verbs get acted upon is up to the server. These are
      just guidelines and conventions of what the verbs should be used for
  - **URI** or URL - Uniform Resource Indicator, identifies the resource or
    data entity that you requested to perform the action on
  - **HTTP version** - the HTTP version you expect to use (usually HTTP/1.1 or
    HTTP/2), no need to list these in the documentation for every
    request/response
    - don't need to know this for the assessment
- **headers** - are key/value pairs that are used to define how the server might
  process the request
  - come after the request-line
  - the header key or name is case-insensitive
  - in the above example, the headers are from lines `Host: appacademy.io` to
    `Accept-Language: en-US,en;q=0.9`
- **body**
  - in the above example, the body is `username=azure&password=hunter2`

### `Content-Type` Header

- describes the type of format the body is in and how to process it
- **MIME types** - the possible values of the `Content-Type` header
- Common MIME types for the `Content-Type` header:
  - `application/x-www-form-urlencoded` - body is info submitted directly from
    an HTML web form
  - `text/html` - body is an HTML document
  - `text/css` - body is a CSS styles document
  - `text/javascript` - body is a JavaScript script
  - `text/plain` - body is a plain text
  - `image/png` - body is a PNG Image
  - `application/json` - body is a JSON (format similar to JavaScript object)
  - See here for more [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
- can be a header in the request or the response
  - if it's in the request, it describes how the server should format and parse
    the request body
  - if it's in the response, it describes how the client should format and parse
    the response body

### HTTP Response Components

An HTTP Response may look something like this:

```plaintext
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Transfer-Encoding: chunked
Connection: close
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Cache-Control: max-age=0, private, must-revalidate
Set-Cookie: _rails-class-site_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVEkiJTM5NWM5YTVlNTEyZDFmNTNlN; path=/; secure; HttpOnly
X-Request-Id: cf5f30dd-99d0-46d7-86d7-6fe57753b20d
X-Runtime: 0.006894
Strict-Transport-Security: max-age=31536000
Vary: Origin
Via: 1.1 vegur
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
Server: cloudflare
CF-RAY: 51d641d1ca7d2d45-TXL

<!DOCTYPE html>
<html>
...
...
</html>
```

- **status-line** first line of a response
  - in the above example, the request-line is `HTTP/1.1 200 OK`
  - **HTTP version** - the HTTP version you expect to use (usually HTTP/1.1 or
    HTTP/2), no need to list these in the documentation for every
    request/response
    - don't need to know this for the assessment
  - **status code** - the short answer of the response, the numeric 3-digit way
    of representing a server's response
    - give a quick answer of whether or not the response was successful
  - **reason phrase** - the short description of the response, a phrase
    representing the reason behind the response's status code
  - common status code and reason phrase combinations and their uses:
    - 200's: Successful
      - `200 OK` - request received and fulfilled
      - `201 Created` - request received and a new record was created as a result
    - 300's: Redirection
      - `301 Moved Permanently` - the resource requested is in a totally new
        location
      - `302 Found` - resource has moved, temporary move
    - 400's: Client Error
      - `400 Bad Request` - server received your request, but couldn't
        understand it
      - `401 Unauthorized` - resource requested may exist, but not allowed to
        see it without authentication, not logged in
      - `403 Forbidden` - resource requested may exist, but not allowed to see
        it at all, not the right user
      - `404 Not Found` - resource you requested doesn't exist
    - 500's: Server Error
      - `500 Internal Server Error` - request was received, and the server tried
        to process it, but something went awry on the server end
      - `504 Gateway Timeout` - request was received but the server didn't
        respond in a reasonable amount of time
- **headers** - are key/value pairs that are used to define how the client might
  process the response
  - come after the status-line
  - the header key or name is case-insensitive
  - in the above example, the headers are from lines
    `Content-Type: text/html; charset=utf-8` to `CF-RAY: 51d641d1ca7d2d45-TXL`
  - Must know the following response headers:
    - `Location` - used by the client for redirection responses, paired with the
      redirection status codes, contains the URL the client should redirect to
- **body**
  - in the above example, the body are from lines `<!DOCTYPE html>` to `<html>`

## RESTful Routes

Learning Objectives:

- Determine the purpose of a RESTful route by its HTTP method and URI

### What is REST?

- **route** - the URL path of the request
  - ex: `/posts`
- **endpoint** - the method AND URL path of the request
  - ex: `GET /posts`
- **REST** - stands for REpresentational State Transfer
  - convention for defining endpoints that other developers interacting with the
    server can easily understand how the server may process requests with those
    endpoints and what they should expect from their responses
  - an architecture style for designing networked applications
  - not an official standard
  - properties:
    - Decoupled client-server - client and the server should be decoupled so
      that they can evolve separately without any dependence on one another
    - Stateless - data received from the server can be used by the client
      independently without knowing past responses from the server
    - Uniform interface - aach endpoint is assigned to a single CRUD action
- **RESTful Route** - a route or URL path which states the resource that a CRUD
  action should be performed on
  - `/invoices/PK-200201` - represents the single invoice that has the invoice
    number of PK-200201, doesn't show the action to perform on it
- **RESTful Endpoint** - an endpoint which has an assigned CRUD action and also
  has a route which states the resource to perform the assigned CRUD action on
  - ex: `GET /invoices/PK-200201` - represents the single invoice that has the
    invoice number of PK-200201 which you want to read

### Patterns of RESTful Endpoints for Traditional Web Applications

- **CRUD** - stands for Create, Read, Update, and Delete, common actions to
  perform on data in the server
- **resource** - the data entity or group of data in the server that you want to
  perform a CRUD action on (read or manipulate)
  - ex: people, users, comments, subscriptions, colors, etc.
- **record** - a single set of data under a resource
  - ex: person: George Washington under the people resource, user: DemoUser
    under the users resource, comment: "Hello World!" under the comments
    resource, color: green under the colors resource
  - sometimes, the record has an **id** that acts as a unique identifier for the
    record
    - for example, maybe there could be two comments with the text
      "Hello World!", how do you distinguish between the two comments? By
      assigning an **id** like `145` and `146` to each of the comments
- **route parameter** - a section of the URL that is a placeholder for a value
  that it represents (a representation of a value in the URL)
  - you can identify a route parameter by the `:` colon in front of a variable
    name
  - ex: Route pattern: `/posts/:postId`
    - URL pattern: `/posts/:postId`
    - route parameter: `postId`
    - example URL: `/posts/2` where `postId` is `2`
- `GET` and `POST` are the only methods that can be made through an HTML form
  submission, so they are the only methods that you can use in a traditional
  web application
  - the RESTful routes for a traditional web app will only have `GET` and `POST`
    methods

| Path Pattern                     | HTTP Verb | Meaning                                                               |
| -------------------------------- | --------- | --------------------------------------------------------------------- |
| /resource-name                   | GET       | Index page: Get an HTML-based list of the resource                    |
| /resource-name/new               | GET       | Create form page: Show a form to create a new record for the resource |
| /resource-name                   | POST      | Submit create form: Create a new record for the resource              |
| /resource-name/:record-id        | GET       | Detail page: See the details of the specified record                  |
| /resource-name/:record-id/edit   | GET       | Edit form page: Show the edit form for the specified record           |
| /resource-name/:record-id        | POST      | Submit edit form: Update the specified record                         |
| /resource-name/:record-id/delete | POST      | Submit delete form: Delete the specified record                       |

For Nested Resources:

| Path Pattern                                  | HTTP Verb | Meaning                                                                                                      |
| --------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| /resource-name/:record-id/nested-resource     | GET       | Index page: Get an HTML-based list of the nested resource related to the specified record                    |
| /resource-name/:record-id/nested-resource/new | GET       | Create form page: Show a form to create a new record for the nested resource related to the specified record |
| /resource-name/:record-id/nested-resource     | POST      | Submit create form: Create a new record for the nested resource related to the specified record              |
| /nested-resource/:nested-record-id            | GET       | Detail page: See the details of the specified nested resource's record                                       |
| /nested-resource/:nested-record-id/edit       | GET       | Edit form page: Show the edit form for the specified nested resource's record                                |
| /nested-resource/:nested-record-id            | POST      | Submit edit form: Update the specified nested resource's record                                              |
| /nested-resource/:nested-record-id/delete     | POST      | Submit delete form: Delete the specified nested resource's record                                            |

## Postman

Learning Objectives:

- Use Postman to explore and test a remote server by sending requests and
  interpreting the responses

### What is Postman?

- Postman is an application that allows you to formulate/build/define request
  components, send requests, and view the response components easily
- It's different from the browser, because the browser doesn't allow you to
  formulate and view the request and response components easily
- You should use Postman to make more complex requests and to debug your servers
  that you will be creating later this week

![Postman breakdown]

## Traditional Web Server Documentation

On the assessment you will have exercises that ask you to document the request
and response components of the RESTful endpoints of a traditional web server.

Here's an example:

Scenario: Add a comment on a specific post:

Documentation:

- Request components:
  - method: POST
  - URI: /posts/:postId/comments
  - headers:
    - Content-Type: application/x-www-form-urlencoded
  - body:
    - commentBody: Hello World!
    - authorName: John Doe
- Response components:
  - status code: 302
  - headers:
    - Location: /comments/:commentId
  - body: none

[Postman]: https://www.postman.com/downloads/
[Postman breakdown]: ./04-postman/postman.png
