var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);

 fixedrect = createSprite(400, 200, 50, 50);
 fixedrect.shapeColor = "red";
 movingrect = createSprite(200, 400, 50, 25);
 movingrect.shapeColor = "red";
}

function draw() {
  background(0);  

  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;

  console.log(movingrect.y-fixedrect.y);

  if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
    movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2 && 
    fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2 ) {
    fixedrect.shapeColor = "blue"; 
    movingrect.shapeColor = "blue";
 } else {
    fixedrect.shapeColor = "red"; 
    movingrect.shapeColor = "red";
 }
  drawSprites();
}