var gCanvas = document.getElementById("myCanvas");
var gCtx = gCanvas.getContext('2d'); 

requirejs(['vars','drawBall', 'drawPaddle', 'bounce', 'keyDownHandler', 'keyUpHandler', 'ballOverPaddle', 
'drawBricks', 'collisionDetection', 'mouseMoveHandler'], function(vars,drawBall, drawPaddle, bounce, keyDownHandler, keyUpHandler, ballOverPaddle, drawBricks, collisionDetection, mouseMoveHandler){
  

     
  console.log(vars);
  

  //var canvas = vars.canvas;
  //var ctx = vars.ctx;
  
  /*
  var ballX = vars.canvas.width/2;
  var ballRadius = 10;
  var ballY = vars.canvas.height - ballRadius;
  var ballDx = 4;
  var ballDy = -4;
  var paddleHeight = 10;
  var paddleWidth = 75;
  var paddleX = (vars.canvas.width - paddleWidth)/2;
  var rightPressed = false;
  var leftPressed = false;
  var ballOver = false;
  var brickRowCount = 3;
  var brickColumnCount = 5;
  var brickWidth = 75;
  var brickHeight = 20;
  var brickPadding = 10;
  var brickOffsetTop = 30;
  var brickOffsetLeft = 30;
  var bricks = [];
  var score = 0;
  var lives = 3;
  */
  vars.ballX = vars.canvas.width/2;
  vars.ballY = vars.canvas.height - vars.ballRadius;
  vars.paddleX = (vars.canvas.width - vars.paddleWidth)/2;
    
  window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 
      
  for (c = 0; c<brickColumnCount; c++){
    bricks[c] = [];
      for(r=0; r<brickRowCount; r++){
          bricks[c][r] = {x: 0, y: 0, status: 1}
      };
  };

  
  
  document.addEventListener("keydown", (function(e) {
    [rightPressed, leftPressed] = keyDownHandler(e,paddleX,canvas.width-paddleWidth);
    })
  );
  document.addEventListener("keyup", (function(e) {
    [rightPressed, leftPressed] = keyUpHandler(e,paddleX,canvas.width-paddleWidth);
    })
  );
  document.addEventListener('mousemove', function(e){
    let [tempPaddleX, mouseMoved] = mouseMoveHandler(e,canvas.offsetLeft, canvas.width, paddleWidth);
    if(mouseMoved){
      paddleX = tempPaddleX;
  };});
  
  function drawLives(){
    ctx.font = "16px Aria";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, 65, 20);
  };
  
  function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
  };
  
  function draw(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();
    drawLives();
    bricks = drawBricks(bricks, brickColumnCount, brickRowCount, brickWidth, brickHeight, brickOffsetLeft, brickOffsetTop, brickPadding);
    
    ballOver = ballOverPaddle(ballX, paddleX, paddleWidth, paddleHeight, canvas.height , ballY, ballDy, ballRadius);
    // x movement
    [ballX,ballDx] = bounce(ballX, ballDx, ballRadius, canvas.width);
    // y movement
    if((ballY + ballDy <= canvas.height - ballRadius)) {
      [ballY,ballDy] = bounce(ballY, ballDy, ballRadius, canvas.height, "Y", ballOver);
    } else if (ballY + ballDy > canvas.height - ballRadius) {
      lives--;
      if( lives <= 0){
        alert("GAME OVER");
        document.location.reload();
      } else {
        ballX = canvas.width/2;
        ballY = canvas.height-ballRadius;
        ballDx = 4;
        ballDy = -4;
        paddleX = (canvas.width - paddleWidth)/2;
      }
    };
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) paddleX +=7;
    if(leftPressed && paddleX > 0) paddleX -=7;
    
    drawBall(ballX, ballY, ballRadius);
    drawPaddle(paddleX, (canvas.height-paddleHeight), paddleWidth, paddleHeight);
    [bricks, ballDy, score] = collisionDetection(bricks, brickColumnCount, brickRowCount, ballX, ballY, ballDy, brickWidth, brickHeight, score);
    window.requestAnimationFrame(draw);
  }

  window.requestAnimationFrame(draw);
});
