  define( function drawPaddle(x,y,w,h){
    return function drawPaddle(x,y, w,h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
});
  