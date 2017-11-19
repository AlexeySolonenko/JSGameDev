

// TO REFACTOR 
// 1) ELIMINATE UNNECESSARY VARS. ASSIGNMENTS
// WITH KEYDOWN IN FUNCTIONS SINCE NOW ARE IRRELEVANT
// 2) TO ADD RESET FUNCTION AND TO PUT SCORE AND LIVES FUNCTIONS
// IN SEPARATE FILES TO MAKE CODE MORE CONCISE


var gCanvas = document.getElementById("myCanvas");
var gCtx = gCanvas.getContext('2d'); 

requirejs(['vars','initVars','drawBall', 'drawPaddle', 'bounce', 'keyDownHandler', 'keyUpHandler', 'ballOverPaddle',
    'drawBricks', 'collisionDetection', 'mouseMoveHandler'], 
  function(vars, initVars, drawBall, drawPaddle, bounce, keyDownHandler, keyUpHandler, ballOverPaddle, drawBricks, collisionDetection, mouseMoveHandler){
    
    window.requestAnimationFrame = window.requestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.msRequestAnimationFrame
      || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 
    
    initVars(vars);
    document.addEventListener("keydown", function(e) {keyDownHandler(e,vars);});
    document.addEventListener("keyup", function(e) {keyUpHandler(e,vars)});
    document.addEventListener('mousemove', function(e){mouseMoveHandler(e,vars)});
    
    // main function looped with requestAnimationFrame
    function draw(timestamp) {
      vars.ctx.clearRect(0, 0, vars.canvas.width, vars.canvas.height);
      drawScore();
      drawLives();
      drawBricks(vars);
      ballOverPaddle(vars);//check if over paddle
      // x movement
      [vars.ballX,vars.ballDx] = bounce(vars.ballX, vars.ballDx, vars.ballRadius, vars.canvas.width);
      // y movement - improved over class assignment - common function for x and for y
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
      // movement of the paddle
      if(vars.rightPressed && vars.paddleX < vars.canvas.width-vars.paddleWidth) vars.paddleX +=7;
      if(vars.leftPressed && vars.paddleX > 0) vars.paddleX -=7;
      
      drawBall(vars);
      drawPaddle(vars);
      collisionDetection(vars);
      window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);
    
    
      function drawLives(){
      vars.ctx.font = "16px Arial";
      vars.ctx.fillStyle = "#0095DD";
      vars.ctx.fillText("Lives: " + vars.lives, 100, 20);
    };
    
    function drawScore(){
      vars.ctx.font = "16px Arial";
      vars.ctx.fillStyle = "#0095DD";
      vars.ctx.fillText("Score: " + vars.score, 8, 20);
    };
  
  });
