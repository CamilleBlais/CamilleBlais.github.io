/*
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI

// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background

Drop[] drops = new Drop[500];

void setup() {
  size(640, 360);
  for (int i = 0; i < drops.length; i++) {
    drops[i] = new Drop();
  }
}

void draw() {
  background(230, 230, 250);
  for (int i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
*/

var x = windowWidth/2;
var y = 0;



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255,255,248);
	frameRate(5);

}


function draw() {
	strokeWeight(3);
	stroke(51,51,105);
	line(x,y,x,y+15);
	
	y = y+1;

}
