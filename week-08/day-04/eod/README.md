# EOD

## Traditional Web Server vs. JSON API Server

- Key differences between traditional HTML web server and a JSON API server:
  - JSON API server should never redirect as a response
  - JSON API server should accept JSON as the request body if the request body
    is necessary and return JSON as the response body
  - traditional web server should accept URL encoded string,
    `application/www-x-form-urlencoded`, as a request body if a request body is
    necessary and return HTML as the response body **OR** redirect the user
  - JSON API servers have different RESTful endpoint conventions than a
    traditional web server

## Content-Type header review

- `Content-Type` header works differently when it's on a request and it's on a
  response
- `Content-Type` is only effective when there is a body
- When it's a request header, it defines the format of the request body
- When it's a response header, it defines the format of the response body

## Location header review

- `Location` header is only necessary when it's on a response (it should never
  be a header on a request)
- Should only be on a response that has a status code of redirection (like 302)
- since a JSON API server should never redirect, `Location` header should never
  be used as a response in there

## Music Archive Docs

Steps to complete:

- Read the scenario
- Guess the RESTful endpoint for the given scenario
- Make the request on Postman or `fetch` with request components that you think
  the request should have for the scenario
- Read the response after making the request on Postman or `fetch`
- Document the response components
