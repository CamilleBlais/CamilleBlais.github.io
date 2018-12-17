
function Cloud() {
  this.x = random(-400,-10);
  this.y = random(-50, 1525);
  this.len = random(70, 200);
  this.high = random(
  this.xspeed = random(10,20);
  
  
    this.move = function() {
    this.x = this.x + this.xspeed;
    //this.xspeed = this.xspeed + 0.09;

    if (this.x > width) {
      this.x = random(-400,-10);
      this.xspeed = random(10,20);
    }
  }
    this.show = function() {
   
   	noStroke();
	  fill(230,230,245,200);
	  rect(this.x,this.y,this.len,this.high,this.high/2);
    }

  }
