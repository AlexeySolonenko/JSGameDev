define(
  function drawBricks(vars){
    return function(vars){
      for(c=0; c<vars.brickColumnCount; c++){
        for(r=0; r<vars.brickRowCount; r++){
          if(vars.bricks[c][r].status ==1) {
            let brickX = (c*(vars.brickWidth+vars.brickPadding)) + vars.brickOffsetLeft;
            let brickY = (r*(vars.brickHeight+vars.brickPadding)) + vars.brickOffsetTop;
            
            vars.bricks[c][r].x = brickX;
            vars.bricks[c][r].y = brickY;
            vars.ctx.beginPath();
            vars.ctx.rect(brickX, brickY, vars.brickWidth, vars.brickHeight);
            vars.ctx.fillStyle = "#0095dd";
            vars.ctx.fill();
            vars.ctx.closePath();
          };
        };
      };
      return vars.bricks;
    }
  }
);