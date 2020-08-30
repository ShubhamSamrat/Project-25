
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	bin = loadImage("bin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,670,800,20);
	//Drawing DUSTBIN
	binLeft = new Bin(600,585,20,150);
	binRight = new Bin(750,585,20,150);
	binBottom = new Bin(675,650,150,20);

	

	//Draw Paper
	paper = new Paper(100,635);
	


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  Engine.update(engine);
  imageMode(CENTER);

  


  ground.display();
  binBottom.display();
  binLeft.display();
  binRight.display();
  paper.display(); 

  console.log(paper.body.position);

  image(bin,675,588,185,160);

  if(paper.body.position.x > 635 && paper.body.position.y >609){

	textSize(30);
	text("Well Done,....Clean Environment, Green Environment",50,100);
;  }


  
  

 
 
}

function keyPressed() {

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x :150, y:-150})
		
		()
		;

	}
}




