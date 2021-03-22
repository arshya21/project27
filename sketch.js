var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	bobObject1= new bobObject(50,50,10,10);
	bobObject2= new bobObject(70,50,10,10);
	bobObject3= new bobObject(100,50,10,10);
	bobObject4= new bobObject(120,50,10,10);
	bobObject1= new bobObject(150,50,10,10);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject.body,baperObject.body.position,{x:85});
    
  	}
}

