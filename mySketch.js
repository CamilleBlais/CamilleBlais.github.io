var BriqueX = 0;
var BriqueY = 0;
var BriqueX2 = 0;
var BriqueY2 = 0;

function setup(){
createCanvas(2850, 1300);
	background(255,255,248);
}




function draw() {
	
	/////////////////////////rue	
	fill(91, 88, 79);
	rect(-100,1200,3000,30);
	fill(118, 106, 88);
	rect(-100,1230,3000,60);
	fill(32, 23, 17);
	rect(-100,1290,3000,300);
	
	

	///////////////////////////////////////////////////////////////////// maison #1 
	//rectangles de base
	strokeWeight(1);
	stroke(0);
	fill(63, 17, 4);
	rect(-100,820,300,380);
	
	
	//// briques foncés
	BriqueX2 = 0;
	BriqueY2 = 750;
	stroke(70);
	strokeWeight(1);
	
	line(BriqueX2, BriqueY2, BriqueX2 + 90, BriqueY2);
	line(BriqueX2-15, BriqueY2+8, BriqueX2 +70, BriqueY2 +8);
	line(BriqueX2+10,BriqueY2+16, BriqueX2 + 80, BriqueY2 +16);
	line(BriqueX2, BriqueY2+24, BriqueX2+60, BriqueY2 +24);
	rect(BriqueX2-8, BriqueY2, 16,8);
	rect(BriqueX2+8, BriqueY2, 16,8);
	rect(BriqueX2+24, BriqueY2, 16,8);
	rect(BriqueX2+40, BriqueY2, 16,8);
	rect(BriqueX2+56, BriqueY2, 16,8);
	rect(BriqueX2, BriqueY2+8, 16,8);
	rect(BriqueX2+16, BriqueY2+8, 16,8);
	rect(BriqueX2+32, BriqueY2+8, 16,8);
	rect(BriqueX2+48, BriqueY2+8, 16,8);
	rect(BriqueX2+64, BriqueY2+8, 16,8);
	rect(BriqueX2+8, BriqueY2+16, 16,8);
	rect(BriqueX2+24, BriqueY2+16, 16,8);
	rect(BriqueX2+40, BriqueY2+16, 16,8);
	
	BriqueX2 = 100;
	BriqueY2 = 850;
	stroke(70);
	strokeWeight(1);
	
	line(BriqueX2, BriqueY2, BriqueX2 + 90, BriqueY2);
	line(BriqueX2-15, BriqueY2+8, BriqueX2 +70, BriqueY2 +8);
	line(BriqueX2+10,BriqueY2+16, BriqueX2 + 80, BriqueY2 +16);
	line(BriqueX2, BriqueY2+24, BriqueX2+60, BriqueY2 +24);
	rect(BriqueX2-8, BriqueY2, 16,8);
	rect(BriqueX2+8, BriqueY2, 16,8);
	rect(BriqueX2+24, BriqueY2, 16,8);
	rect(BriqueX2+40, BriqueY2, 16,8);
	rect(BriqueX2+56, BriqueY2, 16,8);
	rect(BriqueX2, BriqueY2+8, 16,8);
	rect(BriqueX2+16, BriqueY2+8, 16,8);
	rect(BriqueX2+32, BriqueY2+8, 16,8);
	rect(BriqueX2+48, BriqueY2+8, 16,8);
	rect(BriqueX2+64, BriqueY2+8, 16,8);
	rect(BriqueX2+8, BriqueY2+16, 16,8);
	rect(BriqueX2+24, BriqueY2+16, 16,8);
	rect(BriqueX2+40, BriqueY2+16, 16,8);
	
	////////////////////////////////////////////////////////////////// maison #2 
	
	strokeWeight(1);
	stroke(0);
	fill(134, 114, 89);
	rect(200,830,280,370);
	
	///////// briques claires (DIFFERENT PATTERN)
	
	BriqueX = 210;
	BriqueY= 760;
	stroke(180);
	strokeWeight(1);
	
	line(BriqueX, BriqueY, BriqueX + 80, BriqueY);
	line(BriqueX-5, BriqueY+8, BriqueX +70, BriqueY +8);
	line(BriqueX+10,BriqueY+16, BriqueX + 70, BriqueY +16);
	line(BriqueX+10, BriqueY+24, BriqueX+60, BriqueY +24);
	noFill();
	rect(BriqueX,BriqueY, 16, 8);
	rect(BriqueX+16,BriqueY, 16, 8);
	rect(BriqueX+32,BriqueY, 16, 8);
	rect(BriqueX+48,BriqueY, 16, 8);
	rect(BriqueX+64,BriqueY, 16, 8);
	rect(BriqueX+8, BriqueY+8, 16, 8);
	rect(BriqueX+24, BriqueY+8, 16, 8);
	rect(BriqueX+40, BriqueY+8, 16, 8);
	rect(BriqueX,BriqueY+16, 16, 8);
	rect(BriqueX+16,BriqueY+16, 16, 8);
	rect(BriqueX+32,BriqueY+16, 16, 8);
	rect(BriqueX+48,BriqueY+16, 16, 8);
	rect(BriqueX+8, BriqueY+24, 16, 8);
	rect(BriqueX+24, BriqueY+24, 16, 8);
	rect(BriqueX+40, BriqueY+24, 16, 8);
	
	////////////////////////////////////////////////////////////////// maison #3 
	strokeWeight(1);
	stroke(0);
	fill(131, 52, 0);
	rect(480,800,300,400);
	
	////////////////////////////////////////////////////////////////// maison #4 
	strokeWeight(1);
	stroke(0);
	fill(141, 114, 78);
	rect(780,800,300,400);
	////////////////////////////////////////////////////////////////// maison #5
	
	strokeWeight(1);
	stroke(0);
	fill(75, 26, 0);
	rect(1080,830,280,370);	
	
	BriqueX2 = 1100;
	BriqueY2 = 800;
	stroke(70);
	strokeWeight(1);
	
	line(BriqueX2, BriqueY2, BriqueX2 + 90, BriqueY2);
	line(BriqueX2-15, BriqueY2+8, BriqueX2 +70, BriqueY2 +8);
	line(BriqueX2+10,BriqueY2+16, BriqueX2 + 80, BriqueY2 +16);
	line(BriqueX2, BriqueY2+24, BriqueX2+60, BriqueY2 +24);
	rect(BriqueX2-8, BriqueY2, 16,8);
	rect(BriqueX2+8, BriqueY2, 16,8);
	rect(BriqueX2+24, BriqueY2, 16,8);
	rect(BriqueX2+40, BriqueY2, 16,8);
	rect(BriqueX2+56, BriqueY2, 16,8);
	rect(BriqueX2, BriqueY2+8, 16,8);
	rect(BriqueX2+16, BriqueY2+8, 16,8);
	rect(BriqueX2+32, BriqueY2+8, 16,8);
	rect(BriqueX2+48, BriqueY2+8, 16,8);
	rect(BriqueX2+64, BriqueY2+8, 16,8);
	rect(BriqueX2+8, BriqueY2+16, 16,8);
	rect(BriqueX2+24, BriqueY2+16, 16,8);
	rect(BriqueX2+40, BriqueY2+16, 16,8);
	
	////////////////////////////////////////////////////////////////// maison #6
	
	strokeWeight(1);
	stroke(0);
	fill(70, 20, 0);
	rect(1360,800,300,400);	
	
	BriqueX2 = 1400;
	BriqueY2 = 710;
	stroke(70);
	strokeWeight(1);
	
	line(BriqueX2, BriqueY2, BriqueX2 + 90, BriqueY2);
	line(BriqueX2-15, BriqueY2+8, BriqueX2 +70, BriqueY2 +8);
	line(BriqueX2+10,BriqueY2+16, BriqueX2 + 80, BriqueY2 +16);
	line(BriqueX2, BriqueY2+24, BriqueX2+60, BriqueY2 +24);
	rect(BriqueX2-8, BriqueY2, 16,8);
	rect(BriqueX2+8, BriqueY2, 16,8);
	rect(BriqueX2+24, BriqueY2, 16,8);
	rect(BriqueX2+40, BriqueY2, 16,8);
	rect(BriqueX2+56, BriqueY2, 16,8);
	rect(BriqueX2, BriqueY2+8, 16,8);
	rect(BriqueX2+16, BriqueY2+8, 16,8);
	rect(BriqueX2+32, BriqueY2+8, 16,8);
	rect(BriqueX2+48, BriqueY2+8, 16,8);
	rect(BriqueX2+64, BriqueY2+8, 16,8);
	rect(BriqueX2+8, BriqueY2+16, 16,8);
	rect(BriqueX2+24, BriqueY2+16, 16,8);
	rect(BriqueX2+40, BriqueY2+16, 16,8);
	
	BriqueX2 = 1420;
	BriqueY2 = 850;
	stroke(70);
	strokeWeight(1);
	
	line(BriqueX2, BriqueY2, BriqueX2 + 90, BriqueY2);
	line(BriqueX2-15, BriqueY2+8, BriqueX2 +70, BriqueY2 +8);
	line(BriqueX2+10,BriqueY2+16, BriqueX2 + 80, BriqueY2 +16);
	line(BriqueX2, BriqueY2+24, BriqueX2+60, BriqueY2 +24);
	rect(BriqueX2-8, BriqueY2, 16,8);
	rect(BriqueX2+8, BriqueY2, 16,8);
	rect(BriqueX2+24, BriqueY2, 16,8);
	rect(BriqueX2+40, BriqueY2, 16,8);
	rect(BriqueX2+56, BriqueY2, 16,8);
	rect(BriqueX2, BriqueY2+8, 16,8);
	rect(BriqueX2+16, BriqueY2+8, 16,8);
	rect(BriqueX2+32, BriqueY2+8, 16,8);
	rect(BriqueX2+48, BriqueY2+8, 16,8);
	rect(BriqueX2+64, BriqueY2+8, 16,8);
	rect(BriqueX2+8, BriqueY2+16, 16,8);
	rect(BriqueX2+24, BriqueY2+16, 16,8);
	rect(BriqueX2+40, BriqueY2+16, 16,8);
	
	////////////////////////////////////////////////////////////////// maison #7
	strokeWeight(1);
	stroke(0);
	fill(134, 114, 89);
	rect(1660,820,330,380);
	
	
	////////////////////////////////////////////////////////////////// maison #8
	
	
	strokeWeight(1);
	stroke(0);
	fill(141, 114, 78);
	rect(1990,800,290,400);
	
	
	////////////////////////////////////////////////////////////////// maison #9
	
	strokeWeight(1);
	stroke(0);
	fill(141, 114, 78);
	rect(2280,800,290,400);
	
	////////////////////////////////////////////////////////////////// maison #10
	
	strokeWeight(1);
	stroke(0);
	fill(120, 45, 16);
	rect(2570,830,280,370);


	
}
