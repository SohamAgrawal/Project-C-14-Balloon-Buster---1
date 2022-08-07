var bow , arrow,  background, balloons;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }

  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
  
  Cballoon();
  Dballoon();
  Eballoon();
  Fballoon();
  drawSprites();

 textSize(15);
 stroke("red");
 text("Score: " + score, 290,30);

 

}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function Cballoon(){

  if(frameCount%130===0){

  var Cballoon = createSprite(1,10,20,30);
  Cballoon.addImage(red_balloonImage);
  Cballoon.velocityX = 3;
  Cballoon.scale = 0.1;

  Cballoon.y = Math.round(random(30,300));

  }
}

function Dballoon(){
  if (frameCount%220===0){

   var Dballoon = createSprite(1,10,20,30);
   Dballoon.addImage(blue_balloonImage);
   Dballoon.scale = 0.1;
   Dballoon.velocityX = 3;

   Dballoon.y = Math.round(random(30,300));

  }
}

function Eballoon(){
  if (frameCount%330===0){

  var Eballoon = createSprite(1,10,20,30);
  Eballoon.addImage(green_balloonImage);
  Eballoon.scale = 0.1;
  Eballoon.velocityX = 3;

  Eballoon.y = Math.round(random(30,300));

  }
}

function Fballoon (){
if(frameCount%430===0){
  var Fballoon = createSprite(1,10,20,30);
  Fballoon.addImage(pink_balloonImage);
  Fballoon.scale = 1.3;
  Fballoon.velocityX = 3;

  Fballoon.y = Math.round(random(30,300));
}
}




















