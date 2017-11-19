define(function(e,canvasOffsetLeft, canvasWidth, paddleWidth){
  return function(e, canvasOffsetLeft, canvasWidth, paddleWidth) {
    var relativeX = e.clientX - canvasOffsetLeft;
    let paddleX = 0;
    if(relativeX >  0 && relativeX < canvasWidth){
      paddleX = relativeX - paddleWidth/2;
      if(paddleX > canvasWidth - paddleWidth) paddleX = canvasWidth -paddleWidth;
      if(paddleX < 0) paddleX = 0;
      return [paddleX, true];
    } else {
      return [0, false];
    }

  };
});