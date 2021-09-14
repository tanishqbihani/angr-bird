class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){
        image (this.sling1, 200, 50, 40,170);
        image (this.sling2, 173, 50, 40, 100)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(64,30,11);
            if (pointA.x > 220){
                strokeWeight(5);
                line(pointA.x+ 25, pointA.y, pointB.x-10, pointB.y+3);
                line(pointA.x+ 25, pointA.y, pointB.x+20, pointB.y+8);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
            else{
                strokeWeight(10);
                line(pointA.x- 25, pointA.y, pointB.x-10, pointB.y+3);
                line(pointA.x- 25, pointA.y, pointB.x+20, pointB.y+8);
                image(this.sling3,pointA.x-25,pointA.y-10,15,30);
            }
            
        }
    }
    
}