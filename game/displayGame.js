export const refreshGame = (ctx, bgColor, gameWidth, gameHeight) => {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}