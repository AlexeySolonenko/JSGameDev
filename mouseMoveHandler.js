define(function(e,vars){
  return function(e, vars) {
    var relativeX = e.clientX - vars.canvas.offsetLeft;
    vars.paddleX = 0;
    if(relativeX >  0 && relativeX < vars.canvas.width){
      vars.paddleX = relativeX - vars.paddleWidth/2;
      if(vars.paddleX > vars.canvas.width - vars.paddleWidth) vars.paddleX = vars.canvas.width - vars.paddleWidth;
      if(vars.paddleX < 0) vars.paddleX = 0;
      //return [paddleX, true];
    };

  };
});