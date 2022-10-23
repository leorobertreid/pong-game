class ball {
    constructor(X, Y, color, speed, ctx, direction) {
        this.X = X;
        this.Y = Y;
        this.color = color;
        this.speed = speed;
        this.ctx = ctx;
        this.direction = direction;
    }

    controlBall = () => {

    }

    moveBall = (xToY) => {
        this.X += xToY * this.speed;
        this.Y -= (1 - xToY) * this.speed;
    }

    handleCollisions = () => {

    }
}

export const setupBall = (gameWidth, gameHeight, color, speed, ctx, direction) => {
    ballX = gameWidth / 2;
    ballY = gameHeight / 2;

    ballMain = new Ball(ballX, ballY, color, speed, ctx, direction);

    return ballMain();
}

const handleBall = (ball) => {
    
}

export default handleBall;