define( function keyUpHandler(e, x, limit) {
  return function(e, x, limit) {
    let rightPressed = false;
    let leftPressed = false;
    if(e.keyCode == 39) {
      rightPressed = false;
    } else if (e.keyCode == 37) {
      leftPressed = false;
    };
    if(rightPressed && x > limit) rightPressed = false;
    if(leftPressed && x < 0) leftPressed = false;
    return [rightPressed, leftPressed];    
  };
});