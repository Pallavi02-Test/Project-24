
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var d1,d2,d3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300,500);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  var options = {
    isStatic : true
  }
 

  ground = Bodies.rectangle(550,475,1500,10,options);
  World.add(world,ground);
  
    paper = new Paper(100,100,20);
    
    d1 = new Dustbin(975,425,20,90);
    d2 = new Dustbin(1055,460,140,20);
    d3 = new Dustbin(1125,425,20,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper.display();

  d1.display();
  d2.display();
  d3.display();
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,1500,10);



  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
  }
}

