
var movingrect, fixedrect
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="red";

  movingrect=createSprite(300, 200, 50, 50);
  movingrect.shapeColor="pink"
}

function draw() {
  background(255,255,255);  
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;

  if (Math.abs(movingrect.x-fixedrect.x)<=fixedrect.width/2+movingrect.width/2&&
  Math.abs(movingrect.y-fixedrect.y)<=fixedrect.width/2+movingrect.width/2) {
    fixedrect.shapeColor="green";
    movingrect.shapeColor="orange";
  }
  else {
    fixedrect.shapeColor="red"
    movingrect.shapeColor="pink"
  }
  console.log(movingrect.x-fixedrect.x)
  console.log(fixedrect.width/2+movingrect.width/2)
  drawSprites();
}