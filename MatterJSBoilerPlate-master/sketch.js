const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var tree, mango;
var ground;
var stone, boy;


function preload()
{
	boyImg=loadImage("boy.png")
	stoneImg=loadImage("stone.png")
	treeImg=loadImage("tree.png")
	mangoImg=loadImage("mango.png")
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    mango = new Mango(700,320,70,70);
    mango2 = new Mango(920,320,70,70);
    tree = new Tree(810, 350);
    
    mango3 = new Mango(700,240,70,70);
    mango4 = new Mango(920,240,70,70);

    mango5 = new Mango(810,160,70,70);
    
    stone = new Stone(200,50);

    boy = new BoyBody(stone.body,{x:200, y:500});
}



function draw() {
  rectMode(CENTER);
  background(0);
    Engine.update(engine);
    strokeWeight(4);

	detectcollision(stone, mango)
	detectcollision(stone, mango2)
	detectcollision(stone,mango3)
	detectcollision(stone, mango4)
	detectcollision(stone, mango5)

    keyPressed();
	ground.display();
	
	tree.display();
	
	mango.display();
	mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    
    stone.display();
    
    boy.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy.fly();
}
function detectcollision(Stone,Mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition=stone.body.position.x, stoneBodyPosition=stone.body.position.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false)
	}
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(stone.body,{x:235, y:420})
        launcherObject.attach(stone.body)
    }
}
  

