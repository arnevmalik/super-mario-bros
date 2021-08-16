var mario,marioimg,peelimg,goombaimg,bg,bgimg,reset,resetimg,invisibleGround,stackimg,koopaimg,plantimg,stimg,obgroup,gamestate,go,mp,mpi,cp,d,di,title,titleimg,play,playimg,l,limg,m,mimg,m2,b,bimg,p,pimg,n,nimg,n2,l2,h,himg,o,oimg,t,timg,lu,luimg,win,winimg;
var S=2;
var TITLE=1;
var C1=3;
var C2=4;
var c1a=5;
var C1b=6;
var c2a=7;
var c2b=8;
var end=9;
var win=10;
var gamestate=1
var score

function preload(){
bgimg=loadImage("bg2.png")
marioimg=loadAnimation("mario1.png","mario2.png","mario1.png");
  luimg=loadAnimation("luigi1.png","lugi2.png");
 goombaimg=loadImage("goomba1.png");
  stackimg=loadImage("stack.png");
  plantimg=loadImage("Plant.png");
  peelimg=loadImage("peell.png") ;      
  stimg=loadImage("st.png");
  koopaimg=loadImage("koopa.png");
 go=loadImage("gameover.jpg");
  resetimg=loadImage("re-1.png");
 mpi=loadImage("mp.png");
  cp=loadSound("ff447971-e47d-4355-9985-6e6eb47370f9.mp3");
    d=loadSound("e6d63e6c-93fc-405f-8c06-32c6b464a7d1.mp3");
  di=loadSound("d6e3d4ee-be8c-44d8-bb25-936ca05d00fb.mp3");
  titleimg=loadImage("title.jpg");
  playimg=loadImage("play.png");
   mimg=loadImage("m.png");
   limg=loadImage("l.png");
  bimg=loadImage("bowser.png");
  pimg=loadImage("peach.png");
  nimg=loadImage("next.webp");
   himg=loadImage("home.webp");
  oimg=loadImage("1.png");
 winimg=loadImage("win.jpg");
}

function setup() {
createCanvas(400,400);
title=createSprite(200,150,800,800) ;
  title.addImage(titleimg);
  title.scale=1.6
  
  play = createSprite(200,350,3,3);
  play.addImage(playimg)
  play.scale=0.5
  
  m = createSprite(100,200,3,3);
  m.addImage(mimg)
  m.scale=0.15
  
  l = createSprite(300,200,3,3);
  l.addImage(limg)
  l.scale=0.11
  m2=createSprite(40,350,30,30)
  m2.addImage(mimg)
 m2.scale=0.1;
  b=createSprite(200,350,30,30)
  b.addImage(bimg)
 b.scale=0.45;
  p=createSprite(340,350,30,30)
  p.addImage(pimg)
 p.scale=0.32
   n=createSprite(350,12,30,30)
  n.addImage(nimg)
n.scale=0.05
   l2=createSprite(340,350,30,30)
  l2.addImage(limg)
 l2.scale=0.07
    bg=createSprite(0,10,300,252);
 bg.addImage(bgimg);
  bg.scale=1;
  bg.velocityX=-2;
  bg.x=bg.width/2;
   win=createSprite(200,200,300,252);
 win.addImage(winimg);
  win.scale=0.5;
 
  h=createSprite(20,15,30,30)
  h.addImage(himg)
h.scale=0.065
  n2=createSprite(300,15,30,30)
   n2.addImage(nimg)
n2.scale=0.065
   mario=createSprite(40,325,30,50)
 mario.addAnimation("running",marioimg)
  mario.scale=0.1
  lu=createSprite(40,325,30,50)
 lu.addAnimation("running",luimg)
  lu.scale=0.07
   invisibleGround = createSprite(200,365,400,10);
  invisibleGround.visible = false;
  mario.debug=false;
  mario.setCollider("rectangle",0,0,50,mario.height)
   obgroup=createGroup();
    gmo=createSprite(200,200,400,400);
 gmo.addImage(go);
  gmo.scale=0.5;
  reset = createSprite(200,200,1,1);
  reset.addImage(resetimg)
  reset.scale=0.3
  score=0
}

