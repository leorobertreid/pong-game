class Paddle {
    keyCodes = {
        W: 87,
        S: 83,
        arrowUp: 38,
        arrowDown: 40,
    };

    constructor(width, height, X, Y, ctx, paddleColor, paddleSide, paddleSpeed) {
        this.width = width;
        this.height = height;

        this.X = X;
        this.X = Y;

        this.ctx = ctx;

        this.handleKeys();
    }

    handlePaddle() {
        this.drawPaddle();
    }

    drawPaddle = () => {
        this.ctx.fillStyle = this.paddleColor;
        this.ctx.fillRect()
    }

    handleKeys = () => {
        window.addEventListener("keydown", (event) => {
            let keyCode = event.key();
            
            if (this.paddleSide === 1) {
                this.handlePaddleSide1Movement(keyCode);
            } 
            else if (this.paddleSide === 2) {
                this.handlePaddleSide2Movement(keyCode);
            }

        })
    }

    handlePaddleSide1Movement = (keyCode) => {
        if (keyCode === this.keyCodes.W) {
            this.Y -= this.paddleSpeed;
        } 
        else if (keyCode === this.keyCodes.S) {
            this.Y += this.paddleSpeed;
        }
    }

    handlePaddleSide2Movement = (keyCode) => {
        if (keyCode === this.keyCodes.arrowUp) {
            this.Y -= this.paddleSpeed;
        } 
        else if (keyCode === this.keyCodes.arrowDown) {
            this.Y += this.paddleSpeed;
        }
    }
}

const createPaddles = (paddleWidth, paddleHeight, starting1, starting2, paddleSpeed, ctx, paddle1Color, paddle2Color) => {
    let paddle1 = new Paddle(paddleWidth, paddleHeight, starting1.x, starting1.y, ctx, paddle1Color, 1, paddleSpeed);
    let paddle2 = new Paddle(paddleWidth, paddleHeight, starting2.x, starting2.y, ctx, paddle2Color, 1, paddleSpeed);

    paddle1.handleKeys();
    paddle2.handleKeys();

    return {
        "paddle1": paddle1,
        "paddle2": paddle2,
    };
}

export default createPaddles;