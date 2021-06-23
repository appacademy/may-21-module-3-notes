# Practice: Creating and Handling Promises

In this practice, you will work on creating and handling `Promise`s.

Clone the project from the [starter].

## Part 1: Workout

Implement the code in `part-1.js`.

### `stretch`

Write a function called `stretch`. It should:

- return a promise
- print `"done stretching"`
- fulfill the promise after 1 second

### `runOnTreadmill`

Write a function called `runOnTreadmill`. It should:

- return a promise
- print `"done running on treadmill"`
- fulfill the promise after 0.5 seconds

### `liftWeights`

Write a function called `liftWeights`. It should:

- return a promise
- print `"done lifting weights"`
- fulfill the promise after 2 seconds

### `workout`

Write a function called `workout` that runs the above functions in a way
that ensures you begin running on the treadmill after you've finished
stretching. Begin lifting weights after running on the treadmill. Print
`"done working out"` after you've finished lifting weights.

### Test your code

Run the file (`node part-1.js`) and check your output against the expected output.

## Part 2: Effective Workout

In Part 2, you will improve upon part 1 in `part-2.js`.

Adjust your `workout` function so that it takes in a specific amount of time
that you have available for the entire `workout`

Given the following new rules, have each promise resolve with the amount of time
left by decrementing each action by its specific amount of time

New Rules:

1. you must stretch for 1 second
2. you must run on treadmill for 0.5 seconds
3. you must lift weights for 2 seconds

If the time needed to complete the current action exceeds the amount of time
left, reject the promise and provide a reason.

For example, working out for 500 milliseconds should print an error because
if you only have 0.5 seconds to workout, you won't have enough time to even
stretch.

```js
workout(500); // "Error: you dont have enough time to stretch"
```

### Test each function

Comment in each invocation of the workout function listed at the bottom
and run the file (`node part-2.js`) to see if you get the expected output.

[starter]: https://github.com/appacademy-starters/practice-creating-handling-promises