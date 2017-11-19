define(function collisionDetection(vars){
  return function(vars){
    for(c=0; c<vars.brickColumnCount; c++){
      for(r=0; r<vars.brickRowCount; r++){
        var b = vars.bricks[c][r];
        if(b.status ==1) {
          if(vars.ballX > b.x && vars.ballX < b.x + vars.brickWidth && vars.ballY > b.y && vars.ballY < b.y+vars.brickHeight){
            vars.ballDy = -vars.ballDy;
            vars.bricks[c][r].status = 0;
            vars.score++;
            if(vars.score == vars.brickColumnCount * vars.brickRowCount){
              alert("YOU WIN, CONGRATULATIONS!");
              document.location.reload();
            }
          };
        }
      }; // for
    }; // for
    //return [vars.bricks, vars.ballDy, vars.score];
  };
});