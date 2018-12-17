function Star() {
  this.x = random(width);
  this.y = random(-20, 500);
 


  this.show = function() {
   
    stroke(230, 230, 250);
    point(this.x, this.y);
  }
}
