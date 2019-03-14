let mySoundA;
let mySoundB;
let mySoundC;
let mySoundD;
let flyA;
let flyB;
let flyC;
let flyD;

let layer;

var aX;
var aY;
var aR;
var inc = 0;


var ghost, circle;
var direction = 90;

let started = false;
 

function preload(){
  soundFormats('mp3', 'ogg');
  mySoundA = loadSound('bee.mp3');
  mySoundB = loadSound('ant.mp3');
  mySoundC = loadSound('spider.mp3');
  mySoundD = loadSound('insect4.mp3');
  flyA = loadImage("flyA.png");
  flyB = loadImage("flyB.png");
  flyB2 = loadImage("flyB2.png");
  layer = loadImage("Layer1.png");

}


function setup() { 
  createCanvas(800, 400);
  //mySoundA.loop();
 // mySoundB.loop();
 // mySoundC.loop();
 // mySoundD.loop();
 aX = 0;
 aY = 0;
 aR = 0;

ghost = createSprite(400, 150, 50, 100);

var myAnimation = ghost.addAnimation('floating', 'Layer1.png', 'Layer1.png');
myAnimation.offY = 18;

  
} 

function draw() { 
  background(255);

/*
  rotate(PI / aR);
  image(flyB, aX, aY, 100, 100);
  aX = aX + random(random(-5, -1), random(-5, -1));
  aY = aY + random(-1, 1);
  aR = aR + random(-2, 2.0);

  if(aX < 0 ){
    aX = 0;
  }
  if(aY < 0 ){
    aY = 0;
  }
*/

  drawSprites();
  
 

  if(mouseX < 100 && mouseX > 50 && mouseY < 100 && mouseY > 50) {
      

      ghost.changeAnimation('floating');

  var ghost2 = createSprite(200,150);
  ghost2.addAnimation('floating', 'Layer1.png', 'Layer1.png');
  ghost2.life = 10;
  
  var ghost3 = createSprite(600,150);
  ghost3.addAnimation('floating', 'Layer1.png', 'Layer1.png');

  ghost3.life = 10;
  
    ghost.scale = 2;
  }
  else
    ghost.scale = 1;
    
}

