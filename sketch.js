var paper, basket;
var ground;
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground=createSprite(400,680,800,20)
paper=new paperball(20,675,10)
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
paper.display();
  
  drawSprites();
 
}



