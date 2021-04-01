class Tree{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,40,100);
        World.add(world,this.body);
        this.image = loadImage("sprites/tree.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position,y,40,100);
        
    }
}