class Hero{
    constructor(x,y,r)
        {
            var options={
                'frictionAir':0.005,
                'density':1.0
                }
            this.x=x;
            this.y=y;
            this.r=r
            this.image=loadImage("Superhero-02.png");
            this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
            World.add(world, this.body);

        }
        display()
        {
                
                var mangoPos=this.body.position;		

                push()
                translate(mangoPos.x, mangoPos.y);
                //rectMode(CENTER)
                //strokeWeight(4);
                fill(255,0,255)
                imageMode(CENTER);
                image(this.image, 0,0,this.r, this.r)
                //ellipse(0,0,this.r, this.r);
                pop()
                
        }
  }