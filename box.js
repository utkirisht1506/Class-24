
 class Box {
           constructor ( x , y , width , height){

                    var box_options = { restitution: 0.8 , friction: 1.5 , density: 1 }
                     this.Body = Bodies.rectangle( x , y , width , height , box_options );
                     this.x = x ;
                     this.y = y ;
                     this.width = width ;
                     this.height = height ;
 
                     World.add(world,this.Body);
           }

           display(){
                     push ()
                     
                     translate(this.Body.position.x , this.Body.position.y);
                     rotate(this.Body.angle)
                    fill("blue");

                    rectMode(CENTER);
                    rect( 0 , 0 , this.width , this.height);
                    pop()
   
           };
           
 }