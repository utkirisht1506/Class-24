 
 class Ground{
           constructor( x , y , width , height ){
                    var ground_options ={
                              isStatic: true
                          }
                          this.body = Bodies.rectangle( x , y , width , height , ground_options )
                          this.x = x 
                          this.y = y
                          this.width = width
                          this.height = height
                          World.add(world,this.body)
           }
  
     display(){
               rectMode(CENTER);
               fill("brown")
               rect(this.body.position.x , this.body.position.y , this.width , this.height)
     }
 }

 /*
    OOP 

 Classes - design of an object
    1. properties
    2. functions

    constructor() -  special(pre-defined) function for properties
    "this" - keyword that refers to the object inside the class
    
    
    
    Example - trex.isTouching - isTouching (wrong)
    
    */