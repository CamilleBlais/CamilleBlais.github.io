
function Cloud() {
  this.x = random(0,2900);
  this.y = random(-50, 400);
  this.len = random(90, 240);
  this.high = random(50,90);
  this.xspeed = random(0.02,0.05);
  
  
    this.move = function() {
    this.x = this.x + this.xspeed;
    

    if (this.x > width) {
      this.x = random(0,2900);
      this.xspeed = random(0.02,0.05);
    }
  }
    this.show = function() {
   
   	noStroke();
	  fill(250,250,255,200);
	  rect(this.x,this.y,this.len,this.high,this.high/2);
    }

  }
