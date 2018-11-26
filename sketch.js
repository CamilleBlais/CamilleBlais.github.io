// variables pour le ciel
var x = 0;
var y = 0;
var col = 0;

var mesX = 0;
var mesY = 0;
var mesA = 0;
var mesB = 0;
var mesC = 0;
var mesD = 0;
var mesE = 0;
var mesF = 0;
var mesG = 0;
var mesH = 0;
var mesI = 0;
var mesJ = 0;
var mesK = 0;
var mesL = 0;
var mesM = 0;
var mesN = 0;
var mesO = 0;
var mesP = 0;
var mesQ = 0;
var mesR = 0;
var mesS = 0;
var mesT = 0;
var mesU = 0;
var mesV = 0;
var mesW = 0;
var mesZ = 0;

/////// variables pour feuilles 
var f = 0;
var p = 0;
var r = 0;
var t = 0;
var u = 0;
var q = 0;
/// variables pour branches
var a = 0;
var b = 0;
var c = 0;
var d = 0;

//// variables positionnement ballon
var e = 0;


function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(1);
	
mesX = random(0,2000);
mesY = random(0,120);
mesA = random(0,2000);
mesB = random(0,120);
mesC = random(0,2000);
mesD = random(0,120);
mesE = random(0,2000);
mesF = random(0,120);
mesG = random(0,2000);
mesH = random(0,120);
mesI = random(0,2000);
mesJ = random(0,120);
mesK = random(0,2000);
mesL = random(0,120);
mesM = random(0,2000);
mesN = random(0,120);
mesO = random(0,2000);
mesP = random(0,120);
mesQ = random(0,2000);
mesR = random(0,120);
mesS = random(0,2000);
mesT = random(0,120);
mesU = random(0,2000);
mesV = random(0,120);
mesW = random(0,2000);
mesZ = random(0,120);
	

}

