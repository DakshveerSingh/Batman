class Umbrella{
    constructor(x,y){
        var options = {
            'isStatic' : true, 
            'restitution' : 1,
            'friction' : 0,
            'density' : 0.8 
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
        this.image = loadImage("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
        "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png",
        "images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png",
        "images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png",);
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,120,120);
    }
}