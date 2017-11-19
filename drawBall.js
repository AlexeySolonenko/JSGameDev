define( function drawBall(x, y, r) {
  
  return function(x,y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fillStyle= "#0095DD";
    ctx.fill();
    ctx.closePath();
  };
});