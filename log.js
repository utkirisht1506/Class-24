class Log {
          constructor ( x , y  , height , angle){

                   var box_options = { restitution: 0.8 , friction: 1.5 , density: 1 }
                    this.Body = Bodies.rectangle( x , y , 20 , height , box_options );
                    this.x = x ;
                    this.y = y ;
                    this.width = 20 ;
                    this.height = height ;
                    Matter.Body.setAngle(this.Body, angle);
                    
                    World.add(world,this.Body);
          }

          display(){
                    push ()
                    
                    translate(this.Body.position.x , this.Body.position.y);
                    rotate(this.Body.angle)
                   fill("orange");

                   rectMode(CENTER);
                   rect( 0 , 0 , this.width , this.height);
                   pop()
  
          };
          
}