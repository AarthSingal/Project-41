class RainDrops{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.velocityY  = random(2,5);
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
     fall(speed){
        this.body.speed +=speed;
    }
  
    display(){
        
        push();
       
        fill(this.color);
        ellipse(this.body.position.x, this.body.position.y, this.radius,this.radius);
        pop();
    }
  }