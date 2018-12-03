var BriqueX = 0;
var BriqueY = 0;


function setup(){
createCanvas(windowWidth, windowHeight);
	background(255,255,248);
}


function draw() {
	strokeWeight(0.1);
	stroke(0);
	fill(55);
	rect(-100,1100,3000,400);
	fill(35);
	rect(-100,1150,3000,300);
	
	///////////// maisons
	
	fill(63, 17, 4);
	rect(-100,720,300,380);
	fill(134, 114, 89);
	rect(200,730,280,370);
	
	fill(131, 52, 0);
	rect(480,700,300,400);
	
	
	fill(141, 114, 78);
	rect(780,700,300,400);
	
	fill(75, 26, 0);
	rect(1080,730,280,370);
	
	fill(70, 20, 0);
	rect(1360,700,300,400);
	fill(134, 114, 89);
	rect(1660,720,330,380);
	
	fill(141, 114, 78);
	rect(1990,700,290,400);
	rect(2280,700,290,400);
	
	fill(120, 45, 16);
	rect(2570,730,280,370);

	///////////////////////////////////////////// briques
	
	BriqueX = 210
	BriqueY= 760
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
	
}
