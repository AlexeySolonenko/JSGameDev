define(function(e,vars){
  return function(e, vars) {
    var relativeX = e.clientX - vars.canvas.offsetLeft;
    //vars.paddleX = 0;
    if(relativeX >  vars.paddleWidth/2 && relativeX < vars.canvas.width-vars.paddleWidth/2){
      vars.paddleX = relativeX - vars.paddleWidth/2;
      //if(vars.paddleX < 0) vars.paddleX = 0;
      //return [paddleX, true];
    };

  };
});