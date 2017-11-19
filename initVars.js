define(function initVars(vars){
    return function(vars){
    vars.ballX = vars.canvas.width/2;
    vars.ballY = vars.canvas.height - vars.ballRadius - vars.paddleHeight;
    vars.ballDx = 4;
    vars.ballDy = -4;
    vars.paddleX = (vars.canvas.width - vars.paddleWidth)/2;  
    for (c = 0; c<vars.brickColumnCount; c++){
      vars.bricks[c] = [];
        for(r=0; r<vars.brickRowCount; r++){
            vars.bricks[c][r] = {x: 0, y: 0, status: 1}
        };
    };
  };
});