const gameBoard = document.getElementById("gameBoard");
const ctx = gameBoard.getContext("2d");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const scoreText = document.getElementById("scoreText");
const winnerText = document.getElementById("winnerText");

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const paddlePadding = 30;

const paddle1Color = "blue";
const paddle2Color = "purple";

const paddleWidth = 25;
const paddleHeight = 150;

const paddleSpeed = 20;

const backgroundColor = "white";

const ballColor = "red";
const ballRadius = 10;

const ballSpeed = 3;

let score = [0, 0];

const initialXtoY = 0.7;

class Paddle{
    constructor(X, Y, width, height, color, side){
        this.X = X;
        this.Y = Y;
        this.color = color;
        this.side = side;
        this.width = width;
        this.height = height;

        window.addEventListener("keydown", (e) => {this.handleKeyDown(e)});
    };

    drawPaddle = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.X, this.Y, this.width, this.height);
    };

    handleKeyDown(e) {
        let key = e.key;
        
        if (this.side == 1) {
            if (key == "w") {
                this.Y -= paddleSpeed;
            }
            if (key == "s") {
                this.Y += paddleSpeed;
            }
        }
        if (this.side == 2) {
            if (key == "ArrowUp") {
                this.Y -= paddleSpeed;
            }
            if (key == "ArrowDown") {
                this.Y += paddleSpeed;
            }
        }
    };

}

class Ball {
    constructor(X, Y, radius, color, speed, directionX, directionY) {
        this.X = X;
        this.Y = Y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.directionX = directionX;
        this.directionY = directionY;
    };

    drawBall = () => {
        ctx.beginPath();
        ctx.arc(this.X, this.Y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    moveBall = () => {
        this.X += this.speed * this.directionX;
        this.Y -= this.speed * this.directionY;

        this.handleCollision();
    };

    handleCollision = () => {
        if (this.X <= paddle1.X + paddle1.width 
            && this.X >= paddle1.X 
            && this.Y >= paddle1.Y
            && this.Y <= paddle1.Y + paddle1.height) {
            
            this.collideX();
        }
        else if (this.X <= paddle2.X + paddle1.width 
                && this.X >= paddle2.X 
                && this.Y >= paddle2.Y
                && this.Y <= paddle2.Y + paddle1.height) {
                
            this.collideX();
        }
        else if (this.Y <= 0 || this.Y >= gameHeight) {
            
            this.collideY();
        }

    };

    collideX = () => {
        this.directionX = - this.directionX;
    };

    collideY = () => {
        this.directionY = - this.directionY;
    };
}

const refreshGame = () => {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}

const resetBoard = () => {
    ball.X = gameWidth / 2;
    ball.Y = gameHeight / 2;
}

const checkForPoint = () => {
    if(ball.X <= 0 ) {
        resetBoard();
        score[1] += 1;
        ball.speed *= 1.08;
    }
    else if(ball.X >= gameWidth) {
        resetBoard();
        score[0] += 1;
        ball.speed *= 1.08;
    }
};

const resetGame = () => {
    resetBoard();
    score = [0, 0];
    ball.speed = 0;
};

const checkForWin = () => {
    if (score[0] == 16) {
        winnerText.innerText = "Winner: Player 1 (on the left)";
        resetGame();
    } else if (score[1] == 16) {
        winnerText.innerText = "Winner: Player 2 (on the right)";
        resetGame();
    }
    
};

const displayScore = () => {
    scoreText.innerText = score[0] + " : " + score[1];
};

const gameLoop = () => {
    setTimeout(() => {
        refreshGame();

        paddle1.drawPaddle();
        paddle2.drawPaddle();

        ball.drawBall();
        ball.moveBall();

        checkForPoint();
        displayScore();

        checkForWin();

        gameLoop();
    }, 10);
    
};

let paddle1 = new Paddle(0 + paddlePadding, gameHeight / 2 - paddleHeight / 2, paddleWidth, paddleHeight, paddle1Color, 1);
let paddle2 = new Paddle(gameWidth - paddlePadding - paddleWidth, gameHeight / 2 - paddleHeight / 2, paddleWidth, paddleHeight, paddle2Color, 2);

let ball = new Ball(gameWidth / 2, gameHeight / 2, ballRadius, ballColor, 0, initialXtoY, 1 - initialXtoY);

startBtn.addEventListener("click", () => {
    ball.speed = ballSpeed;
    
    gameLoop();
});

resetBtn.addEventListener("click", () => {resetGame()});