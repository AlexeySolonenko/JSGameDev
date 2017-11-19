define(
  function drawBricks(bricks, brickColumnCount, brickRowCount, brickWidth, brickHeight, brickOffsetLeft, brickOffsetTop, brickPadding){
    return function(bricks, brickColumnCount, brickRowCount, brickWidth, brickHeight, brickOffsetLeft, brickOffsetTop, brickPadding){
      for(c=0; c<brickColumnCount; c++){
        for(r=0; r<brickRowCount; r++){
          if(bricks[c][r].status ==1) {
            let brickX = (c*(brickWidth+brickPadding)) + brickOffsetLeft;
            let brickY = (r*(brickHeight+brickPadding)) + brickOffsetTop;
            
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095dd";
            ctx.fill();
            ctx.closePath();
          };
        };
      };
      return bricks;
    }
  }
);