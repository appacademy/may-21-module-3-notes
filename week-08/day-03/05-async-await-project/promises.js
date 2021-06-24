// Phase 1: async

function num1() {
    return 1;
}
async function num2() {
    return 2;
}

console.log('num1', num1());
console.log('num2', num2());
num2().then(result => console.log(result))

// Phase 2: await

async function waiting() {
    const value = await num2();
    console.log('waiting', value);
}

waiting();

// Phase 3: DIY Promise

async function waitForMyPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!');
        }, 1000)
    });

    const result = await promise;
    console.log('my promise is', result);
}

waitForMyPromise();

// Phase 4: And then ...

new Promise((resolve) => {
    setTimeout(() => {
        resolve('done!');
    }, 1500)
}).then(r => console.log('then my other promise is', r));

// Phase 5: setTimeout

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function doStuff() {
  await wait(2000)
  console.log('The waiting is over!')
}

doStuff();

// Phase 6: reject ... catch

const tryRandomPromise = (random) => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve('success!!!');
    } else {
        reject('random error');
    }
});

for (let i=1; i<10; i++) {
    const random = Math.random();
    wait(2000 + random*1000)
        .then(() => tryRandomPromise(random))
        .then(result => console.log('random try #', i, result))
        .catch(error => console.error('random try #', i, error));
}

// Phase 7: try ... await ... catch

const tryTryAgain = async (i) => {
    const random = Math.random();

    // no need for try-catch if there's no possibility of error (rarely happens)
    await wait(3000 + random*1000);

    // usually you need to wrap the await to gracefully handle the error
    try {
        const result = await tryRandomPromise(random);
        console.log('random again #', i, result);
    } catch (error) {
        console.error('random again #', i, error);
    }
};

for (let i=1; i<10; i++) {
    tryTryAgain(i);
}

// Phase 8: Appreciate asynchronous functions

console.log('END OF PROGRAM');
