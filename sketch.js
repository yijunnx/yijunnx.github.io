

//Audio
let backgroundMusic;
let mySoundA1;
let mySoundA2;
let mySoundA3;
let mySoundA4;
let mySoundB1;
let mySoundB2;
let mySoundB3;
let mySoundB4;
let mySoundC1;
let mySoundC2;
let mySoundC3;
let mySoundC4;

/* rotation effect
var aX;
var aY;
var aR;
*/

var inc = 0
var played = [false, false, false, false, false, false, false, false, false, false, false,false,];

var ghost, circle;
var direction = 90;

//______________________________________________________________________

// [ C2 ] RANDOM SPAWN + Gravity
// Accessing and deleting sprites
// click to create new sprites

var GRAVITY = 0.05;

//______________________________________________________________________


let started = false;
 
//______________________________________________________________________

var br = 255;
var bg = 255;
var bb = 255;
//______________________________________________________________________

var credits = false;

var buttonA1


function preload(){

  //Audio
  soundFormats('mp3', 'ogg');

  mySoundA1 = loadSound('Isophya_1lowvol.mp3');
  mySoundA2 = loadSound('Aphrodes biconictus_1lowvol.mp3');
  mySoundA3 = loadSound('Myopsalta_3.mp3');
  mySoundA4 = loadSound('Isophya_2.mp3');

  mySoundB1 = loadSound('Arphia pseudonetanaCrepitation2low.mp3');
  mySoundB2 = loadSound('Myopsalta_lowvol.mp3');
  mySoundB3 = loadSound('Arphia pseudonetanaCrepitation.mp3');
  mySoundB4 = loadSound('Idiocerus fulgidus lowvol.mp3');

  mySoundC1 = loadSound('Aphrophora alni_lowvol.mp3');
  mySoundC2 = loadSound('Stauroderus_scalaris_.mp3');
  mySoundC3 = loadSound('Aphrodes biconictus_2lowvol.mp3');
  mySoundC4 = loadSound('Isophya_modestior.mp3');

  backgroundMusic = loadSound('pop.mp3');

  //Img

  loadImage("Layer1.png");

  // [ A1 ]
  loadImage("Butter4Yell1.png");
  loadImage("Butter4Yell2.png");
  loadImage("Butter4Yell3.png");
  loadImage("Butter4Yell4.png");
  loadImage("Butter4Yell5.png");
  loadImage("Butter4Yell6.png");

  // [ A2 ]
  loadImage("Layer-1.png");

  loadImage("Layer-2.png");
  loadImage("Layer-3.png");
  loadImage("Layer-4.png");
  loadImage("Layer-5.png");
  loadImage("Layer-6.png");

  // [ A3 ]
  loadImage('unknown3_1.png');
  loadImage('unknown3_2.png');
  loadImage('unknown3_3.png');
  loadImage('unknown3_4.png');

  // [ A4 ]
  /*
  loadImage('Butter3Blue1.png');
  loadImage('Butter3Blue2.png');
  loadImage('Butter3Blue3.png');
  loadImage('Butter3Blue4.png');
  loadImage('Butter3Blue5.png');
  loadImage('Butter3Blue6.png');
*/


  // [ B1 ]
  loadImage('ant1.png');
  loadImage('ant2.png');

  // [ B2 ]
  loadImage("unknown_1.png");
  loadImage("unknown_2.png");
  loadImage("unknown_3.png");
  loadImage("unknown_4.png");
  loadImage("unknown_5.png");
  loadImage("unknown_6.png");

  // [ B3 ]
  loadImage('GREEN-1.png');
  loadImage('GREEN-2.png');
  loadImage('GREEN-3.png');
  loadImage('GREEN-4.png');
  loadImage('GREEN-5.png');
  loadImage('GREEN-6.png');

  // [ C1 ]
  loadImage('Callimetopus1.png');
  loadImage('Callimetopus2.png');
  loadImage('Callimetopus3.png');
  loadImage('Callimetopus4.png');

  // [ C2 ]
  loadImage("unknown4_1.png");

  // [ C3 ]
  loadImage("Cyclomatus_bicolor1.png");
  loadImage("Cyclomatus_bicolor2.png");
  loadImage("Cyclomatus_bicolor3.png");
  loadImage("Cyclomatus_bicolor4.png");


}



