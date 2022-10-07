const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground
var left
var right
var top
var ball






function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  
  
  ground = new Ground(200,390,400,20)
  right = new Ground(390,200,20,400)
  left = new Ground(10,200,20,400)
  top = new Ground(200,10,400,20)

  
  
   var ball_options ={
    restitution:0.95
   };

   ball = Bodies.circle(200,100,20, ball_options)
   World.add(world,ball)




   rectMode(CENTER)
   ellipseMode(RADIUS)
}

function draw() 
{
  background(51);


  ellipse(ball.position.x, ball.position.y,20)

  ground.show();
  right.show();
  left.show();
  top.show();

  Engine.update(engine);
}
function hforce(){
  Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0})
  }
  
  function vforce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
    }
