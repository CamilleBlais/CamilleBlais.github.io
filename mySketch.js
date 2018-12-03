var BriqueX = 100;
var BriqueY = 100;


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

	///// briques
	
	stroke(230);
	strokeWeight(1);
	
	line(BriqueX, BriqueY, BriqueX + 80, BriqueY);
	line(BriqueX-10, BriqueY+10, BriqueX +70, BriqueY +10);
	line(BriqueX+10,BriqueY+20, BriqueX + 70, BriqueY +20);
	line(BriqueX+20, BriqueY+30, BriqueX+50, BriqueY +30);
	
	line(BriqueX+10, BriqueY-5, BriqueX+10, BriqueY+30);
	line(BriqueX+30, BriqueY-10, BriqueX+30, BriqueY+40);
	line(BriqueX+50, BriqueY-10, BriqueX+50, BriqueY+30);
	
}
