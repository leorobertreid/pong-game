import handleBall from "./ball";
import handleDisplayGame from "./displayGame";
import handleScore from "./handleScore";
import handleWinCheck from "./checkForWin";

const gameLoop = (ballSpeed, ScoresTillWin, gameSpeed, paddles, ball) => {
    let {paddle1, paddle2} = paddles;

    setTimeout(() => {
        handleDisplayGame(ctx);

        paddle1.handlePaddle();
        paddle2.handlePaddle();

        handleBall(ball);
        handleResetGame(ctx);

        checkForWin();
        handleScore();

        gameLoop(ballSpeed, ScoresTillWin, gameSpeed, paddles);
    }, 10)
}

export default gameLoop;