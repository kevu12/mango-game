class BoyBody{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.boyImage = loadImage('boy.png');
        
        this.pointB = pointB
        this.boy = Constraint.create(options);
                
        World.add(world, this.boy);   
    }
    attach(body){
        this.boy.bodyA = body;
    }
    
    
    fly(){
        this.boy.bodyA = null;
    }

    display(){
        image(this.boyImage,200,20);
       
        if(this.boy.bodyA){
            var pointA = this.boy.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            /*
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.boyImage,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.boyImage,pointA.x + 25, pointA.y -10,15,30);
            }
           */
            
            pop();
        }
    }
    
}