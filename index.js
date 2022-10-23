const gameBoard = document.getElementById("gameBoard");
const ctx = gameBoard.getContext("2d");

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const paddlePadding = 30;

const paddle1Color = "blue";
const paddle2Color = "green";

const paddleWidth = 25;
const paddleHeight = 100;

const paddleSpeed = 10;

const backgroundColor = "white";

const ballColor = "red";

let ballSpeed = 20;

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
    constructor(X, Y, radius, color, speed) {
        this.X = X;
        this.Y = Y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }
}

const refreshGame = () => {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}

const gameLoop = () => {
    setTimeout(() => {
        refreshGame();

        paddle1.drawPaddle();
        paddle2.drawPaddle();

        gameLoop();
    }, 10)

    
};

let paddle1 = new Paddle(0 + paddlePadding, 0 + paddlePadding, paddleWidth, paddleHeight, paddle1Color, 1);
let paddle2 = new Paddle(gameWidth - paddlePadding - paddleWidth, gameHeight - paddlePadding - paddleHeight, paddleWidth, paddleHeight, paddle2Color, 2);

let ball = new Ball(gameWidth / 2, gameHeight / 2, 5, ballColor, ballSpeed);

gameLoop();