var playerPaddle
var computerPaddle
var ball
var gameState = "FirstState";

var pscore = 0;

var cscore = 0;
var edges;
function setup(){
    createCanvas(400,400);

    playerPaddle =  createSprite(385, 200,10,70)
    computerPaddle = createSprite(15, 200,10,70);
    ball = createSprite(200, 200,10,10);
}

function draw(){
    background("white")



lineloop();

if(gameState === "FirstState"){
text("Press Space to Start", 150, 190);
}
textSize(15);
text(pscore, 215, 15);

textSize(15);
text(cscore, 185, 15);


playerPaddle.y = mouseY;

computerPaddle.y = ball.y;
    
    
if (keyDown("space")) {
  
  gameState = "SecondState";
  
ball.velocityX = 5;
ball.velocityY = 4;
        
      
    }
    

ball.bounceOff(playerPaddle);
ball.bounceOff(computerPaddle);

edges = createEdgeSprites();

ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]);
        
  if(ball.x > 400) {
    ball.x = 200;
    ball.y = 200;
    ball.velocityY = 0;
    ball.velocityX = 0;
    gameState = "FirstState";
cscore=cscore+1
//cscore+=1;    
  }
if(cscore===5){  
gameState = "ThiredState"
text("Game Over", 170, 150);
text("press'R'to restart",150,170)    
  
  
}
if (keyDown("R")) {
gameState = "FirstState";
cscore = 0
}


drawSprites();
    drawSprites();

}

function lineloop() {
    for (var i = 0; i < 400; i=i+20) {
    
     line(200, i, 200, i+10);
     
   }
    
   }