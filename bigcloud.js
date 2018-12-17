function BigCloud() {
  this.x = random(-200,2900);
  this.y = random(-50, 350);
  this.len = random(160, 430);
  this.high = random(70,120);
  this.xspeed = random(0.02,0.05);
  
  
    this.move = function() {
    this.x = this.x + this.xspeed;
    

    if (this.x > 3000) {
      this.x = random(-2000,-200);
      this.xspeed = random(0.02,0.05);
    }
  }
    this.show = function() {
   
   	noStroke();
	  fill(240,240,245,150);
	  rect(this.x,this.y,this.len,this.high,this.high/2);
	  
    }

  }
