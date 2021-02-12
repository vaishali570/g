 
 class Hammer {
    constructor(x,y){
    var options={
        'restitution':2,
        'friction':1.0,
        'density':0.5,
         };

    this.body=bodies.rectangle(x,y,100,50,options)
    this.width=100;
    this.height=50;

    World.add(world,this.body)

}
display(){
    var Pos=this.body.position;
    pos.x=mouse.x;
    pos.y=mouse.y;
    var angle=this.body.angle;

    Push ()
    Translate (pos.x,pos.y);
    rotate (angle);
    strokeWeight(3)
    stroke("black");
    fill("yellow")
    rectMode(CENTER);
    fill ("yellow");
    rect(0,0,this.width,this.height);
    Pop ()
}

 };
