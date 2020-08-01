
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new Roof(200,350,10,200)
	bobObject1=new bob(400,350,10)
	bobObject2=new bob(400,330,10)
	bobObject3=new bob(400,370,10)
	bobObject4=new bob(400,310,10)
	bobObject1=new bob(400,390,10)
rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



