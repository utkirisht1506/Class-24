class Bird {
          constructor ( x , y ){

                   var box_options = { restitution: 0.5 , friction: 0.9 , density: 1.5 }
                    this.Body = Bodies.rectangle( x , y , 50 , 50 , box_options );
                    this.x = x ;
                    this.y = y ;
                    this.width = 50 ;
                    this.height = 50 ;

                    World.add(world,this.Body);
          }

          display(){
                //xposition of bird = mouseX
                this.Body.position.x = mouseX;
                this.Body.position.y = mouseY;

                    push ()
                    
                    translate(this.Body.position.x , this.Body.position.y);
                    rotate(this.Body.angle)
                   fill("red");

                   rectMode(CENTER);
                   rect( 0 , 0 , this.width , this.height);
                   pop()
  
          };
          
}