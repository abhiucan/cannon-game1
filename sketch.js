const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  bcImage = loadImage("./assets/background.gif");


}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
angle= -PI/4
  cannon = new Cannon(165,20,30,100,angle)
  ground = new Ground(0, height - 1, width * 2, 180);
  tower = new Tower(150, 350, 160, 310);
  

}

function draw() {
  background(bcImage);
  Engine.update(engine);
cannon.display()
  ground.display();
  
  tower.display();
  
 
}
