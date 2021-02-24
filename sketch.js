
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var stone1;
var ground1;


function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	

	hammer1 = new Hammer(70,30,50,100);
	stone1 = new Stone(200,90,80,180)
	ground1= new Ground(300,700,1000,10)
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
  
  drawSprites();
  hammer1.display();
  stone1.display();
  ground1.display();

 
}



