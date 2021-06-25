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

slowPush(arr, 1, 1000)
  .then(() => slowPush(arr, 2, 2000))
  .then(() => slowPush(arr, 3, 3000));

// added a setTimeout that will log `arr` to the console after 4 seconds
setTimeout(() => {
  console.log(arr); // [1, 2]
}, 4000);