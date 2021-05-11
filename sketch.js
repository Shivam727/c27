
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//grounds
	ground = new Ground(400,100,500,20)
	
     //bobs
	startBobPositionX=width/2;
	startBobPositionY=height/4+200;
	bobDiameter=20;

    
    bob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
	bob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter)
	bob3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter)
	bob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter)
	bob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)

	//rope
	chain = new Chain(bob1.body,ground.body,-bobDiameter*2, 0);
	chain2 = new Chain(bob2.body,ground.body,-bobDiameter*1, 0);
	chain3 = new Chain(bob3.body,ground.body,0, 0);
	chain4 = new Chain(bob4.body,ground.body,bobDiameter*1, 0);
	chain5 = new Chain(bob5.body,ground.body,bobDiameter*2, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);

ground.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
chain.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

  drawSprites();
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-100});

	}
}




