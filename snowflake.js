class Snowflake{

constructor(){

var x = random(width);
var y = random(-1000,50);
this.pos = createVector(x,y);
this.vel = createVector(0,0);
this.acc = createVector();
this.r = random(4,8);
}

applyForce(force){
this.acc.add(force);
}

update(){
this.vel.add(this.acc);
this.pos.add(this.vel);
this.acc.mult(0);
}

render(){
stroke(255);
strokeWeight(this.r);
point(this.pos.x, this.pos.y);
}

offScreen(){
return(this.pos.y > height+ this.r);
}


}
