# Week 9 Day 4

## Browser Storage

Learning Objectives:

- Select a strategy for storing data in the client (browser)
- Identify common use cases for storing data in the client
- Compare and contrast `localStorage`, `sessionStorage`, and cookies
- Identify, examine, and delete data storage on the browser using Chrome
  Developer Tools
- Construct JavaScript to add, modify, remove, and read data using the Web
  Storage API
- Construct JavaScript to add, modify, remove, and read data using cookies

### Storing Data in the Client

- types of browser storage:
  - Web Storage API - will **not** be sent back and forth with every
    request/response to and from the server, can only be read/set on the client,
    easier to read and write than cookies
    - **`localStorage`** - or `window.localStorage`, all data will be persist
      until deleted by the user or the application
      - to read a key-value pair in `localStorage`:
        `localStorage.getItem(key)` => value
      - to write a key-value pair in `localStorage`:
        `localStorage.setItem(key, value)`
    - **`sessionStorage`** - or `window.sessionStorage`, all data will be
      automatically be deleted when the browser is closed
      - to read a key-value pair in `sessionStorage`:
        `sessionStorage.getItem(key)` => value
      - to write a key-value pair in `sessionStorage`:
        `sessionStorage.setItem(key, value)`
  - Cookie - will be sent back and forth with every request/response to and from
    the server, can be read/set on both the client and the server, harder to
    read and write than Web Storage API, can only hold 4kB of data
    - **session cookie** - a key-value paired saved as a cookie that will
      automatically be deleted when the browser is closed (session is over)
      - to write a session cookie on the client:
        `document.cookie = "cookieName=cookieValue"`
        - ex: to add a `greeting` cookie with a value of "Hello World!" that
          will expire after the browser is closed:
          `document.cookie = "greeting=Hello World!"`
    - **persistent cookie**
      - to write a persistent cookie, you need to set a maximum age or expire
        date:
        `document.cookie = "cookieName=cookieValue; max-age=" + numSeconds` OR
        `document.cookie = "cookieName=cookieValue; expires=" + dateTimeInUTC`
        - ex: to add a `greeting` cookie with a value of "Hello World!" that
          will expire in 1 min:
          `document.cookie = "greeting=Hello World!; max-age=60"` OR
          `document.cookie = "greeting=Hello World!; expires=" + new Date(Date.now() + 60 * 1000).toUTCString()`
    - to remove a cookie, simply set the maximum age to 0 or the expiration date
      to a date in the past
      - ex: to remove the `greeting` cookie:
        `document.cookie = "greeting=; max-age=0"` OR
        `document.cookie = "greeting=; expires=" + new Date('June 10, 1960')`
    - `document.cookie` returns all the cookies in key-value pairs like so:
      - `console.log(document.cookie)` could print:
        `key1=value1; key2=value2; key3=value3;`
      - it does not show any other cookie information like the expire date or
        the maximum age
      - to read a cookie value, you need to parse the output of
        `document.cookie` by separating the key-value pairs, finding the key
        that you want to read, and then getting the value from that
- should be able to make an educated guess about when to use the following data
  storage options
  - `localStorage` (client-side)
    - easy to read and write
    - can store a decent amount of data
    - will persist until deleted
    - can only be read and updated by the client not the server
    - cannot be read by the server unless data is sent directly in the request
  - `sessionStorage` (client-side)
    - easy to read and write
    - can store a decent amount of data
    - will be automatically deleted when browser closes
    - can only be read and updated by the client not the server
    - cannot be read by the server unless data is sent directly in the request
  - session cookies (client-side)
    - hard to read and write on the client
    - total cookie storage is only 4kB of data
    - will be automatically deleted when browser closes
    - will be sent with every request to the server
    - can be updated by the server through any responses that come back from the
      server
  - persistent cookies (client-side)
    - hard to read and write on the client
    - total cookie storage is only 4kB of data
    - will persist until expire date passes or the maximum age in seconds is
      reached
    - will be sent with every request to the server
    - can be updated by the server through any responses that come back from the
      server
  - backend database (server-side)
    - can hold a lot more data
    - data can be accessed by all clients
    - persists until deleted by the server
    - data must be requested by the client and sent as a response by the server
- use the "Application" tab in the Developer Tools to read/manipulate the
  different client storage options
