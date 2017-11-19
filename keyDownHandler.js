define( function keyDownHandler(e, vars) {
  return function(e, vars) {
    vars.rightPressed = false;
    vars.leftPressed = false;
    if(e.keyCode == 39) {
      vars.rightPressed = true;
    } else if (e.keyCode == 37) {
      vars.leftPressed = true;
    };
    if(vars.rightPressed && vars.paddleX > vars.canvas.width-vars.paddleWidth) rightPressed = false;
    if(vars.leftPressed && vars.paddleX < 0) vars.leftPressed = false;
    //return [rightPressed, leftPressed];
    //console.log(e.keyCode);
  };
});