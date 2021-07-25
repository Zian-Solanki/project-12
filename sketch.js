var garden;
var rabbit;
var gardenImg;
var rabbitImg;
var apple;
var appleimg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg=loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
  if (rabbit.x>350){
    rabbit.x=378
  }
  if (rabbit.x<50){
    rabbit.x=20
  }
  applespawn()
  drawSprites();
}
function applespawn(){
  if (frameCount%80===0){
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleimg)
  apple.scale=0.07
  apple.velocityY=12
  }
}