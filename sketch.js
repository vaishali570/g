
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,rubber,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

Engine.run(engine);

hammer=new Hammer(300,200)
rubber=new Rubber(600,500,20)
stone=new Stone(400,300,50,70)
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display();
  rubber.display();
  stone.display();
  
  drawSprites();
 
}



