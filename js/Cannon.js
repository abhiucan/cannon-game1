class Cannon{

constructor(x,y,width,height,angle){


this.x=x
this.y=y
this.width=width
this.height=height
this.angle=angle



}

display(){
fill("grey")
push()
translate(this.x,this.y)
rotate(this.angle)
rect(-60,70,this.width,this.height)
pop()
arc(this.x-20,this.y+200,140,230,PI,TWO_PI)



}










}

