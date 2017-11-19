define( function(ballX, paddleX, paddleWidth, paddleHeight, canvasHeight , ballY, ballDy, ballRadius){
  return function(ballX, paddleX, paddleWidth, paddleHeight, canvasHeight , ballY, ballDy, ballRadius) {
    let ballOver = false;
    if((ballX > paddleX && ballX <= paddleX + paddleWidth) && 
      ((ballY+ballRadius >= canvasHeight-paddleHeight-Math.abs(ballDy)) && (ballY + ballRadius < canvasHeight - paddleHeight + Math.abs(ballDy)))) {
      ballOver = true;
    } else {
      ballOver = false;
    };
    return ballOver;
  }; // end of return function
}
);