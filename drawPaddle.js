  define( function drawPaddle(vars){
    return function drawPaddle(vars) {
    vars.ctx.beginPath();
    vars.ctx.rect(vars.paddleX, vars.canvas.height-vars.paddleHeight, vars.paddleWidth, vars.paddleHeight);
    vars.ctx.fillStyle = "#0095DD";
    vars.ctx.fill();
    vars.ctx.closePath();
  }
});
  