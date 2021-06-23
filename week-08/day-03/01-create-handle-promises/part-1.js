/*
Write a function called `stretch`. It should:

- return a promise
- print `"done stretching"`
- fulfill the promise after 1 second
*/

function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching");
      resolve('hello');
    }, 1000);
  })
  // .then(() => {
  //   console.log('after stretching')
  // });
}

// function stretch() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("done stretching");
//       resolve();
//     }, 1000);
//   })
// }

// stretch().then(() => {
//     console.log('after stretching')
//   });


/*
Write a function called `runOnTreadmill`. It should:

- return a promise
- fulfill the promise after 0.5 seconds
- print `"done running on treadmill"` after promise is fulfilled
*/

function runOnTreadmill(param) {
  console.log(param)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
}


/*
Write a function called `liftWeights`. It should:

- return a promise
- print `"done lifting weights"`
- fulfill the promise after 2 seconds
*/

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
}

/*
Write a function called `workout` that runs the above functions in a way
that ensures you begin running on the treadmill after you've finished
stretching. Begin lifting weights after running on the treadmill. Print
`"done working out"` after you've finished lifting weights.
*/
// const randomArrowFn = () => 'hello world!';
// const randomArrowFn = () => (
//   'hello world!'
// );
// const randomArrowFn = () => {
//   return 'hello world!'
// }

function workout() {
  // this is wrong:
  // stretch();
  // runOnTreadmill();
  // liftWeights();

  stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(stretch)
    .then(() => console.log("done working out"))
    .catch((err) => console.log(err));
}


/*
Test your code:

Run the file (`node part-1.js`) and check your output against the expected output.
*/


workout();
// done stretching
// done running on treadmill
// done lifting weights
// done working out