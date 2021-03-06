// slowPush problem
function slowPush(arr, val, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push(val);
      resolve();
    }, delay);
  });
}

const arr = [];

slowPush(arr, 1, 1000) // after 1 second: arr = [1]
  .then(() => slowPush(arr, 2, 2000)) // after 2 more seconds: arr = [1, 2]
  .then(() => slowPush(arr, 3, 3000)); // after 3 more seconds: arr = [1, 2, 3]

// added a setTimeout that will log `arr` to the console after 4 seconds
setTimeout(() => {
  console.log(arr); // [1, 2]
}, 4000);