function draw() {
background("red")
if (gamestate===1){
  title.visible=true;
  play.visible=true;
   l.visible=false;
  m.visible=false; 
  m2.visible=true;
    b.visible=false;
    l2.visible=true;
  p.visible=false;
  n.visible=false;
  h.visible=false;
  n2.visible=false;
  bg.visible=false;
  mario.visible=false;
  lu.visible=false;
  gmo.visible=false;
  reset.visible=false;
  win.visible=false;
  if(mousePressedOver(play)) {
       gamestate=2;
  
    }
}
  if(gamestate===2){
    play.visible=false;
    title.visible=false;
   l.visible=true;
    l2.visible=false;
  m.visible=true;
     m2.visible=false;
    b.visible=false;
    p.visible=false;
    n.visible=false;
    n2.visible=false;
    bg.visible=false;
    h.visible=false;
    mario.visible=false;
    lu.visible=false;
    gmo.visible=false;
    reset.visible=false; win.visible=false;
    if(mousePressedOver(m)) {
       gamestate=4;
  
    }
    if(mousePressedOver(l)) {
       gamestate=3;}
    stroke("black");
textSize(25);
fill("white");
  text ("CHOOSE STORYLINE :-",70,70)
    stroke("black");
textSize(25);
fill("white");
  text ("  normal                           hard",10,350)
     stroke("black");
textSize(20);
fill("blue");
  text ("mario saves peach",10,300)
  stroke("black");
textSize(20);
fill("green");
  text ("luigi to the rescue",230,300)}
  if (gamestate===3){
  title.visible=false;
  play.visible=false;
   l.visible=false;
    l2.visible=true;
  m.visible=false;
    m2.visible=true;
    b.visible=true;
    p.visible=false;
    n.visible=true;
    bg.visible=false;
    h.visible=false;
    n2.visible=false;
    mario.visible=false;
    lu.visible=false;
    gmo.visible=false;
    reset.visible=false; win.visible=false;
    if(mousePressedOver(n)){gamestate=7}
 stroke("black");
textSize(20);
fill("white");
  text ("CHARACTERS -LUIGI TO THE RESCUE",20,50)
   stroke("black");
textSize(11);
fill("blue");
    text("MARIO- Mario is a plumber who lives in the  land of the Mushroom Kingdom.",1,100)
    text("Mario is captured by bowser.",1,120)
    stroke("black");
textSize(11);
fill("green");
    text("LUIGI- younger brother of mario who is shorter than him",1,160)
    text("luigi is trying to rescue mario.",1,180)
    stroke("black");
textSize(11);
fill("yellow");
    text("BOWSER- Bowser is the leader of the turtle-like Koopa race ",1,220)
    text("and has been the archenemy of Mario.he has captured mario  ",1,240)
    
}
if (gamestate===4){
  title.visible=false;
  play.visible=false;
   l.visible=false;
  m.visible=false;
    m2.visible=true;
    b.visible=true;
    l2.visible=false;
    p.visible=true;
    n.visible=true;
  bg.visible=false;
  h.visible=false;
  n2.visible=false;
  mario.visible=false;
  lu.visible=false;
  gmo.visible=false;
  reset.visible=false; win.visible=false;
    if(mousePressedOver(n)){gamestate=5}
 stroke("black");
textSize(20);
fill("white");
  text ("CHARACTERS -MARIO SAVES PEACH",20,50)
   stroke("black");
textSize(11);
fill("blue");
    text("MARIO- Mario is a plumber who lives in the  land of the Mushroom Kingdom.",1,100)
    text("Mario tries to save peach from bowser.",1,120)
    stroke("black");
textSize(11);
fill("pink");
    text("PEACH- She is the princess and ruler of the Mushroom Kingdom, where she resides in her castle along with Toads.",1,160)
    text("peach has been kidnapped by Bowser.",1,180)
    stroke("black");
textSize(11);
fill("yellow");
    text("BOWSER- Bowser is the leader of the turtle-like Koopa race ",1,220)
    text("and has been the archenemy of Mario.His ultimate goals are to  ",1,240)
    text("kidnap Princess Peach,defeat Mario and conquer the Mushroom Kingdom.",1,260)
}
  if (gamestate===5){
  title.visible=false;
  play.visible=false;
   l.visible=false;
  m.visible=false;
    m2.visible=true;
    b.visible=true;
    l2.visible=false;
    p.visible=true;
    n.visible=false;
    bg.visible=false;
    h.visible=true;
    n2.visible=true;mario.visible=false;lu.visible=false;
    gmo.visible=false;
    reset.visible=false; win.visible=false;
      if(mousePressedOver(h)){gamestate=1}
    if(mousePressedOver(n2)){gamestate=6}
 stroke("black");
textSize(20);
fill("white");
  text ("RULES -MARIO SAVES PEACH",20,50)
    stroke("black");
textSize(11);
fill("black");
  text ("level",340,20)
   stroke("black");
textSize(11);
fill("blue");
    text("peach has been kidnapped by bowser who wants to rule the mushroom kingdom",1,100)
    text("Mario tries to save peach from bowser.",1,120)
    stroke("black");
textSize(11);
fill("pink");
    text("in the first level mario has to run and reach the castel of bowser where peach ",1,160)
    text("has been kept.the  level will be cleared by reaching a score of 550.",1,180)
    stroke("black");
textSize(11);
fill("yellow");
    text("no obstacle should be touched or you will be out ",1,220)
    
}
    if (gamestate===6){
  title.visible=false;
  play.visible=false;
   l.visible=false;
  m.visible=false;
    m2.visible=false;
    b.visible=false;
    l2.visible=false;
    p.visible=false;
    n.visible=false;
    bg.visible=true;
    h.visible=false;
    n2.visible=false;
    mario.visible=true;
      lu.visible=false;
      gmo.visible=false;
      reset.visible=false; win.visible=false;
      if(bg.x<0){
    bg.x=bg.width/2}
  
  if(keyDown("space") &&mario.y>300) {
    mario.velocityY=-12
    d.play()}
      spawnobstacles()
      
  if(obgroup.isTouching(mario)){gamestate=9;
                               di.play();}
     
    if(score>0 && score %100 === 0){
       cp.play() 
    }
   
score = score + Math.round(getFrameRate()/60);
   if (score===550){
     gamestate=10;
   }   
   
}
    mario.velocityY=mario.velocityY+0.8
 mario.collide(invisibleGround)
  lu.velocityY=lu.velocityY+0.8
 lu.collide(invisibleGround)
    if (gamestate===7){
  title.visible=false;
  play.visible=false;
   l.visible=false;
  m.visible=false;
    m2.visible=true;
    b.visible=true;
    l2.visible=true;
    p.visible=false;
    n.visible=false;
    bg.visible=false;
    h.visible=true;
    n2.visible=true;mario.visible=false;lu.visible=false;
      gmo.visible=false;
      reset.visible=false; win.visible=false;
      if(mousePressedOver(h)){gamestate=1}
    if(mousePressedOver(n2)){gamestate=8}
 stroke("black");
textSize(20);
fill("white");
  text ("RULES -LUIGI TO THE RESCUE",20,50)
    stroke("black");
textSize(11);
fill("black");
  text ("level",340,20)
   stroke("black");
textSize(11);
fill("blue");
    text("mario has been captured by bowser who wants to rule the mushroom kingdom",1,100)
    text("luigi tries to save mario from bowser.",1,120)
    stroke("black");
textSize(11);
fill("green");
    text("in the  level luigi who has broken his leg has to run and reach the castel of bowser  ",1,160)
    text("where mario has been kept.the first level will be cleared by reaching a score of 750.",1,180)
    stroke("black");
textSize(11);
fill("yellow");
    text("no obstacle should be touched or you will be out ",1,220)
    
  
}
if (gamestate===9) {
  bg.visible=false;
  gmo.visible=true;
  obgroup.destroyEach();
  bg.velocityX=0;
  mario.visible=false;
  reset.visible=true; win.visible=false;
    if(mousePressedOver(reset)) {
       restart();}
} 
  if (gamestate===10) {
  bg.visible=false;
  gmo.visible=false;
  obgroup.destroyEach();
  bg.velocityX=0;
  mario.visible=false;
  reset.visible=true; win.visible=true;
    if(mousePressedOver(reset)) {
       restart();}
} 
      if (gamestate===8){
  title.visible=false;
  play.visible=false;
   l.visible=false;
  m.visible=false;
    m2.visible=false;
    b.visible=false;
    l2.visible=false;
    p.visible=false;
    n.visible=false;
    bg.visible=true;
    h.visible=false;
    n2.visible=false;
    mario.visible=false;
      lu.visible=true;
      gmo.visible=false;
        reset.visible=false; win.visible=false;
      if(bg.x<0){
    bg.x=bg.width/2}
     if(score>0 && score %100 === 0){
       cp.play() 
    }
   
score = score + Math.round(getFrameRate()/60);
         if (score===750){
     gamestate=10;
   }
      
  if(keyDown("space") &&lu.y>300) {
    lu.velocityY=-12
    d.play()}
      spawnobstacles()
      
  if(obgroup.isTouching(lu)){gamestate=9;
                               di.play();}
}
 drawSprites();
 if(gamestate===6) {
   

   text("SCORE ="+score,320,20)
   
   
 }   
   if(gamestate===8) {
   

   text("SCORE ="+score,320,20)
   
   
 }   
}
function spawnobstacles()
{var obstacles;
if(frameCount%80===0)
{obstacles=createSprite(400,325 ,30,50);
 obstacles.velocityX=-5
obstacles.scale=0.1 ;
var rand;
rand=Math.round(random(1,6));
switch(rand){
  case 1: obstacles.addImage(plantimg)
    break;
  case 2:obstacles.addImage(goombaimg)
    break;
  case 3:obstacles.addImage(stackimg)
    break;
  case 4:obstacles.addImage(peelimg)
    break;
  case 5:obstacles.addImage(stimg)
    break;
  case 6:obstacles.addImage(koopaimg)
    break;
  default:break;
}
obgroup.add(obstacles)}
}



function restart(){
  gamestate=2;
  score=0;
  bg.velocityX=-2;
  bg.x=bg.width/2
}
