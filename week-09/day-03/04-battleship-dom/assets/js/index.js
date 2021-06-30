import Board from "./board.js";

const createBoard = (grid) => {
    const reset = document.createElement("button");
    reset.innerText = "Reset Game";
    reset.className = "reset";
    reset.addEventListener("click", resetBoard);

    const boardContainer = document.createElement("div");
    boardContainer.className = "board";

    for (let i = 0; i < grid.length; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < grid[0].length; j++) {
            const col = document.createElement("div");
            col.className = "col";
            col.id = `${i}${j}`;
            col.setAttribute("data-val", grid[i][j]);
            col.addEventListener("click", chooseSquare);

            const val = document.createElement("span");

            col.appendChild(val);

            row.appendChild(col);
        }
        boardContainer.appendChild(row);
    }
    document.body.appendChild(reset);
    document.body.appendChild(boardContainer);
}

const resetBoard = () => {
    const reset = document.querySelector(".reset");
    reset.remove();

    const boardContainer = document.querySelector(".board");
    boardContainer.remove();

    const gameOver = document.querySelector(".gameOver");
    if (gameOver) gameOver.remove();

    board = new Board();
    createBoard(board.grid);
}

const chooseSquare = e => {
    e.preventDefault();

    const value = e.target.dataset.val;
    if (value !== "null") {
        e.target.classList.add("hit");
        e.target.innerHTML = `<span>${value}</span>`
        board.numRemaining -= 1;
        e.target.removeEventListener("click", chooseSquare);
    } else {
        e.target.classList.add("miss");
        e.target.removeEventListener("click", chooseSquare);
    }
    if (board.isDone()) endGame();
}

const endGame = () => {
    const boardContainer = document.querySelector(".board");
    const gameOver = document.createElement("div");
    gameOver.className = "gameOver"
    gameOver.innerText = "YOU WIN!"
    document.body.insertBefore(gameOver, boardContainer);

    for (let i = 0; i < board.grid.length; i++) {
        for (let j = 0; j < board.grid[0].length; j++) {
            document.getElementById(`${i}${j}`).removeEventListener("click", chooseSquare);
        }
    }

}

let board = new Board();

window.onload = () => {
    createBoard(board.grid);
}