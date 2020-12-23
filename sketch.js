var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 80, 15);
  bullet.shapeColor="white"

  thickness=random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor="light gray"
    
  speed = random(55,90);
  weight= random(400,1500);


}

function draw() {
  background("black"); 
 

  bullet.velocityX = speed;

  if(wall.x-bullet.x < (bullet.width + wall.width)/2 ){
    bullet.velocityX=0;
    bullet.weight=0;
    var deformation = 0.5*weight*speed*speed/22500;

    if(deformation < 100){
      wall.shapeColor = color (0, 255, 0);
    }
    
   if(100 < deformation && deformation < 180){
    wall.shapeColor= color (230, 230, 0);
    }
    
    if(deformation > 180){
      wall.shapeColor= color (255, 0, 0);
    }
    
  }

  drawSprites();
}