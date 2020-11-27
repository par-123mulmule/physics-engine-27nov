const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var ground_options= {
    isStatic:true
  }
  ground=Bodies.rectangle(200,395,400,20,ground_options);
  World.add(world,ground);
  console.log(ground);
  var ball_options={
    restitution:1.0,
    density:1.3
  }
  ball=Bodies.circle(150,100,10,ball_options);
  World.add(world,ball);
 
  
}

function draw() {
  background("lightblue"); 
  Engine.update(engine); 
fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,15);
  fill("blue")
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);

}
