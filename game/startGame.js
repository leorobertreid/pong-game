import gameLoop from "./gameLoop";
import settings from "../settings";
import createPaddles from "./paddles";
import { setupBall } from "./ball";

const startGame = (ctx, resetBtn, scoreBoard, gameBoard) => {
    const {ballSpeed, ScoresTillWin, gameSpeed, ballColor, paddle1Color, paddle2Color, paddleWidth, paddleHeight} = settings;

    let paddles = createPaddles(paddleWidth, paddleHeight);

    mainBall = setupBall(gameBoard.width, gameBoard.height, ballColor, );

    gameLoop(ballSpeed, ScoresTillWin, gameSpeed, paddles, mainBall);
}

export default startGame;