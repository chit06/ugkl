
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=createSprite(400,900,900,20)


	Engine.run(engine);
  
log1=createSprite(700,800,10,130)
log2=createSprite(500,800,10,130)
log3= createSprite(600,height-25,200,10)
paperObject= createSprite(height,width,radius)
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function kepressed(){
	if(keyCode===UP_ARROW)
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
}
