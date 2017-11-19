define( function keyUpHandler(e, vars) {
  return function(e, vars) {
    vars.rightPressed = false;
    vars.leftPressed = false;
    if(e.keyCode == 39) {
      vars.rightPressed = false;
    } else if (e.keyCode == 37) {
      vars.leftPressed = false;
    };
    if(vars.rightPressed && vars.paddleX > vars.canvas.width-vars.paddleWidth) vars.rightPressed = false;
    if(vars.leftPressed && vars.paddleX < 0) vars.leftPressed = false; 
  };
});