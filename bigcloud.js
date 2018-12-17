function BigCloud() {
  this.x = random(0,2900);
  this.y = random(-50, 350);
  this.len = random(150, 400);
  this.high = random(70,120);
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
	  fill('red');
	  rect(this.x,this.y,this.len,this.high,this.high/2);
	  
    }

  }
