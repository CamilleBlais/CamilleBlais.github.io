// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI


function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 15, 20, 15, 20);
  this.yspeed = map(this.z, 15, 20, 15, 20);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 15, 20, 0.2, 0.3);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 15, 20, 15, 20);
    }
  }

  this.show = function() {
   
    strokeWeight(3);
    stroke(131, 192, 247);
    line(this.x, this.y, this.x, this.y+this.len);
  }
}
