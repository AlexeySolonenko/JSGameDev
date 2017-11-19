define( function drawBall(vars) {
  
  return function(vars) {
    vars.ctx.beginPath();
    vars.ctx.arc(vars.ballX, vars.ballY, vars.ballRadius, 0, Math.PI*2);
    vars.ctx.fillStyle= "#0095DD";
    vars.ctx.fill();
    vars.ctx.closePath();
  };
});