function draw() {
	
	
//////////////////// Étape 1
	//////////////////////// dégradé de ciel 	
	
	
	col = map(x, 0,2800,15,65);
	background(0,0,col);
	
	noStroke();
	

	/////////////// CIEL
	
	fill('white');
	rect(mesX, mesY,3,3);
	rect(mesA, mesB,3,3);
	rect(mesC, mesD,3,3);
	rect(mesE, mesF,3,3);
	rect(mesG, mesH,3,3);
	rect(mesI, mesJ,3,3);
	rect(mesK, mesL,3,3);
	rect(mesM, mesN,3,3);
	rect(mesO, mesP,3,3);
	rect(mesQ, mesR,3,3);
	rect(mesS, mesT,3,3);
	rect(mesU, mesV,3,3);
	rect(mesW, mesZ,3,3);
	
	
	
	
	
	////////////////////// pelouse
	fill(0,10,0);
	rect(0,1000,2700,10);
	fill (0,13,0);
	rect(0,1010,2700,25);
	fill (0,16,0);
	rect(0,1035,2700,30);
	fill (0,21,0);
	rect(0,1065,2700,35);
	fill (0,25,0);
	rect(0,1100,2700,40);
	fill (0,29,0);
	rect(0,1140,2700,45);
	fill (0,35,0);
	rect(0,1185,2700,50);
	fill (0,43,0);
	rect(0,1235,2700,85);
	
	////////////////////////////////////////////// montagne au loin, noire
	
	fill(2,2,10);
		beginShape();
	vertex(0,1000);
	vertex(250,850);
	vertex(300,800);
	vertex(330,865);
	vertex(385,950);
	vertex(500,1000);
	endShape(CLOSE);
	
	fill(2,2,10);
		beginShape();
	vertex(500,1000);
	vertex(560,850);
	vertex(580,830);
	vertex(600,835);
	vertex(650,950);
	vertex(700,1000);
	endShape(CLOSE);
	
	fill(2,2,10);
		beginShape();
	vertex(800,1000);
	vertex(1030,850);
	vertex(1100,800);
	vertex(1160,865);
	vertex(1185,950);
	vertex(1215,1000);
	endShape(CLOSE);
	
	fill(2,2,10);
		beginShape();
	vertex(1200,1000);
	vertex(1260,850);
	vertex(1280,830);
	vertex(1300,835);
	vertex(1350,950);
	vertex(1400,1000);
	endShape(CLOSE);
	
	fill(2,2,10);
		beginShape();
	vertex(1450,1000);
	vertex(1560,860);
	vertex(1580,850);
	vertex(1600,885);
	vertex(1700,950);
	vertex(1800,1000);
	endShape(CLOSE);
	
	fill(2,2,10);
		beginShape();
	vertex(1800,1000);
	vertex(1900,950);
	vertex(1980,900);
	vertex(2000,885);
	vertex(2100,950);
	vertex(2200,1000);
	endShape(CLOSE);
	
	
	
	
	

////////////////////////////////////////// lune

noStroke();
fill(228,232,255);
ellipse(0 + x ,100 + y,80,80);
x = x+4;

	if(x>800){
	y=y+1;	
}
	else if(x>1200){
	y=y+2;
}
	
	
//////////////////////////////////////// arbre
	
	//tronc
	fill(51,16,8);
	rect(400,500,135,600);
	fill(15,2,1);
	rect(400,500,15,600);
	fill(25,8,4);
	rect(415,500,15,600);
	fill(35,12,6);
	rect(430,500,35,600);
	fill(45,14,7);
	rect(465,500,25,600);
	fill(45,14,7);
	rect(515,500,20,600);
	
	//racines
		//fill(37,14,3);
	beginShape();
	vertex(415,1015);
	vertex(433,1120);
	vertex(400,1148);
	vertex(330,1168);
	vertex(385,1100);
	vertex(415,1015);
	endShape(CLOSE);
	
	
	beginShape();
	vertex(445,1020);
	vertex(459,1100);
	vertex(465,1135);
	vertex(475,1160);
	vertex(435,1140);
	vertex(425,1120);
	vertex(445,1020);
	endShape(CLOSE);
	
	fill(37,14,3);
	beginShape();
	vertex(445,1010);
	vertex(459,1100);
	vertex(465,1135);
	vertex(475,1160);
	vertex(435,1140);
	vertex(425,1120);
	vertex(445,1010);
	endShape(CLOSE);
	
	fill(37,14,3);
	beginShape();
	vertex(485,1060);
	vertex(505,1100);
	vertex(525,1160);
	vertex(545,1170);
	vertex(585,1210);
	vertex(502,1180);
	vertex(485,1160);
	vertex(460,1100);
	vertex(485,1060);
	endShape(CLOSE);
	
	fill(37,14,3);
	translate(10,0);
	beginShape();
	vertex(535,1100);
	vertex(550,1125);
	vertex(608,1155);
	vertex(520,1130);
	vertex(490,1110);
	vertex(513,1010);
	vertex(535,1100);
	endShape(CLOSE);
	
	//branches
	
	////branche de droite
	beginShape();
	vertex(525,585);
	vertex(545,500);
	vertex(585,430);
	vertex(615,400);
	vertex(665,320);
	vertex(775,265);
	vertex(635,320);
	vertex(595,385);
	vertex(575,405);
	vertex(500,500);
	endShape(CLOSE);
	
	
	
	fill(15,2,1);
	c = 15;
	d = 0;
	beginShape();
	vertex(400+c,505);
	vertex(400+c,500);
	vertex(370+c,430);
	vertex(350+c,400);
	vertex(305+c,335);
	vertex(170+c,265);
	vertex(395+c,400);
	vertex(415+c,500);
	vertex(400+c,505);
	endShape(CLOSE);
	
	
			/// copie branche milieu
	a = 50;
	b = 55;
	fill(37,14,3,255);
	beginShape();
	vertex(440+a,540+b);
	vertex(460+a,500+b);
	vertex(475+a,380+b);
	vertex(575+a,250+b);
	vertex(620+a,150+b);
	vertex(555+a,250+b);
	vertex(450+a,360+b);
	vertex(355+a,240+b);
	vertex(370+a,140+b);
	vertex(340+a,245+b);
	vertex(435+a,380+b);
	vertex(415+a,500+b);
	endShape(CLOSE);

	///branche milieu
	
	fill(25,8,4,255);
		beginShape();
	vertex(440,540);
	vertex(460,500);
	vertex(475,380);
	vertex(575,250);
	vertex(620,150);
	vertex(555,250);
	vertex(450,360);
	vertex(355,240);
	vertex(370,140);
	vertex(340,245);
	vertex(435,380);
	vertex(415,500);
	endShape(CLOSE);
	
	// mini branche sur la branche de gauche
	
	triangle(280,320,315,265,260,320);
	triangle(335,385,355,340,300,390);	
	
	// branche de gauche
	fill(15,2,1);
	beginShape();
	vertex(390,585);
	vertex(370,500);
	vertex(330,430);
	vertex(300,400);
	vertex(250,320);
	vertex(140,265);
	vertex(280,320);
	vertex(320,385);
	vertex(340,405);
	vertex(415,500);
	endShape(CLOSE);

	
	/////////////////////////////// feuilles
	
f = random(0,5);	
p = random(0,5);
r = random(0,5);
t = random(0,5);
	
u = random(0,5);
q = random(0,5);
	
	
fill('orange');
beginShape();
vertex(775, 265);
vertex(785+f, 260);
vertex(790+f, 255);
vertex(792+f, 250);
vertex(795+f, 240);
vertex(790+f, 245);
vertex(780+f, 250);
vertex(778+f, 257);
vertex(775, 265);
endShape();
	
	fill('orange');
beginShape();
vertex(575, 265);
vertex(585+f, 260);
vertex(590+f, 255);
vertex(592+f, 250);
vertex(595+f, 240);
vertex(590+f, 245);
vertex(580+f, 250);
vertex(578+f, 257);
vertex(575, 265);
endShape();


	
fill('orange');
beginShape();
vertex(475, 365);
vertex(485+p, 360);
vertex(490+p, 355);
vertex(492+p, 350);
vertex(495+p, 340);
vertex(490+p, 345);
vertex(480+p, 350);
vertex(478+p, 357);
vertex(475, 365);
endShape();
	
	fill('orange');
beginShape();
vertex(475, 365);
vertex(485+p, 360);
vertex(490+p, 355);
vertex(492+p, 350);
vertex(495+p, 340);
vertex(490+p, 345);
vertex(480+p, 350);
vertex(478+p, 357);
vertex(475, 365);
endShape();
	
	fill('orange');
beginShape();
vertex(375, 385);
vertex(385+r, 380);
vertex(390+r, 375);
vertex(392+r, 370);
vertex(395+r, 360);
vertex(390+r, 365);
vertex(380+r, 370);
vertex(378+r, 377);
vertex(375, 385);
endShape();
	
	fill('orange');
beginShape();
vertex(375, 385);
vertex(385+r, 380);
vertex(390+r, 375);
vertex(392+r, 370);
vertex(395+r, 360);
vertex(390+r, 365);
vertex(380+r, 370);
vertex(378+r, 377);
vertex(375, 385);
endShape();
	
	fill('orange');
beginShape();
vertex(275, 385);
vertex(285+t, 380);
vertex(290+t, 375);
vertex(292+t, 370);
vertex(295+t, 360);
vertex(290+t, 365);
vertex(280+t, 370);
vertex(278+t, 377);
vertex(275, 385);
endShape();
	
	fill('orange');
beginShape();
vertex(275, 285);
vertex(285+t, 280);
vertex(290+t, 275);
vertex(292+t, 270);
vertex(295+t, 260);
vertex(290+t, 265);
vertex(280+t, 270);
vertex(278+t, 277);
vertex(275, 285);
endShape();
	
	//feuilles rouges
	
	
	fill(105,0, 0);
beginShape();
vertex(530, 490);
vertex(520+t, 480);
vertex(515+t, 470);
vertex(517+t, 460);
vertex(525+t, 465);
vertex(530+t, 475);
vertex(530, 490);
endShape();
	
		fill(105,0, 0);
beginShape();
vertex(430, 390);
vertex(420+u, 380);
vertex(415+u, 370);
vertex(417+u, 360);
vertex(425+u, 365);
vertex(430+u, 375);
vertex(430, 390);
endShape();
	
	fill(105,0, 0);
beginShape();
vertex(430, 390);
vertex(420+u, 380);
vertex(415+u, 370);
vertex(417+u, 360);
vertex(425+u, 365);
vertex(430+u, 375);
vertex(430, 390);
endShape();
	
	fill(105,0, 0);
beginShape();
vertex(630, 290);
vertex(620+q, 280);
vertex(615+q, 270);
vertex(617+q, 260);
vertex(625+q, 265);
vertex(630+q, 275);
vertex(630, 290);
endShape();
	
fill(105,0, 0);
beginShape();
vertex(330, 290);
vertex(320+q, 280);
vertex(315+q, 270);
vertex(317+q, 260);
vertex(325+q, 265);
vertex(330+q, 275);
vertex(330, 290);
endShape();
	
fill(105,0, 0);
beginShape();
vertex(330, 390);
vertex(320+q, 380);
vertex(315+q, 370);
vertex(317+q, 360);
vertex(325+q, 365);
vertex(330+q, 375);
vertex(330, 390);
endShape();
	
	
	/////////////////////////////////////////// EAU
	
	fill(5,0,35);
	ellipse(1300,1180,1000,80);
	fill(5,0,45);
	ellipse(1300,1165,950,40);
	fill(5,0,55);
	ellipse(1100,1145,450,45);
	fill(5,0,55);
	ellipse(1300,1145,450,45);
	
	/////////////////////////////////////// ballon
	
e = random(0,5);	
	
fill('yellow');
ellipse(1335+e,1160,60,60);
fill(5,0,35);
ellipse(1300,1195,700,20);
	
	
	
	
	
	
	
}
