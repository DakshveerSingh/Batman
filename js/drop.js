class Drop{
    constructor(x,y){
        var options = {
            'isStatic': false,
            'restitution' : 1,
            'friction' : 0.1,
            'density' : 0.8
        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle)
        ellipseMode(RADIUS);
        stroke("blue");
        fill("blue");
        ellipse(0,0,5,5);
        pop();
    }

    updatePos(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)})
        }
    }
}