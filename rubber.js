
class Rubber {
    constructor(x,y)

    var options={
    'restitution':0.3,
    'friction':5,
    'density':1,
    };

this.body=Bodies.circle(x,y,radius,options)
this.radius=radius;


World.add(world,this.body);


display();{
var pos=this.body.position
var angle=this.body.angle
Push()
translate(pos.x,pos.y)
rotate(angle)
ellipseMode(CENTER)

fill ("red")
rect(0,0,this.width,this.height)
}
