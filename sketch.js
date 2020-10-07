var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var particle;
var turn = 0;


var divisionHeight=300;
var score =0;
var gameState = "play";

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
  particles = new Particle(0,0,0);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     /*for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
*/
    
}
 


function draw() {
  background("black");
  textSize(20);
  fill("white");
  text("Score : " + score,50,50);
  
  textSize(15);
  text("500",30,500);
  text("500",750,500);
  text("200",670,500);
  text("200",590,500);
  text("200",110,500);
  text("200",190,500);
  text("100",265,500);
  text("100",345,500);
  text("100",425,500);
  text("100",505,500);


  Engine.update(engine);

  ground.display();
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (particle!=null){
    particle.display();
  
    if(particle.body.position.y > 560){
     
      if(particle.body.position.x > 0 && particle.body.position.x < 80){
        score = score + 500;
        particle = null;
        
        if(turn>=5){
          gameState = "end";       
        } 
      }

     else if(particle.body.position.x > 720 && particle.body.position.x < 800){
        score = score + 500;
        particle = null;
        
        if(turn>=5){
          gameState = "end";       
        } 
      }
      
      else if(particle.body.position.x > 80 && particle.body.position.x < 240){
        score = score + 200;
        particle = null;
      
        if(turn>=5){
          gameState = "end";
      
        } 
      }

      else if(particle.body.position.x > 480 && particle.body.position.x < 720){
        score = score + 200;
        particle = null;
      
        if(turn>=5){
          gameState = "end";
      
        } 
      }
  
      else if(particle.body.position.x > 240 && particle.body.position.x < 480){
        score = score + 100;
        particle = null;
        
        if(turn>=5){
          gameState = "end";
          
        }
      }
      
    }
  } 
  if(gameState === "end"){
  textSize(50);
  text("Game Over", 280, 250);
  }  
}

function mousePressed(){
if(gameState !== "end")
{
  turn++;
 particle =  new Particle(mouseX, 10,15,15);
  }
}