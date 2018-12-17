/*function getRandomSize(){
var r = randomGaussian() * 1;
  return abs(r*r);
}*/

class Snowflake2{

constructor(){

var x = random(width);
var y = random(-1000,50);
this.pos = createVector(x,y);
this.vel = createVector(0,0);
this.acc = createVector();
this.r = random(3,13);
//this.terminalV = this.r;
}

applyForce(force){
  // parallele effect hack
 
  var f = force.copy();
  f.mult(this.r); 
  
  //var f = force.copy();
  //f.div(this.mass);
  this.acc.add(f);
}

update(){
this.vel.add(this.acc);
this.vel.limit(this.r);
 if(this.vel.mag() < 1){
  this.vel.normalize();
  }
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
