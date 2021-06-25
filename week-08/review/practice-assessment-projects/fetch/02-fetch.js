if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

const body = JSON.stringify({ color: 'green' });
fetch('/colors/1', {
  method: 'put',
  header: {
    'Content-Type': 'application/json'
  },
  body
})
  .then(res => res.json())
  .then(resBody => console.log(resBody));