const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var batman;
var maxDrops = 50;
var drops = [];
var thunder,thundAni1,thundAni2,thundAni3,thundAni4;

function preload(){
    thundAni1 = loadImage("images/thunderbolt/1.png");
    thundAni2 = loadImage("images/thunderbolt/2.png");
    thundAni3 = loadImage("images/thunderbolt/3.png");
    thundAni4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
	world = engine.world;

    batman = new Umbrella(width/2,height - 50);

    for(i = 0; i < maxDrops; i++){
        drops.push(new Drop(random(0,400),10));
    }
}

function draw(){
    background(0);
    batman.display();
    
    for(i = 0;i < maxDrops; i++){
        drops[i].display();
       // drops[i].updatePos();
    }

    spawnThunder();
    drawSprites();
}   

function spawnThunder(){
    if(frameCount%60 === 0){
        thunder = createSprite(random(50,350),100,10,50);
        var ran = Math.round(random(1,4));
        switch(ran){
            case 1: thunder.addImage(thundAni1);
            break;
            case 2: thunder.addImage(thundAni2);
            break;
            case 3: thunder.addImage(thundAni3);
            break;
            case 4: thunder.addImage(thundAni4);
            default: break;
        }
        thunder.lifetime = 12;
        thunder.scale = 0.5;
    }
}