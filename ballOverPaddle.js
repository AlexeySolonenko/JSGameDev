define( function(vars){
  return function(vars) {
    let ballOver = false;
    if((vars.ballX > vars.paddleX && vars.ballX <= vars.paddleX + vars.paddleWidth) && 
      ((vars.ballY+vars.ballRadius >= vars.canvas.height-vars.paddleHeight-Math.abs(vars.ballDy)) && (vars.ballY + vars.ballRadius < vars.canvas.height - vars.paddleHeight + Math.abs(vars.ballDy)))) {
      ballOver = true;
    } else {
      ballOver = false;
    };
    return ballOver;
  }; // end of return function
}
);