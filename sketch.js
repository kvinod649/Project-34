const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backImg, ground;
var hero, fly;
var box1, box2, box3, box4, box5, box6,
 box7, box8, box9, box10, box11, box12, 
 box13, box14, box15, box16, box17, box18, 
 box19, box20, box21;
var monster;

function preload() {
//preload the images here
backImg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1350, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(400,600,1000,20);
  hero = new Hero(200, 200, 150);
  fly = new Fly(hero.body, {x: 220, y:50});

  box1 = new Box(730,100,50,50);
  box2 = new Box(730,100,50,50);
  box3 = new Box(730,100,50,50);
  box4 = new Box(730,100,50,50);
  box5 = new Box(730,100,50,50);
  box6 = new Box(730,100,50,50);

  box7 = new Box(630,100,50,50);
  box8 = new Box(630,100,50,50);
  box9 = new Box(630,100,50,50);
  box10 = new Box(630,100,50,50);
  box11 = new Box(630,100,50,50);
  box12 = new Box(630,100,50,50);
  box13 = new Box(630,100,50,50);

  box14 = new Box(530,100,50,50);
  box15 = new Box(530,100,50,50);
  box16 = new Box(530,100,50,50);
  box17 = new Box(530,100,50,50);
  box18 = new Box(530,100,50,50);
  box19 = new Box(530,100,50,50);
  box20 = new Box(530,100,50,50);
  box21 = new Box(530,100,50,50);

  monster = new Monster(890, 100, 150)
}

function draw() {
  background(backImg);
  Engine.update(engine);

  ground.display();
  hero.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}