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
        this.x = x;
        this.y = y;
    }

    display(){
        var pos = this.body.position;
     
        var img = loadImage("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
        "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png",
        "images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png",
        "images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png",);
     
        var umbImg = createSprite(this.x,this.y,50,50);
        umbImg.addImage(img);
        umbImg.scale = 0.2;

        //imageMode(CENTER);
        //image(this.image,pos.x,pos.y,120,120);
    }
}