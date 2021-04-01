class Mango{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,20,20);
        World.add(world,this.body);
        this.image = loadImage("sprites/mango.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,20,20);
    }
}