var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  weight=random(400,1500);
  speed=random(55,190);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor="white";
  car.velocityX=speed;
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor="black";

  
  
}

function draw() {
  background(20,300,200); 
  if (wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * speed * speed * weight/22509;
    if (deformation>180)
    {
      car.shapeColor="red";
    }
    if (deformation<180 && deformation>80)
    {
      car.shapeColor="yellow";
    }
    if (deformation<80)
    {
      car.shapeColor="green";
    }
  }
  
  drawSprites();
}