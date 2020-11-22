var ghost,ghostImg;
var doors,doorImg;
var doorGroup;
var climbers,climbersImg;
var climberGroup;
var tower,towerImg;
var invisibleblock;
var invGroup;
var gameState = "play";
var spookySound;




function preload(){
  
  ghostImg = loadImage("ghost-standing.png");
 // ghostImg.loadImage("ghost-jumping.png");
  
  doorsImg = loadImage("door.png");
  
  climbersImg= loadImage("climber.png");
  
  towerImg = loadImage("tower.png");
  
  spookySound = loadSound("spooky.wav");
  
  
  
}

function setup(){
  createCanvas(600,600);
  
  spookySound.loop();
  
  doorGroup = new Group();
  climberGroup = new Group();
  invGroup = new Group();
  
  tower = createSprite(300,300);
  tower.addImage("backGround",towerImg);
  
  tower.velocityY = 2;
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage("adding ghost",ghostImg);
  ghost.scale= 0.3;
  

  
  
}

function draw(){
  
  if(gameState ==="play"){
  spawndoors();
  
  if(tower.y >400){
    tower.y = 300;
     }
  
  if(keyDown("space")){
    ghost.velocityY = -2;
  }
  
  if(keyDown("right_arrow")){
    ghost.x = ghost.x+3;
    
  }
  
  if(keyDown("left_arrow")){
    ghost.x = ghost.x-3;
    
  }
  
  ghost.velocityY = ghost.velocityY +0.8;
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY = 0;
    
  }
  if(ghost.y>600 || ghost.isTouching(invGroup)){
    ghost.destroy();
    gameState = "end";
    }
    
    
    
  drawSprites();
}
  if(gameState==="end"){
    fill("blue");
    textSize(30);
    text("GAME OVER",230,250);
  }
}



function spawndoors(){
  
 if(frameCount%200===0){
   doors = createSprite(200,-50);
   doors.addImage("door",doorsImg);
   doors.velocityY = 5;
   doors.lifetime =  200;
   doors.x = Math.round(random(120,400));
   
   doorGroup.add(doors);
   
   climbers = createSprite(200,10);
   climbers.addImage("adding doors",climbersImg);
   
   climbers.x = doors .x;
   climbers.velocityY = 5;
   climbers.lifetime = 200;
   
   climberGroup.add(climbers);
   
   ghost.depth = doors.depth;
   ghost.depth+=1;   
   
   invisibleblock = createSprite(200,15);
   invisibleblock.width = climbers.width;
   invisibleblock.heigth = 2; 
   invisibleblock.x = doors.x;
   invisibleblock.velocityY = 5;
   invisibleblock.lifetime = 200; 
   invisibleblock.visible = false; 
   invGroup.add(invisibleblock); 
   
 } 
  
  
}


