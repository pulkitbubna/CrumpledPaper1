const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Render = Matter.Render;

var dusbin, ground, paper;
var world;
function preload()
{
	
}

function setup() {
var canvas =	createCanvas(800, 800);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var dusbin = new dusbin(650,650,100,100)
    ground = new Ground(400,700,800,30);
    paper = new Paper(100,600,10);
    var Render = Render.create({ 
      element: document.body,
      engine: engine, 
       options: { 
       width: 1200,
       height: 700,
       wireframes: false
           } 
          });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  dusbin.display();
  ground.display();
  paper.display();
  
}

function keyDown(){
  if (keyCode === UP_ARROW) {

 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}