function setup() { 
  createCanvas(1366, 768);
  backgroundMusic.play();

 aX = 0;
 aY = 0;
 aR = 0;



 
//______________________________________________________________________

//Create Random Shit on Screen
//Sprite Groups
//different groups are drawn in a diffent order and accessed as arrays

/*

  insect1 = new Group();
  insect2 = new Group();
  for(var i = 0; i<10; i++) {
    var newInsect1 = createSprite(random(0, width), random(0, height));
    newInsect1.addAnimation('floating', 'Layer1.png', 'Layer1.png');
    insect1.add(newInsect1);
  }

  for(var j = 0; j<10; j++) {
    var newInsect2 = createSprite(random(0, width), random(0, height));
    newInsect2.addAnimation('floating', 'Layer1.png', 'Layer1.png');
    //set a rotation speed
    newInsect2.rotationSpeed = -2;
    //another way to add a sprite to a group
    newInsect2.addToGroup(insect2);
  }

*/


//______________________________________________________________________

//SPINNING ROUND AND ROUND
//Changing the sprites' animations

/*
  round = createSprite(400, 150, 50, 100);
  round.addAnimation('spinning', 'Layer1.png', 'Layer1.png');

  round1 = createSprite(200, 150, 50, 100);
  round1.addAnimation('spinning', 'Layer1.png', 'Layer1.png');
  
  round2 = createSprite(600, 150, 50, 100);
  round2.addAnimation('spinning', 'Layer1.png', 'Layer1.png');
*/

//______________________________________________________________________

}


function draw() { 
  if(backgroundMusic.isPlaying() == true){
    background(br, bg, bb);

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

//______________________________________________________________________

// [ A3 ] RANDOM SPAWN + Gravity
// Accessing and deleting sprites
// click to create new sprites

for(var d=0; d<allSprites.length; d++){
    var mySprite = allSprites[d];

    //adding a speed at 90 degrees (down)
    //equivalent to: mySprite.velocity.y += GRAVITY;
    mySprite.addSpeed(GRAVITY, 90);

    //even if they are out of the canvas, sprites keep getting updated
    //consuming precious memory
    //use Sprite.remove() to remove a sprite from the sketch
    if(mySprite.position.y > height + 100)
      mySprite.remove();
  }

//______________________________________________________________________

 //Create Random Shit on Screen
 //Sprite Groups
 //different groups are drawn in a diffent order and accessed as arrays

 /*
  for(var i = 0; i<insect1.length; i++) {
    var h = insect1[i];
    //moving all the ghosts y following a sin function (sinusoid)
    h.position.y += sin(frameCount/10);
  }
*/

//______________________________________________________________________

// [ C2 ] RANDOM SPAWN + Gravity
// Accessing and deleting sprites
// click to create new sprites

for(var n=0; n<allSprites.length; n++){
    var mySpriteC2 = allSprites[n];

    //adding a speed at 90 degrees (down)
    //equivalent to: mySprite.velocity.y += GRAVITY;
    mySpriteC2.addSpeed(GRAVITY, 90);

    //even if they are out of the canvas, sprites keep getting updated
    //consuming precious memory
    //use Sprite.remove() to remove a sprite from the sketch
    if(mySpriteC2.position.y > height + 100)
      mySpriteC2.remove();
  }
//______________________________________________________________________

  drawSprites();

}else{
  background(br, bg, bb);
  if(played[0] == true){
    text("A1 Isophya", width/2, 140);
    }

  if(played[1] == true){
    text("A2 Aphrodes biconictus", width/2, 160);
  }
   if(played[2] == true){
    text("A3 Myopsalta", width/2, 180);
  }
   if(played[3] == true){
    text("A4 Isophya", width/2, 200);
  }
   if(played[4] == true){
    text("B1 Arphia pseudonetanaCrepitation", width/2, 220);
  }
   if(played[5] == true){
    text("B2 Myopsalta", width/2, 240);
  }
   if(played[6] == true){
    text("B3 Arphia pseudonetanaCrepitation", width/2, 260);
  }
   if(played[7] == true){
    text("B4 Idiocerus fulgidus", width/2, 280);
  }
   if(played[8] == true){
    text("C1 Aphrophora alni", width/2, 300);
  }
   if(played[9] == true){
    text("C2 Stauroderus scalaris", width/2, 320);
  }
   if(played[10] == true){
    text("C3 Aphrodes biconictus", width/2, 340);
  }
   if(played[11] == true){
    text("C4 Isophya_modestior", width/2, 360);
  }

}

}
    

