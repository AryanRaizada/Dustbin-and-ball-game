 class pape
{
   constructor(x,y,r)
   {
      var options = 
      {
        density : 1.2,
        friction : 0,
        restitution : 0.3,
        isStatic : false
      }
     this.body = Bodies.circle(x,y,(r-20)/2,options)
     World.add(world,this.body)
     this.image = loadImage("paper.png")
     this.r = r
   }
   display()
   {

   push()
    
   translate(this.body.position.x,this.body.position.y)

   //rotate(this.body.angle)

   rectMode(CENTER)

   imageMode(CENTER)

   image(this.image,0,0,this.r,this.r)

   pop()
   }
}