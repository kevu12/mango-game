

class Mango extends BaseClass
{
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("mango.png");
      
      var options = {
        'restitution':0,
        'friction':1.0,
        'density':1.2,
        isStatic:true
    }
    } 
  
  }