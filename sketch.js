var movingRect ;
var fixedRect ;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 100);
  movingRect = createSprite(100,100,60,35);

 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";

 fixedRect.debug = true;
 movingRect.debug = true;
 

}


function draw() {
  background(255,255,255);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2  &&  
    fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2  &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2  &&  
    fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2 )
 {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
 }
 else
 {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
  drawSprites();
}