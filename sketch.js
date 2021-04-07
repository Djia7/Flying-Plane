var spaceback, spacebackImg;
var plane, planeImg;
var pigeon,pigeonImg;
var pigeonGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver

function preload(){
  spacebackImg = loadImage("Space clipart.jpeg");
  planeImg = loadImage("Plane Clipart.png");
  pigeonImg = loadImage("Pigeon Clipart.png");
}

function setup() {

  spaceback = createSprite(300, 300,windowWidth,windowHeight);
  spaceback.addImage(spacebackImg);
  spaceback.velocityY = 3;
  
    plane = createSprite(300,100);
  plane.addImage(planeImg);
  plane.scale = 0.2;
  plane.velocityY = 2;
  plane.debug = true;
  plane.depth = 5;

  
  
  pigeonGroup = new Group();
}

function draw() {
 createCanvas(600,600);
  if(gameState === PLAY){
    plane.visible = true;
    pigeonGroup.visible = true;

    if(spaceback.y > 300){
      spaceback.y = 250;
    }
  
    if(keyDown("Space")){
      plane.velocityY = -3;
    }
  
    if(keyDown("left_arrow")){
      plane.velocityX = -3;
    }
  
    if(keyDown("right_arrow")){
      plane.velocityX = 3;
    }
    plane.velocityY = plane.velocityY + 0.3;
    pigeonSpawn();
    console.log("This is PLAY");
      //touching();

      if(plane.y > 600){
        gameState = END;
      }

      if(plane.isTouching(pigeonGroup)){
        gameState = END;
        console.log("This is touching");
      }
  }
  if(gameState === END){
    console.log("This is end");
    spaceback.velocityY = 0;
    plane.velocityY = 0;
    plane.velocityX = 0;
    plane.destroy();

    pigeonGroup.setVelocityYEach = 0;
    pigeonGroup.destroyEach();

    if(keyDown("R")){
      gameState = PLAY;
    }
  }
  drawSprites();
}

function pigeonSpawn(){
  if(frameCount % 100 === 0){
    pigeon = createSprite(Math.round(random(50,550)), -10);
    pigeon.addImage(pigeonImg);
    pigeon.scale = 0.3
    pigeon.velocityY = 3;
    pigeon.depth = 3;
    pigeon.debug = true;
    pigeon.lifetime = 200;
  }
}

//function touching(player,object){
  //if(abs(object.x - player.x) <= object.width/2 + player.width/2 && abs(object.y - player.y) <=height/2 + player.height/2){
    //gameState = END;
  //}
  //}