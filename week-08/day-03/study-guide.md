# Week 8 Day 2

## Promises

Learning Objectives:

- Create a Promise
- Handle resolved and rejected promises
- Predict the behavior of a promise chain
- Bundle promises together using `Promise.all`
- Handle promises written by another programmer
- Create `async` functions that `await` `Promise`'s
- Predict the behavior of an `async` function
- Predict the return value of an `async` function
- Convert a promise chain on a single `Promise` or on a `Promise.all` into
  async/await and vice versa
- Formulate a request to a server using `fetch`
- Using the response of a `fetch` request, print the components of the
  response
- Identify which JavaScript runtime environments have the built-in `fetch`
  function
- Write debug functions using `fetch` to test and debug a server

### Why Promises?

- Normally, a given program's code runs straight along, with only one thing
  happening at once. If a function relies on the result of another function, it
  has to wait for the other function to finish and return, and until that
  happens, the entire program is essentially stopped from the perspective of the
  user.
- Used to simplify asynchronicity

### What are Promises?

- `Promise` in JavaScript - a commitment that sometime in the future, your code
  will get `a value` or `an error` from some operation
  - examples for values: reading a file or getting a response from a server
  - examples for errors: the file doesn't exist or the Web site is down
- A `Promise` is a JavaScript class that we can create promises from
- Syntax for creating a `new Promise`:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // resolve() // invoking resolve will change state from pending to resolved
  // reject() // invoking reject will change state from pending to rejected
});
```

- `.then` is an instance method for a `Promise`
  - first argument is expected to be a callback function that will be invoked
    when the promise is resolved, return value is passed into the next `.then`
  - second argument is expected to be a callback function that will be invoked
    when the promise is rejected

```javascript
myPromise
  .then((resolveArg) => {
    // resolveArg is the argument that gets passed into the resolve function in the promise
    // executed when promise is resolved
  }, (rejectArg) => {
    // rejectArg is the argument that gets passed into the reject function in the promise
    // executed when promise is rejected
  });
```

- `.then` can be chained on a `Promise` that will be executed one right after
  the other

```javascript
myPromise
  .then(() => 'hello world!')
  .then(() => 'after hello world');
```

- `.catch` is an instance method on a `Promise` to catch errors on any part of
  the promise or the `.then` chain
  - argument passed in is expected to be a callback function

```javascript
myPromise
  .catch((rejectArg) => {
    // rejectArg is the argument that gets passed into the reject function in the promise
    // executed when any promise in the promise chain is rejected
  });
```

#### Three States of Promises

1. `Pending` - the Promise object has not resolved. Once it does, the state of
   the Promise object may transition to either the fulfilled or rejected state.
2. `Fulfilled` - Whatever operation the Promise represented succeeded and your
   success handler will get called. Now that it's fulfilled, the Promise:
    - must not transition to any other state.
    - must have a value, which must not change.
3. `Rejected` - Whatever operation the Promise represented failed and your
   error handler will get called. Now that it's rejected, the Promise:
    - must not transition to any other state.
    - must have a reason, which must not change.

### `async`/`await`

- `async`/`await` allows us to make `Promise`s synchronous with other code.
- `async` is a keyword that is used in front of a `function` definition to make
  the `function` return a `Promise` and allow it to use the `await` keyword
  - ex: `async function randomFn() {}`, `const randomFn = async () => {}`
  - once all the lines of code are executed in the `async` function, it will
    change the returned `Promise` to be `resolve`d
  - the `return` of the code inside of an `async` function is the `resolve`d
    value of the `Promise` returned from the `async` function
- `async`/`await` are keywords that we need to use together and should not be
  used without each other.
- `await` is used in front of a `Promise` in an `async function`.
  - It should not be used in front of a line of code that isn't a `Promise`
  - evaluates to the result of the `await`ed `Promise` (or what the `Promise`'s
    `resolve` value is)

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 1000)
});


async function asyncFunc() {
  console.log('before await');
  const res = await myPromise; // res = 3
  console.log('after await');
}

asyncFunc() // returns Promise pending until all lines of code have been executed
// before await
// 3
// after await (waits for myPromise to resolve)
```

### `fetch`

- `fetch(url, [options])` - a function used on a browser like Chrome or Firefox
  to make requests from the browser client to a server and read the response
  - The first argument of `fetch` is the `url` that you want to make the request
    to, if there are no other arguments passed into `fetch` besides `url`,
    `fetch` will make a `GET` request to the given `url`
  - The second argument is an optional `options` object that is used to
    customize the request components, you can define the following properties
    on the `options` object to customize the request components:
    - `method` - value is the method of the request
    - `headers` - value is an object whose key-value pairs are header names and
      values
    - `body` - value should be a string of the body of the request
  - Returns a `Promise` that resolves to an object containing information about
    the response
    - useful properties on the response object:
      - `status` - status code of the response
    - useful methods on the response object:
      - `text()` - returns a `Promise` that resolves to the body of the response
      - `headers.get(headerName)` - returns the value of the header with the
        given `headerName`

#### `fetch` examples

Here are examples of `fetch` requests using the Basic HTTP project from Monday:

- Get all the products
  - Request components:
    - method: GET
    - URL: /products
    - headers: none
    - body: none

```js
fetch('http://localhost:5000/products')
.then(response => {
  response.text(); // Promise that resolves to the body of the response
})
.then(body => {
  console.log(body); // HTML text
});
```

- Create a product
  - Request components:
    - method: POST
    - URL: /products
    - headers:
      - Content-Type: application/www-x-form-urlencoded
    - body: "name=Body+Wash&description=clean&price=10&categories=beauty"

```js
fetch(
  'http://localhost:5000/products',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/www-x-form-urlencoded' },
    body: 'name=Body+Wash&description=clean&price=10&categories=beauty'
  }
).then(response => {
  console.log(response.headers.get('Location')); // '/products/:productId
  console.log(response.status); // 302
});
```