function mouseMoved(){

if(backgroundMusic.isPlaying() == true){

// [ A1 ] ZOOM ZOOM

//Changing the sprites' animations
//position and transformations: rotation, scale, mirror
//move the mouse and click
//press and hold the up and down keys

  if(mouseX < 341 && mouseX > 0 && mouseY < 256 && mouseY > 0) {

      //AUDIO
      if(mySoundA1.isPlaying() == false){
        mySoundA1.play();
        played[0] = true;

          //BACKGROUND
          br = random(0, 225);
          bg = random(0, 225);
          bb = random(0, 225);

        //EFFECT

        /* setup */
        /* setup */

        var a = createSprite(random(width), random(height), 30, 30);
        a.addAnimation('floating', 'Butter4Yell1.png', 'Butter4Yell2.png', 'Butter4Yell3.png', 'Butter4Yell4.png', 'Butter4Yell5.png', 'Butter4Yell6.png');

        
        var aa = createSprite(random(width), random(height), 30, 30);
        aa.addAnimation('floating', 'Butter4Yell1.png', 'Butter4Yell2.png', 'Butter4Yell3.png', 'Butter4Yell4.png', 'Butter4Yell5.png', 'Butter4Yell6.png');
        
        var aaa = createSprite(random(width), random(height), 30, 30);
        aaa.addAnimation('floating', 'Butter4Yell1.png', 'Butter4Yell2.png', 'Butter4Yell3.png', 'Butter4Yell4.png', 'Butter4Yell5.png', 'Butter4Yell6.png');
        
        var aaaa = createSprite(random(width), random(height), 30, 30);
        aaaa.addAnimation('floating', 'Butter4Yell1.png', 'Butter4Yell2.png', 'Butter4Yell3.png', 'Butter4Yell4.png', 'Butter4Yell5.png', 'Butter4Yell6.png');
        
        var aaaaa = createSprite(random(width), random(height), 30, 30);
        aaaaa.addAnimation('floating', 'Butter4Yell1.png', 'Butter4Yell2.png', 'Butter4Yell3.png', 'Butter4Yell4.png', 'Butter4Yell5.png', 'Butter4Yell6.png');

        //set a self destruction timer (life)
        a.life = 40;
        aa.life = 40;
        aaa.life = 40;
        aaaa.life = 40;
        aaaaa.life = 40;
      }
  }


//______________________________________________________________________

// [ A2 ] DRAW SPLAT
//Sprite creation
//Click to create a new sprite with random speed

  if(mouseX < 682 && mouseX > 341 && mouseY < 256 && mouseY > 0) {

    //AUDIO
    if(mySoundA2.isPlaying() == false){
      mySoundA2.play();
      played[1] = true;

          //BACKGROUND
          br = random(0, 225);
          bg = random(0, 225);
          bb = random(0, 225);

      //EFFECT


      var b = createSprite(random(width), random(height), 30, 30);
      b.addAnimation('normal', 'Layer-1.png', 'Layer-2.png', 'Layer-3.png', 'Layer-4.png', 'Layer-5.png');
      var bb = createSprite(random(width), random(height), 30, 30);
      bb.addAnimation('normal', 'Layer-1.png', 'Layer-2.png', 'Layer-3.png', 'Layer-4.png', 'Layer-5.png');
      var bbb = createSprite(random(width), random(height), 30, 30);
      bbb.addAnimation('normal', 'Layer-1.png', 'Layer-2.png', 'Layer-3.png', 'Layer-4.png', 'Layer-5.png');

      b.velocity.x = random(-5, 5);
      b.velocity.y = random(-5, 5);
      bb.velocity.x = random(-5, 5);
      bb.velocity.y = random(-5, 5);
      bbb.velocity.x = random(-5, 5);
      bbb.velocity.y = random(-5, 5);
      
      //set a self destruction timer (life)
      b.life = 120;
      bb.life = 120;
      bbb.life = 120;
    }
  }




//______________________________________________________________________

// [ A3 ] RANDOM SPAWN + Gravity 掉下
//Accessing and deleting sprites
//click to create new sprites

  if(mouseX < 1023 && mouseX > 682 && mouseY < 256 && mouseY > 0) {

    //AUDIO
    if(mySoundA3.isPlaying() == false){
        mySoundA3.play();
        played[2] = true;

        br = random(0, 225);
        bg = random(0, 225);
        bb = random(0, 225);

        //EFFECT
        //I create a sprite at mouse position
        var newSprite = createSprite(random(width),0);

        //assign an animation
        newSprite.addAnimation('normal', 'unknown3_1.png','unknown3_2.png','unknown3_3.png','unknown3_4.png');

        //and set it to a random frame
        newSprite.animation.stop();
        var c = round(random(0, newSprite.animation.getLastFrame()));
        newSprite.animation.changeFrame(c);
      }
  }


//______________________________________________________________________
 
// [ A4 ] DRAW SPLAT RANDOM (multi)
//Sprite creation
//Click to create a new sprite with random speed

  if(mouseX < 1364 && mouseX > 1023 && mouseY < 256 && mouseY > 0) {

      //AUDIO
      if(mySoundA4.isPlaying() == false){
         mySoundA4.play();
         played[3] = true;

         //BACKGROUND
          br = random(0, 225);
          bg = random(0, 225);
          bb = random(0, 225);

        //EFFECT
        var f = createSprite(random(width), random(height), 30, 30);
        f.addAnimation('normal', 'Layer1.png', 'Layer1.png', 'Layer1.png', 'Layer1.png', 'Layer1.png');
        //if no image or animation is associated it will be a rectangle of the specified size
        //and a random color
        
        var ff = createSprite(random(width), random(height), 30, 30);
        ff.addAnimation('normal','Layer1.png', 'Layer1.png', 'Layer1.png', 'Layer1.png', 'Layer1.png');

        f.animation.stop();
        var e = round(random(0, f.animation.getLastFrame()));
        f.animation.changeFrame(e);
        
        ff.animation.stop();
        var ee = round(random(0, ff.animation.getLastFrame()));
        ff.animation.changeFrame(e);
        //set a self destruction timer (life)
        f.life = 60;
        ff.life = 60;
      }
  }


//______________________________________________________________________

// [ B1 ] walking antsss
//DRAW SPLAT moving across screen
//Sprite creation
//Click to create a new sprite with random speed

  if(mouseX < 341 && mouseX > 0 && mouseY < 512 && mouseY > 256) {

    //AUDIO
    if(mySoundB1.isPlaying() == false){
       mySoundB1.play();
       played[4] = true;

       //BACKGROUND
          br = random(0, 225);
          bg = random(0, 225);
          bb = random(0, 225);


      //EFFECT
      //create a sprite at the mouse position and store it in a temporary variable
      var g = createSprite(width<100, random(height), 30, 30);
      g.addAnimation('normal', 'ant1.png', 'ant2.png');
      g.setSpeed(10)

      g.life = 60;
    }
  }


//______________________________________________________________________


// [ B2 ] DRAW SPLAT RANDOM + Moving
//Sprite creation
//Click to create a new sprite with random speed

  if(mouseX < 682 && mouseX > 341 && mouseY < 512 && mouseY > 256) {

    //AUDIO
    if(mySoundB2.isPlaying() == false){
       mySoundB2.play();
       played[5] = true;

       //BACKGROUND
          br = random(0, 225);
          bg = random(0, 225);
          bb = random(0, 225);

      //EFFECT
      var h = createSprite(random(width), random(height), 30, 30);
      h.addAnimation('normal', 'unknown_1.png', 'unknown_2.png', 'unknown_3.png', 'unknown_4.png', 'unknown_5.png', 'unknown_6.png');
      //if no image or animation is associated it will be a rectancle of the specified size
      //and a random color
      
      //now you can use the variable to set properties
      //e.g. a random velocity on the x and y coordinates
      h.velocity.x = random(-2, 2);
      h.velocity.y = random(-2, 2);
      
      //set a self destruction timer (life)
      h.life = 120;
    }
  }


//______________________________________________________________________

// Create Random Shit on Screen
//Sprite Groups
//different groups are drawn in a diffent order and accessed as arrays

/*
  if(mouseX < 1200 && mouseX > 900 && mouseY < 600 && mouseY > 300) {

  //AUDIO
   mySoundA.play();


  //EFFECT
    //the rotation is not part of the spinning animation

  drawSprites(insect1);
  drawSprites(insect2);
}

*/

//______________________________________________________________________

// [ B3 ] ZOOM ZOOM

  if(mouseX < 1023 && mouseX > 682 && mouseY < 512 && mouseY > 256) {

    //AUDIO
    if(mySoundB3.isPlaying() == false){
      mySoundB3.play();
      played[6] = true;

      //BACKGROUND
          br = random(0, 225);
          bg = random(0, 225);
          bb = random(0, 225);

        //EFFECT

        /* setup */

        /* setup */

        //create a sprite at the mouse position and store it in a temporary variable
        var i = createSprite(random(width), random(height), 30, 30);
        i.addAnimation('floating', 'GREEN-1.png', 'GREEN-2.png', 'GREEN-3.png', 'GREEN-4.png', 'GREEN-5.png', 'GREEN-6.png');
        
        var ii = createSprite(random(width), random(height), height/2-50, 30, 30);
        ii.addAnimation('floating', 'GREEN-1.png', 'GREEN-2.png', 'GREEN-3.png', 'GREEN-4.png', 'GREEN-5.png', 'GREEN-6.png');
        
        var iii = createSprite(random(width), random(height), 30, 30);
        iii.addAnimation('floating', 'GREEN-1.png', 'GREEN-2.png', 'GREEN-3.png', 'GREEN-4.png', 'GREEN-5.png', 'GREEN-6.png');
   
        /*var iiii = createSprite(random(width), random(height), 30, 30);
        iiii.addAnimation('floating', 'GREEN-1.png', 'GREEN-2.png', 'GREEN-3.png', 'GREEN-4.png', 'GREEN-5.png', 'GREEN-6.png');
          
        var iiiii = createSprite(random(width), random(height), 30, 30);
        iiiii.addAnimation('floating', 'GREEN-1.png', 'GREEN-2.png', 'GREEN-3.png', 'GREEN-4.png', 'GREEN-5.png', 'GREEN-6.png');

        */
        i.life = 80;
        ii.life = 80;
        iii.life = 80;
      
        //iiii.life = 80;
        //iiiii.life = 80;
        

    }
  }


//______________________________________________________________________

// [ B4 ] DRAW SPLAT
//Sprite creation
//Click to create a new sprite with random speed

  if(mouseX < 1364 && mouseX > 1023 && mouseY < 512 && mouseY > 256) {

    //AUDIO
    if(mySoundB4.isPlaying() == false){
      mySoundB4.play();
      played[7] = true;

      //BACKGROUND
          br = random(0, 225);
          bg = random(0, 225);
          bb = random(0, 225);

      //EFFECT
      var j = createSprite(random(width), random(height), 30, 30);
      j.addAnimation('normal', 'Layer1.png', 'Layer1.png');
      j.velocity.x = random(-5, 5);
      j.velocity.y = random(-5, 5);
      
      //set a self destruction timer (life)
      j.life = 40;

    }
  }

//______________________________________________________________________

// [ C1 ] DRAW SPLAT RANDOM (multi)
//Sprite creation
//Click to create a new sprite with random speed


  if(mouseX < 341 && mouseX > 0 && mouseY < 768 && mouseY > 512) {

    //AUDIO
    if(mySoundC1.isPlaying() == false){
       mySoundC1.play();
       played[8] = true;

       //BACKGROUND
          br = random(0, 225);
          bg = random(0, 225);
          bb = random(0, 225);

      //EFFECT
      var k = createSprite(random(width), random(height), 30, 30);
      k.addAnimation('normal', 'Callimetopus1.png', 'Callimetopus2.png', 'Callimetopus3.png', 'Callimetopus4.png');
      
      var kk = createSprite(random(width), random(height), 30, 30);
      kk.addAnimation('normal',  'Callimetopus1.png', 'Callimetopus2.png', 'Callimetopus3.png', 'Callimetopus4.png');

      var kkk = createSprite(random(width), random(height), 30, 30);
      kkk.addAnimation('normal',  'Callimetopus1.png', 'Callimetopus2.png', 'Callimetopus3.png', 'Callimetopus4.png');

      var kkkk = createSprite(random(width), random(height), 30, 30);
      kkkk.addAnimation('normal',  'Callimetopus1.png', 'Callimetopus2.png', 'Callimetopus3.png', 'Callimetopus4.png');

      var kkkkk = createSprite(random(width), random(height), 30, 30);
      kkkkk.addAnimation('normal',  'Callimetopus1.png', 'Callimetopus2.png', 'Callimetopus3.png', 'Callimetopus4.png');


      var kkkkkk = createSprite(random(width), random(height), 30, 30);
      kkkkkk.addAnimation('normal',  'Callimetopus1.png', 'Callimetopus2.png', 'Callimetopus3.png', 'Callimetopus4.png');
      
      k.animation.stop();
      var l = round(random(0, k.animation.getLastFrame()));
      k.animation.changeFrame(l);
      
      kk.animation.stop();
      var ll = round(random(0, kk.animation.getLastFrame()));
      kk.animation.changeFrame(l);

      kkk.animation.stop();
      var lll = round(random(0, kkk.animation.getLastFrame()));
      kkk.animation.changeFrame(l);

      kkkk.animation.stop();
      var llll = round(random(0, kkkk.animation.getLastFrame()));
      kkkk.animation.changeFrame(l);

      kkkkk.animation.stop();
      var lllll = round(random(0, kkkkk.animation.getLastFrame()));
      kkkkk.animation.changeFrame(l);

      kkkkkk.animation.stop();
      var llllll = round(random(0, kkkkkk.animation.getLastFrame()));
      kkkkkk.animation.changeFrame(l);
      //set a self destruction timer (life)
      k.life = 60;
      kk.life = 60;
      kkk.life = 60;
      kkkk.life = 60;
      kkkkk.life = 60;
      kkkkkk.life = 60;

    }
  }


//______________________________________________________________________

// [ C2 ] RANDOM SPAWN + Gravity 掉下
//Accessing and deleting sprites
//click to create new sprites

  if(mouseX < 682 && mouseX > 341 && mouseY < 768 && mouseY > 512) {

      //AUDIO
      if(mySoundC2.isPlaying() == false){
         mySoundC2.play();
         played[9] = true;

         //BACKGROUND
          br = random(0, 225);
          bg = random(0, 225);
          bb = random(0, 225);


        //EFFECT
        //I create a sprite at mouse position *********** [ createSpriteC2? ] **********
        var GRAVITY = 0.05;
        var newSpriteC2 = createSprite(random(width),0);

        //assign an animation
        newSpriteC2.addAnimation('normal', 'unknown4_1.png');

        //and set it to a random frame
        newSpriteC2.animation.stop();
        var m = round(random(0, newSpriteC2.animation.getLastFrame()));
        newSpriteC2.animation.changeFrame(m); 

      }
  }



//______________________________________________________________________

// [ C3 ] walking antsss

//DRAW SPLAT moving across screen (reverse)
//Sprite creation
//Click to create a new sprite with random speed


  if(mouseX < 1023 && mouseX > 682 && mouseY < 768 && mouseY > 512) {

    //AUDIO
    if(mySoundC3.isPlaying() == false){
       mySoundC3.play();
       played[10] = true;

       //BACKGROUND
          br = random(0, 225);
          bg = random(0, 225);
          bb = random(0, 225);


      //EFFECT
      var o = createSprite(1364, random(height), 30, 30);
      o.addAnimation('normal', 'Cyclomatus_bicolor1.png', 'Cyclomatus_bicolor2.png', 'Cyclomatus_bicolor3.png', 'Cyclomatus_bicolor4.png');
      o.setSpeed(5,180)

      o.life = 120;
    }
  }


//______________________________________________________________________

// [ C4 ] DRAW SPLAT RANDOM + Moving 为什么不工作为什么为什么为什么？？？
//Sprite creation
//Click to create a new sprite with random speed

  if(mouseX < 1364 && mouseX > 1023 && mouseY < 768 && mouseY > 512) {

    //AUDIO
    if(mySoundC4.isPlaying() == false){
       mySoundC4.play();
       played[11] = true;

       //BACKGROUND
          br = random(0, 225);
          bg = random(0, 225);
          bb = random(0, 225);

      //EFFECT
      var q = createSprit(random(width), random(height), 30, 30);
      q.addAnimation('normal', 'Layer1.png', 'Layer1.png');
      //if no image or animation is associated it will be a rectangle of the specified size
      //and a random color
      
      //now you can use the variable to set properties
      //e.g. a random velocity on the x and y coordinates
      q.velocity.x = random(-30, 30);
      q.velocity.y = random(-30, 30);
      
      //set a self destruction timer (life)
      q.life = 40;

    }
  }
//______________________________________________________________________


}else{

}

}
