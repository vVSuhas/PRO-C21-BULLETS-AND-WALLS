var bullet1,bullet2,bullet3,bullet4,wall1,wall2,wall3,wall4;
var speed,speed2,speed3,speed4, weight;
var line1,line2,line3,thickness

function setup() {
  createCanvas(1600,400);
  bullet1=createSprite(50, 60, 20, 20);
  bullet1.shapeColor = "white";
  bullet2=createSprite(50, 150, 20, 20);
  bullet2.shapeColor = "yellow";
  bullet3=createSprite(50, 250, 20, 20);
  bullet3.shapeColor = "red";
  bullet4=createSprite(50, 350, 20, 20);
  bullet4.shapeColor = "lime";

  wall1=createSprite(1500,60,40,60)
  wall1.shapeColor=color(80,80,80);
  wall2=createSprite(1500,150,40,60)
  wall2.shapeColor=color(80,80,80);
  wall3=createSprite(1500,250,40,60)
  wall3.shapeColor=color(80,80,80);
  wall4=createSprite(1500,350,40,60)
  wall4.shapeColor=color(80,80,80);
 
  line1=createSprite(200,100,5000,10)
  line1.shapeColor = "white"
  line2=createSprite(200,200,5000,10)
  line2.shapeColor = "white"
  line3=createSprite(200,300,5000,10)
  line3.shapeColor = "white"

  speed1=random(223,321);
  speed2=random(223,321);
  speed3=random(223,321);
  speed4=random(223,321);
  weight1=random(30,52);
  weight2=random(30,52);
  weight3=random(30,52);
  weight4=random(30,52);
  thickness=random(22,83);
  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;
  bullet4.velocityX = speed4;
  if(wall1.x-bullet1.x < (bullet1.width+wall1.width)/2){
    bullet1.velocityX=0;
    var deformation1=0.5 * weight1 * speed1* speed1/22509;
    if(deformation>180){
      bullet1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet1.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet1.shapeColor=color(0,255,0);
    }
  }
  if(wall2.x-bullet2.x < (bullet2.width+wall2.width)/2){
    bullet2.velocityX=0;
    var deformation1=0.5 * weight2 * speed2* speed2/22509;
    if(deformation>180){
      bullet2.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet2.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet2.shapeColor=color(0,255,0);
    }
  }
  if(wall3.x-bullet3.x < (bullet3.width+wall3.width)/2){
    bullet3.velocityX=0;
    var deformation1=0.5 * weight3 * speed3* speed3/22509;
    if(deformation>180){
      bullet3.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet3.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet3.shapeColor=color(0,255,0);
    }
  }
  if(wall4.x-bullet4.x < (bullet1.width+wall4.width)/2){
    bullet4.velocityX=0;
    var deformation1=0.5 * weight4 * speed4* speed4/22509;
    if(deformation>180){
      bullet4.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet4.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet4.shapeColor=color(0,255,0);
    }
  }
  
}

function draw() {
  background("black");  
  bullet1.collide(wall1)
  bullet2.collide(wall2)
  bullet3.collide(wall3)
  bullet4.collide(wall4)
  drawSprites();
}
