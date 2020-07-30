
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbl,dustbr,dustbb ;
var dustbimg

 function preload(){
dustbimg = loadImage('dustbingreen.png');
 }


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	
	

   ground = new Ground(600,660,1200,20);
   
dustbb = createSprite(950,570,140,140);
dustbb.addImage(dustbimg);
dustbb.scale = 0.55;
dustbl = new Dustbin(890,580,20,145);
dustbr = new Dustbin(1010,580,20,145);

paper = new Paper(100,200,50);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();
  ground.display();
  dustbl.display();
  dustbr.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-120});
	}
	

}
