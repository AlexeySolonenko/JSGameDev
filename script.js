var gCanvas = document.getElementById("myCanvas");
var gCtx = gCanvas.getContext('2d'); 

requirejs(['vars','drawBall', 'drawPaddle', 'bounce', 'keyDownHandler', 'keyUpHandler', 'ballOverPaddle', 
'drawBricks', 'collisionDetection', 'mouseMoveHandler'], function(vars,drawBall, drawPaddle, bounce, keyDownHandler, keyUpHandler, ballOverPaddle, drawBricks, collisionDetection, mouseMoveHandler){

  vars.ballX = vars.canvas.width/2;
  vars.ballY = vars.canvas.height - vars.ballRadius;
  vars.paddleX = (vars.canvas.width - vars.paddleWidth)/2;
    
  window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 
      
  for (c = 0; c<vars.brickColumnCount; c++){
    vars.bricks[c] = [];
      for(r=0; r<vars.brickRowCount; r++){
          vars.bricks[c][r] = {x: 0, y: 0, status: 1}
      };
  };
  document.addEventListener("keydown", (function(e) {
    [vars.rightPressed, vars.leftPressed] = keyDownHandler(e,vars.paddleX,vars.canvas.width-vars.paddleWidth);
    })
  );
  document.addEventListener("keyup", (function(e) {
    [vars.rightPressed, vars.leftPressed] = keyUpHandler(e,vars.paddleX,vars.canvas.width-vars.paddleWidth);
    })
  );
  document.addEventListener('mousemove', function(e){
    let [temppaddleX, mouseMoved] = mouseMoveHandler(e,vars.canvas.offsetLeft, vars.canvas.width, vars.paddleWidth);
    if(mouseMoved){
      vars.paddleX = temppaddleX;
  };});
  
  function drawLives(){
    vars.ctx.font = "16px Aria";
    vars.ctx.fillStyle = "#0095DD";
    vars.ctx.fillText("Lives: " + vars.lives, 65, 20);
  };
  
  function drawScore(){
    vars.ctx.font = "16px Arial";
    vars.ctx.fillStyle = "#0095DD";
    vars.ctx.fillText("Score: " + vars.score, 8, 20);
  };
  
  function draw(timestamp) {
    vars.ctx.clearRect(0, 0, vars.canvas.width, vars.canvas.height);
    drawScore();
    drawLives();
    vars.bricks = drawBricks(vars);
    vars.ballOver = ballOverPaddle(vars);
    // x movement
    [vars.ballX,vars.ballDx] = bounce(vars.ballX, vars.ballDx, vars.ballRadius, vars.canvas.width);
    // y movement
    if((vars.ballY + vars.ballDy <= vars.canvas.height - vars.ballRadius)) {
      [vars.ballY,vars.ballDy] = bounce(vars.ballY, vars.ballDy, vars.ballRadius, vars.canvas.height, "Y", vars.ballOver);
    } else if (vars.ballY + vars.ballDy > vars.canvas.height - vars.ballRadius) {
      vars.lives--;
      if( vars.lives <= 0){
        alert("GAME OVER"); // game over
        document.location.reload();
      } else { // reset
        vars.ballX = vars.canvas.width/2;
        vars.ballY = vars.canvas.height-vars.ballRadius;
        vars.ballDx = 4;
        vars.ballDy = -4;
        vars.paddleX = (vars.canvas.width - vars.paddleWidth)/2;
      }
    };
    
    if(vars.rightPressed && vars.paddleX < vars.canvas.width-vars.paddleWidth) vars.paddleX +=7;
    if(vars.leftPressed && vars.paddleX > 0) vars.paddleX -=7;
    
    drawBall(vars);
    drawPaddle(vars);
    [vars.bricks, vars.ballDy, vars.score] = collisionDetection(vars);
    window.requestAnimationFrame(draw);
  }

  window.requestAnimationFrame(draw);
});
