
function Cloud() {
  this.x = random(-200,2900);
  this.y = random(-50, 350);
  this.len = random(90, 240);
  this.high = random(50,90);
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
	  fill(250,250,255,200);
	  rect(this.x,this.y,this.len,this.high,this.high/2);
	  rect(this.x+this.len/12,this.y-this.high/2.5,this.len/2,this.high,this.high/2);
	  rect(this.x+this.len/2,this.y-this.high/3,this.len/2,this.high,this.high/2);
    }

  }
