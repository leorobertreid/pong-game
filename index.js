import startGame from "./game/startGame";

const gameBoard = document.getElementById("gameBoard");
const ctx = gameBoard.getContext("2d");

const resetBtn = document.getElementById("resetBtn");
const scoreBoard = document.getElementById("scoreText");

startGame(ctx, resetBtn, scoreBoard, gameBoard);