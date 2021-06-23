// const promiseCB = (resolve, reject) => {
//   // setTimeout(() => {
//   //   console.log('Hello World!');
//   //   // throw new Error();
//   //   // reject();
//   //   resolve();
//   // }, 2000);
//   // make a request to the server
//   // after the response comes back
// };

// // const promise = new Promise(promiseCB);

// new Promise(promiseCB)
// .then(() => {
//   // server response is received
//   console.log('This happens after setTimeout');
// })
// .catch(() => {
//   // server response unsuccessful
//   console.log('promise rejected')
// });

async function execute() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  
  console.log('promise is done');

  return 'Hello World';
  // return undefined;
}

console.log(execute().then((resolvedVal) => console.log(resolvedVal)));
console.log('after execute is called')