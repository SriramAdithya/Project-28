const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let roof;
let bob1, bob2, bob3, bob4, bob5;
let rope1, rope2, rope3, rope4, rope5;

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  roof = new Roof(400, 100, 500, 20);
  bob1 = new Bob(200, 500);
  bob2 = new Bob(280, 500);
  bob3 = new Bob(360, 500);
  bob4 = new Bob(440, 500);
  bob5 = new Bob(520, 500);
  rope1 = new Rope(bob1.body, roof.body, -200, 0);
  rope2 = new Rope(bob2.body, roof.body, -120, 0);
  rope3 = new Rope(bob3.body, roof.body, -40, 0);
  rope4 = new Rope(bob4.body, roof.body, 40, 0);
  rope5 = new Rope(bob5.body, roof.body, 120, 0);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
}
