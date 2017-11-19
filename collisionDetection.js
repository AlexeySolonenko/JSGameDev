define(function collisionDetection(bricks, brickColumnCount, brickRowCount, ballX, ballY, ballDy, brickWidth, brickHeight, score, lives){
  return function(bricks, brickColumnCount, brickRowCount, ballX, ballY, ballDy, brickWidth, brickHeight, score, lives){
    for(c=0; c<brickColumnCount; c++){
      for(r=0; r<brickRowCount; r++){
        var b = bricks[c][r];
        if(b.status ==1) {
          if(ballX > b.x && ballX < b.x + brickWidth && ballY > b.y && ballY < b.y+brickHeight){
            ballDy = -ballDy;
            bricks[c][r].status = 0;
            score++;
            if(score == brickColumnCount * brickRowCount){
              alert("YOU WIN, CONGRATULATIONS!");
              document.location.reload();
            }
          };
        }
      }; // for
    }; // for
    return [bricks, ballDy, score];
  };
});