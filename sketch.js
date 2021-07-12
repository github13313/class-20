
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball, ball2;
var ground;
var platfrom;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01

    
  }

  var ball2_options = {
    restitution: 0.85,
    frictionAir:0.2
  }

  var platfrom_options = {
   isStatic: true

  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  
  ball2 = Bodies.circle(200,10,20,ball2_options);
  World.add(world,ball2);30

  platfrom = Bodies.rectangle(150,200,200,50,platfrom_options);
  World.add(world,platfrom);

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  rect(platfrom.position.x,platfrom.position.y,200,50)
 
}

