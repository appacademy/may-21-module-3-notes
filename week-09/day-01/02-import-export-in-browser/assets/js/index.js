import Banana, { hello1 as hello, hello2, hello3, hello4 } from './game.js';

console.log(Banana); // Game class
const Game = Banana;

console.log(hello1); // Error
console.log(hello); // "world"

window.onload = () => {
    const game = new Game();
    game.start();
};