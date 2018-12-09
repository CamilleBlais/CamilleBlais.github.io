var BriqueX = 0;
var BriqueY = 0;
var BriqueX2 = 0;
var BriqueY2 = 0;
//var date = {year: 1986, month: 1, day: 1, hours: 1, minutes: 52, seconds: 0};

/*var x = new XMLHttpRequest();
x.open("GET", "https://meteo.gc.ca/rss/city/qc-147_f.xml", true);Wvar parser = new DOMParser();
var xmlDoc;*/

function setup(){
  createCanvas(2866, 1608);
  background(255,255,235);
 
}

 /* x.onreadystatechange = function () {
    if (x.readyState == 4 && x.status == 200)
    {
      var xmlDoc = x.responseXML;
    }
  };
  x.send(null);
	
  console.log(xmlDoc);
  entries=xmlDoc.getElementsByTagName("entry");
  console.log(entries);
  for (i=0;i<=entries.length;i++)
  {
    category=entries[i].getElementsByTagName("category")[0];
    title = category.parentNode.getElementsByTagName('title')[0].childNodes[0].nodeValue

    if (category.getAttribute('term')=='Conditions actuelles'){
      console.log('Yes: '+title);
    }
    else {
      console.log('No: '+title);
    }
  }

  $const.tlong = -71.10; // longitude
  $const.glat = 42.37; // latitude

  $processor.init ();

  // sun, mercury, venus, moon, mars, jupiter, saturn, uranus, neptune, pluto, chiron, sirius
  var body = $moshier.body.sun;

  $processor.calc (date, body);

  console.log(body.position);*/



function draw() {
	
	/////////////////////////rue
	strokeWeight(1);
	fill(91, 88, 79);
	rect(-100,1200,3000,30);
	fill(118, 106, 88);
	rect(-100,1230,3000,60);
	fill(32, 23, 17);
	rect(-100,1290,3000,310);
	
	

	///////////////////////////////////////////////////////////////////// maison #1 
	//rectangles de base
	strokeWeight(1);
	stroke(0);
	fill(63, 17, 4);
	rect(-100,820,300,380);
	
	
	//// briques foncés
	BriqueX2 = 0;
	BriqueY2 = 830;
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
	BriqueY2 = 940;
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
	
	BriqueX2 = 120;
	BriqueY2 = 1100;
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
	
	// centre maison 1 = 50 en x. Sol en y = 1200, 1 er étage 1070 et deuxieme 945. toit =  820.  
	var porteX = 50;  //mettre le centre de la maison
	var porteY =1200;  //mettre le rez de chaussée de la maison   
	noStroke();
	fill(245,245,235);   //1ere porte
	rect(porteX-35, porteY-120,72,85);
	strokeWeight(3);
	stroke(120);
	line(porteX, porteY-120,porteX, porteY-35);
	line(porteX-4, porteY-68, porteX-4, porteY-63);
	line(porteX+4, porteY-68, porteX+4, porteY-63);
	fill(35,35,65);
	rect(porteX-30, porteY-115,23,45);    /// fenetre dans la 1ere porte
	rect(porteX+7,porteY-115,23,45);
	strokeWeight(6);
	stroke(80,35,35);
	rect(porteX-120, porteY-120, 40,55); /////////////////// premieres fenetres a gauche//droite 1er niveau
	rect(porteX+80,porteY-120,40,55);
	strokeWeight(1)
	stroke(0);
	fill(210,200,200);
	rect(porteX-65, porteY-33, 130, 3); ////////////////////////// // 1er patio 
	fill(135,120,120);
	rect(porteX-65, porteY-30, 130, 12);
	fill(85,70,70,75);
	rect(porteX-65, porteY-18, 130, 16);
	
	fill(135,85,85);
	rect(porteX-30, porteY-28, 60, 5);   // 1er escaliers
	rect(porteX-30, porteY-19, 60, 5);
	rect(porteX-30, porteY-9, 60, 5);
	strokeWeight(3);
	stroke(25);
	line(porteX-31, porteY-30, porteX-32, porteY);  //rampes 1er escalier
	line(porteX+31, porteY-30, porteX+32, porteY);
	line(porteX-66, porteY-60, porteX-66, porteY-32); //rampes 1er patio de gauche
	line(porteX-60, porteY-60, porteX-60, porteY-32);
	line(porteX-54, porteY-60, porteX-54, porteY-32);
	line(porteX-48, porteY-60, porteX-48, porteY-32);
	line(porteX-42, porteY-62, porteX-42, porteY-32);
	line(porteX+66, porteY-60, porteX+66, porteY-32); //rampes 1er patio de droite
	line(porteX+60, porteY-60, porteX+60, porteY-32);
	line(porteX+54, porteY-60, porteX+54, porteY-32);
	line(porteX+48, porteY-60, porteX+48, porteY-32);
	line(porteX+42, porteY-62, porteX+42, porteY-32);
	strokeWeight(4)
	line(porteX-67, porteY-62, porteX-40, porteY-62); //gauche
	line(porteX+67, porteY-62, porteX+40, porteY-62); //droite
	
	
  
	noStroke();
	fill(135,85,85);//////////////////////////// les longues escaliers
	rect(porteX-148, porteY-5, 50, 4); 
	rect(porteX-148, porteY-13, 50, 4);
	rect(porteX-148, porteY-20, 50, 4);
	rect(porteX-148, porteY-28, 50, 4);
	rect(porteX-148, porteY-37, 50, 4);
	rect(porteX-148, porteY-45, 50, 4);
	strokeWeight(4);
	stroke(135,85,85);
	line(porteX-145, porteY-54, porteX-100,  porteY-53);
	line(porteX-143, porteY-64, porteX-100,  porteY-63);
	line(porteX-141, porteY-73, porteX-99,  porteY-72);
	line(porteX-138, porteY-83, porteX-99,  porteY-80);
	line(porteX-134, porteY-94, porteX-98,  porteY-89);
	line(porteX-134, porteY-96, porteX-97,  porteY-89);
	line(porteX-128, porteY-106, porteX-96,  porteY-100);
	line(porteX-127, porteY-109, porteX-96,  porteY-100);
	line(porteX-119, porteY-120, porteX-95,  porteY-109);
	line(porteX-121, porteY-117, porteX-94,  porteY-109);
	line(porteX-109, porteY-129, porteX-94,  porteY-119);
	line(porteX-106, porteY-129, porteX-92,  porteY-119);
	line(porteX-97, porteY-139, porteX-85,  porteY-126);
	line(porteX-95, porteY-139, porteX-85,  porteY-126);
	line(porteX-93, porteY-139, porteX-85,  porteY-126);
	line(porteX-81, porteY-143, porteX-79,  porteY-129);
	line(porteX-83, porteY-143, porteX-79,  porteY-129);
	line(porteX-79, porteY-143, porteX-79,  porteY-129);
	line(porteX-72, porteY-147, porteX-72,  porteY-132);
	noStroke();//////////////////////////// rampes des longues escaliersss
	fill(25);
	rect(porteX-149, porteY-33, 2, 28);
	rect(porteX-149, porteY-56, 2, 28);
	rect(porteX-149, porteY-73, 2, 28);
	rect(porteX-146, porteY-82, 2, 28);
	rect(porteX-144, porteY-92, 2, 28);
	rect(porteX-141, porteY-101, 2, 28);
	rect(porteX-138, porteY-111, 2, 28);
	rect(porteX-134, porteY-124, 2, 28);
	rect(porteX-128, porteY-135, 2, 28);
	rect(porteX-120, porteY-148, 2, 28);
	rect(porteX-114, porteY-153, 2, 28);
	rect(porteX-108, porteY-158, 2, 28);
	rect(porteX-102, porteY-164, 2, 28);
	rect(porteX-96, porteY-167, 2, 28);
	rect(porteX-89, porteY-170, 2, 28);
	rect(porteX-82, porteY-172, 2, 28);
	rect(porteX-77, porteY-172, 2, 28);
	rect(porteX-72, porteY-174, 2, 28);// dernier bout de rampe de gauche
	rect(porteX-98, porteY-33, 2, 28);
	rect(porteX-98, porteY-82, 2, 28);
	rect(porteX-98, porteY-60, 2, 28);
	rect(porteX-98, porteY-100, 2, 28);
	rect(porteX-98, porteY-117, 2, 28);
	rect(porteX-97, porteY-117, 2, 28);
	rect(porteX-96, porteY-125, 2, 28);
	rect(porteX-94, porteY-137, 2, 28);
	rect(porteX-92, porteY-147, 2, 28);
	rect(porteX-87, porteY-149, 2, 28);
	rect(porteX-83, porteY-153, 2, 28);
	rect(porteX-79, porteY-155, 2, 28);
	rect(porteX-73, porteY-158, 2, 28);
	strokeWeight(3);
	stroke(25);
	line(porteX-149, porteY-33, porteX-148, porteY-54);
	line(porteX-148, porteY-54, porteX-142, porteY-91)
	line(porteX-142, porteY-91, porteX-130, porteY-130);
	line(porteX-130, porteY-130,porteX-115, porteY-153);
	line(porteX-115, porteY-153,porteX-100, porteY-163);
	line(porteX-100, porteY-163,porteX-80, porteY-170);
	line(porteX-80, porteY-170,porteX-70, porteY-171);
	line(porteX-95, porteY-115,porteX-93, porteY-130);
	line(porteX-93, porteY-130,porteX-88, porteY-145);
	line(porteX-88, porteY-145, porteX-82, porteY-150);
	line(porteX-82, porteY-150, porteX-75, porteY-155);
	line(porteX-75, porteY-155, porteX-70, porteY-157);
	
	
	
	strokeWeight(1);
	stroke(120);
	fill(245,245,235); 					/// les 2 portes du deuxieme patios
	rect(porteX-60, porteY-230, 34,80);
	rect(porteX-17, porteY-230, 34, 80);
	rect(porteX+26, porteY-230, 34, 80);
	strokeWeight(2);
	fill(35,35,65);				//// fenetre des 3  deuxieme portes 
	rect(porteX-55, porteY-227, 24, 45);
	rect(porteX-12, porteY-227, 24, 45);
	rect(porteX+31, porteY-227, 24, 45);
	strokeWeight(6);
	stroke(50,15,15);
	rect(porteX-130, porteY-240, 55,60); /////////////////// deuxieme fenetres a gauche//droite 2er niveau
	rect(porteX+75,porteY-240,55,60);
	line(porteX-103,porteY-240, porteX-103, porteY-185);
	line(porteX+102,porteY-240, porteX+102, porteY-185);
	
	stroke(0);
	strokeWeight(1);
	fill(210,200,180);        /////// 2eme patio 
	rect(porteX-65, porteY-140, 130, 10);
	rect(porteX-68, porteY-150,136, 10);
	strokeWeight(3);					////////// rampes pour 2eme patio
	stroke(15);
	line(porteX-69, porteY-179, porteX-69, porteY-149);
	line(porteX-63, porteY-179, porteX-63, porteY-149);
	line(porteX-57, porteY-179, porteX-57, porteY-149);
	line(porteX-51, porteY-179, porteX-51, porteY-149);
	line(porteX-45, porteY-179, porteX-45, porteY-149);
	line(porteX-39, porteY-179, porteX-39, porteY-149);
	line(porteX-33, porteY-179, porteX-33, porteY-149);
	line(porteX-27, porteY-179, porteX-27, porteY-149);
	line(porteX-21, porteY-179, porteX-21, porteY-149);
	line(porteX-15, porteY-179, porteX-15, porteY-149);
	line(porteX-9, porteY-179, porteX-9, porteY-149);
	line(porteX-3, porteY-179, porteX-3, porteY-149);
	line(porteX, porteY-179, porteX, porteY-149); // centre des rampes du 2eme patio
	line(porteX+69, porteY-179, porteX+69, porteY-149); 
	line(porteX+63, porteY-179, porteX+63, porteY-149);
	line(porteX+57, porteY-179, porteX+57, porteY-149);
	line(porteX+51, porteY-179, porteX+51, porteY-149);
	line(porteX+45, porteY-179, porteX+45, porteY-149);
	line(porteX+39, porteY-179, porteX+39, porteY-149);
	line(porteX+33, porteY-179, porteX+33, porteY-149);
	line(porteX+27, porteY-179, porteX+27, porteY-149);
	line(porteX+21, porteY-179, porteX+21, porteY-149);
	line(porteX+15, porteY-179, porteX+15, porteY-149);
	line(porteX+9, porteY-179, porteX+9, porteY-149);
	line(porteX+3, porteY-179, porteX+3, porteY-149);
	strokeWeight(2);			
	line(porteX-69, porteY-153, porteX+69, porteY-153);
	line(porteX-70, porteY-180, porteX+70, porteY-180);
	fill(210,200,180);        													/////// 3eme patio 
	rect(porteX-65, porteY-260, 130, 10);
	rect(porteX-68, porteY-250,136, 10);
	strokeWeight(6);
	stroke(50,15,15);
	fill(35,35,65);	
	rect(porteX-130, porteY-340, 55,60); /////////////////// 3eme fenetres a gauche//droite du 3er niveau
	rect(porteX+75,porteY-340,55,60);
	line(porteX-103,porteY-340, porteX-103, porteY-285);
	line(porteX+102,porteY-340, porteX+102, porteY-285);
	strokeWeight(1);
	stroke(120);
	fill(245,245,235); 				/// les 2 portes du troisieme patios
	rect(porteX-50, porteY-340, 34,80);
	rect(porteX+15, porteY-340, 34, 80);
	strokeWeight(2);
	fill(35,35,65);						//// fenetre des 3eme portes 
	rect(porteX-45, porteY-337, 24, 45);
	rect(porteX+21, porteY-337, 24, 45);
	strokeWeight(3);					////////// rampes pour 3eme patio
	stroke(15);
	line(porteX-69, porteY-289, porteX-69, porteY-259);
	line(porteX-63, porteY-289, porteX-63, porteY-259);
	line(porteX-57, porteY-289, porteX-57, porteY-259);
	line(porteX-51, porteY-289, porteX-51, porteY-259);
	line(porteX-45, porteY-289, porteX-45, porteY-259);
	line(porteX-39, porteY-289, porteX-39, porteY-259);
	line(porteX-33, porteY-289, porteX-33, porteY-259);
	line(porteX-27, porteY-289, porteX-27, porteY-259);
	line(porteX-21, porteY-289, porteX-21, porteY-259);
	line(porteX-15, porteY-289, porteX-15, porteY-259);
	line(porteX-9, porteY-289, porteX-9, porteY-259);
	line(porteX-3, porteY-289, porteX-3, porteY-259);
	line(porteX, porteY-289, porteX, porteY-259); // centre des rampes du 2eme patio
	line(porteX+69, porteY-289, porteX+69, porteY-259); 
	line(porteX+63, porteY-289, porteX+63, porteY-259);
	line(porteX+57, porteY-289, porteX+57, porteY-259);
	line(porteX+51, porteY-289, porteX+51, porteY-259);
	line(porteX+45, porteY-289, porteX+45, porteY-259);
	line(porteX+39, porteY-289, porteX+39, porteY-259);
	line(porteX+33, porteY-289, porteX+33, porteY-259);
	line(porteX+27, porteY-289, porteX+27, porteY-259);
	line(porteX+21, porteY-289, porteX+21, porteY-259);
	line(porteX+15, porteY-289, porteX+15, porteY-259);
	line(porteX+9, porteY-289, porteX+9, porteY-259);
	line(porteX+3, porteY-289, porteX+3, porteY-259);
		strokeWeight(2);			
	line(porteX-69, porteY-263, porteX+69, porteY-263);
	line(porteX-70, porteY-290, porteX+70, porteY-290);
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////// maison #2 
	
	strokeWeight(1);
	stroke(0);
	fill(134, 114, 89);
	rect(200,830,280,370);
	
	///////// briques claires (DIFFERENT PATTERN)
	
	BriqueX = 210;
	BriqueY= 860;
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
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////// maison #3 
	strokeWeight(1);
	stroke(0);
	fill(131, 52, 0);
	rect(480,800,300,400);
	
	BriqueX = 680;
	BriqueY= 830;
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
	
	BriqueX = 650;
	BriqueY= 1950;
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
	
	BriqueX = 530;
	BriqueY= 940;
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
	
	// centre maison 2 = 630 en x. Sol en y = 1200, 1 er étage 1070 et deuxieme 945. toit =  820.  
	var porteX = 630;  //mettre le centre de la maison
	var porteY =1200;  //mettre le rez de chaussée de la maison   
	noStroke();
	fill(245,245,235);   //1ere porte
	rect(porteX-35, porteY-120,72,85);
	strokeWeight(3);
	stroke(120);
	line(porteX, porteY-120,porteX, porteY-35);
	line(porteX-4, porteY-68, porteX-4, porteY-63);
	line(porteX+4, porteY-68, porteX+4, porteY-63);
	fill(35,35,65);
	rect(porteX-30, porteY-115,23,45);    /// fenetre dans la 1ere porte
	rect(porteX+7,porteY-115,23,45);
	strokeWeight(6);
	stroke(80,35,35);
	rect(porteX-120, porteY-120, 40,55); /////////////////// premieres fenetres a gauche//droite 1er niveau
	rect(porteX+80,porteY-120,40,55);
	strokeWeight(1)
	stroke(0);
	fill(210,200,200);
	rect(porteX-65, porteY-33, 130, 3); ////////////////////////// // 1er patio 
	fill(135,120,120);
	rect(porteX-65, porteY-30, 130, 12);
	fill(85,70,70,75);
	rect(porteX-65, porteY-18, 130, 16);
	
	fill(135,85,85);
	rect(porteX-30, porteY-28, 60, 5);   // 1er escaliers
	rect(porteX-30, porteY-19, 60, 5);
	rect(porteX-30, porteY-9, 60, 5);
	strokeWeight(3);
	stroke(25);
	line(porteX-31, porteY-30, porteX-32, porteY);  //rampes 1er escalier
	line(porteX+31, porteY-30, porteX+32, porteY);
	line(porteX-66, porteY-60, porteX-66, porteY-32); //rampes 1er patio de gauche
	line(porteX-60, porteY-60, porteX-60, porteY-32);
	line(porteX-54, porteY-60, porteX-54, porteY-32);
	line(porteX-48, porteY-60, porteX-48, porteY-32);
	line(porteX-42, porteY-62, porteX-42, porteY-32);
	line(porteX+66, porteY-60, porteX+66, porteY-32); //rampes 1er patio de droite
	line(porteX+60, porteY-60, porteX+60, porteY-32);
	line(porteX+54, porteY-60, porteX+54, porteY-32);
	line(porteX+48, porteY-60, porteX+48, porteY-32);
	line(porteX+42, porteY-62, porteX+42, porteY-32);
	strokeWeight(4)
	line(porteX-67, porteY-62, porteX-40, porteY-62); //gauche
	line(porteX+67, porteY-62, porteX+40, porteY-62); //droite
	
	
  
	noStroke();
	fill(135,85,85);//////////////////////////// les longues escaliers
	rect(porteX-148, porteY-5, 50, 4); 
	rect(porteX-148, porteY-13, 50, 4);
	rect(porteX-148, porteY-20, 50, 4);
	rect(porteX-148, porteY-28, 50, 4);
	rect(porteX-148, porteY-37, 50, 4);
	rect(porteX-148, porteY-45, 50, 4);
	strokeWeight(4);
	stroke(135,85,85);
	line(porteX-145, porteY-54, porteX-100,  porteY-53);
	line(porteX-143, porteY-64, porteX-100,  porteY-63);
	line(porteX-141, porteY-73, porteX-99,  porteY-72);
	line(porteX-138, porteY-83, porteX-99,  porteY-80);
	line(porteX-134, porteY-94, porteX-98,  porteY-89);
	line(porteX-134, porteY-96, porteX-97,  porteY-89);
	line(porteX-128, porteY-106, porteX-96,  porteY-100);
	line(porteX-127, porteY-109, porteX-96,  porteY-100);
	line(porteX-119, porteY-120, porteX-95,  porteY-109);
	line(porteX-121, porteY-117, porteX-94,  porteY-109);
	line(porteX-109, porteY-129, porteX-94,  porteY-119);
	line(porteX-106, porteY-129, porteX-92,  porteY-119);
	line(porteX-97, porteY-139, porteX-85,  porteY-126);
	line(porteX-95, porteY-139, porteX-85,  porteY-126);
	line(porteX-93, porteY-139, porteX-85,  porteY-126);
	line(porteX-81, porteY-143, porteX-79,  porteY-129);
	line(porteX-83, porteY-143, porteX-79,  porteY-129);
	line(porteX-79, porteY-143, porteX-79,  porteY-129);
	line(porteX-72, porteY-147, porteX-72,  porteY-132);
	noStroke();//////////////////////////// rampes des longues escaliersss
	fill(25);
	rect(porteX-149, porteY-33, 2, 28);
	rect(porteX-149, porteY-56, 2, 28);
	rect(porteX-149, porteY-73, 2, 28);
	rect(porteX-146, porteY-82, 2, 28);
	rect(porteX-144, porteY-92, 2, 28);
	rect(porteX-141, porteY-101, 2, 28);
	rect(porteX-138, porteY-111, 2, 28);
	rect(porteX-134, porteY-124, 2, 28);
	rect(porteX-128, porteY-135, 2, 28);
	rect(porteX-120, porteY-148, 2, 28);
	rect(porteX-114, porteY-153, 2, 28);
	rect(porteX-108, porteY-158, 2, 28);
	rect(porteX-102, porteY-164, 2, 28);
	rect(porteX-96, porteY-167, 2, 28);
	rect(porteX-89, porteY-170, 2, 28);
	rect(porteX-82, porteY-172, 2, 28);
	rect(porteX-77, porteY-172, 2, 28);
	rect(porteX-72, porteY-174, 2, 28);// dernier bout de rampe de gauche
	rect(porteX-98, porteY-33, 2, 28);
	rect(porteX-98, porteY-82, 2, 28);
	rect(porteX-98, porteY-60, 2, 28);
	rect(porteX-98, porteY-100, 2, 28);
	rect(porteX-98, porteY-117, 2, 28);
	rect(porteX-97, porteY-117, 2, 28);
	rect(porteX-96, porteY-125, 2, 28);
	rect(porteX-94, porteY-137, 2, 28);
	rect(porteX-92, porteY-147, 2, 28);
	rect(porteX-87, porteY-149, 2, 28);
	rect(porteX-83, porteY-153, 2, 28);
	rect(porteX-79, porteY-155, 2, 28);
	rect(porteX-73, porteY-158, 2, 28);
	strokeWeight(3);
	stroke(25);
	line(porteX-149, porteY-33, porteX-148, porteY-54);
	line(porteX-148, porteY-54, porteX-142, porteY-91)
	line(porteX-142, porteY-91, porteX-130, porteY-130);
	line(porteX-130, porteY-130,porteX-115, porteY-153);
	line(porteX-115, porteY-153,porteX-100, porteY-163);
	line(porteX-100, porteY-163,porteX-80, porteY-170);
	line(porteX-80, porteY-170,porteX-70, porteY-171);
	line(porteX-95, porteY-115,porteX-93, porteY-130);
	line(porteX-93, porteY-130,porteX-88, porteY-145);
	line(porteX-88, porteY-145, porteX-82, porteY-150);
	line(porteX-82, porteY-150, porteX-75, porteY-155);
	line(porteX-75, porteY-155, porteX-70, porteY-157);
	
	strokeWeight(1);
	stroke(120);
	fill(245,245,235); 					/// les 2 portes du deuxieme patios
	rect(porteX-60, porteY-230, 34,80);
	rect(porteX-17, porteY-230, 34, 80);
	rect(porteX+26, porteY-230, 34, 80);
	strokeWeight(2);
	fill(35,35,65);				//// fenetre des 3  deuxieme portes 
	rect(porteX-55, porteY-227, 24, 45);
	rect(porteX-12, porteY-227, 24, 45);
	rect(porteX+31, porteY-227, 24, 45);
	strokeWeight(6);
	stroke(50,15,15);
	rect(porteX-130, porteY-240, 55,60); /////////////////// deuxieme fenetres a gauche//droite 2er niveau
	rect(porteX+75,porteY-240,55,60);
	line(porteX-103,porteY-240, porteX-103, porteY-185);
	line(porteX+102,porteY-240, porteX+102, porteY-185);
	
	stroke(0);
	strokeWeight(1);
	fill(210,200,180);        /////// 2eme patio 
	rect(porteX-65, porteY-140, 130, 10);
	rect(porteX-68, porteY-150,136, 10);
	strokeWeight(3);					////////// rampes pour 2eme patio
	stroke(15);
	line(porteX-69, porteY-179, porteX-69, porteY-149);
	line(porteX-63, porteY-179, porteX-63, porteY-149);
	line(porteX-57, porteY-179, porteX-57, porteY-149);
	line(porteX-51, porteY-179, porteX-51, porteY-149);
	line(porteX-45, porteY-179, porteX-45, porteY-149);
	line(porteX-39, porteY-179, porteX-39, porteY-149);
	line(porteX-33, porteY-179, porteX-33, porteY-149);
	line(porteX-27, porteY-179, porteX-27, porteY-149);
	line(porteX-21, porteY-179, porteX-21, porteY-149);
	line(porteX-15, porteY-179, porteX-15, porteY-149);
	line(porteX-9, porteY-179, porteX-9, porteY-149);
	line(porteX-3, porteY-179, porteX-3, porteY-149);
	line(porteX, porteY-179, porteX, porteY-149); // centre des rampes du 2eme patio
	line(porteX+69, porteY-179, porteX+69, porteY-149); 
	line(porteX+63, porteY-179, porteX+63, porteY-149);
	line(porteX+57, porteY-179, porteX+57, porteY-149);
	line(porteX+51, porteY-179, porteX+51, porteY-149);
	line(porteX+45, porteY-179, porteX+45, porteY-149);
	line(porteX+39, porteY-179, porteX+39, porteY-149);
	line(porteX+33, porteY-179, porteX+33, porteY-149);
	line(porteX+27, porteY-179, porteX+27, porteY-149);
	line(porteX+21, porteY-179, porteX+21, porteY-149);
	line(porteX+15, porteY-179, porteX+15, porteY-149);
	line(porteX+9, porteY-179, porteX+9, porteY-149);
	line(porteX+3, porteY-179, porteX+3, porteY-149);
	strokeWeight(2);			
	line(porteX-69, porteY-153, porteX+69, porteY-153);
	line(porteX-70, porteY-180, porteX+70, porteY-180);
	fill(210,200,180);        													/////// 3eme patio 
	rect(porteX-65, porteY-260, 130, 10);
	rect(porteX-68, porteY-250,136, 10);
	strokeWeight(6);
	stroke(50,15,15);
	fill(35,35,65);	
	rect(porteX-130, porteY-340, 55,60); /////////////////// 3eme fenetres a gauche//droite du 3er niveau
	rect(porteX+75,porteY-340,55,60);
	line(porteX-103,porteY-340, porteX-103, porteY-285);
	line(porteX+102,porteY-340, porteX+102, porteY-285);
	strokeWeight(1);
	stroke(120);
	fill(245,245,235);	/// les 2 portes du troisieme patios
	rect(porteX-50, porteY-340, 34,80);
	rect(porteX+15, porteY-340, 34, 80);
	strokeWeight(2);
	fill(35,35,65);						//// fenetre des 3eme portes 
	rect(porteX-45, porteY-337, 24, 45);
	rect(porteX+21, porteY-337, 24, 45);
	strokeWeight(3);					////////// rampes pour 3eme patio
	stroke(15);
	line(porteX-69, porteY-289, porteX-69, porteY-259);
	line(porteX-63, porteY-289, porteX-63, porteY-259);
	line(porteX-57, porteY-289, porteX-57, porteY-259);
	line(porteX-51, porteY-289, porteX-51, porteY-259);
	line(porteX-45, porteY-289, porteX-45, porteY-259);
	line(porteX-39, porteY-289, porteX-39, porteY-259);
	line(porteX-33, porteY-289, porteX-33, porteY-259);
	line(porteX-27, porteY-289, porteX-27, porteY-259);
	line(porteX-21, porteY-289, porteX-21, porteY-259);
	line(porteX-15, porteY-289, porteX-15, porteY-259);
	line(porteX-9, porteY-289, porteX-9, porteY-259);
	line(porteX-3, porteY-289, porteX-3, porteY-259);
	line(porteX, porteY-289, porteX, porteY-259); // centre des rampes du 2eme patio
	line(porteX+69, porteY-289, porteX+69, porteY-259); 
	line(porteX+63, porteY-289, porteX+63, porteY-259);
	line(porteX+57, porteY-289, porteX+57, porteY-259);
	line(porteX+51, porteY-289, porteX+51, porteY-259);
	line(porteX+45, porteY-289, porteX+45, porteY-259);
	line(porteX+39, porteY-289, porteX+39, porteY-259);
	line(porteX+33, porteY-289, porteX+33, porteY-259);
	line(porteX+27, porteY-289, porteX+27, porteY-259);
	line(porteX+21, porteY-289, porteX+21, porteY-259);
	line(porteX+15, porteY-289, porteX+15, porteY-259);
	line(porteX+9, porteY-289, porteX+9, porteY-259);
	line(porteX+3, porteY-289, porteX+3, porteY-259);
		strokeWeight(2);			
	line(porteX-69, porteY-263, porteX+69, porteY-263);
	line(porteX-70, porteY-290, porteX+70, porteY-290);
	
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
	BriqueY2 = 840;
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
	BriqueY2 = 820;
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
	
	BriqueX2 = 1460;
	BriqueY2 = 950;
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
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////// maison #8
	
	
	strokeWeight(1);
	stroke(0);
	fill(141, 114, 78);
	rect(1990,800,290,400);
	
	BriqueX2 = 2060;
	BriqueY2 = 815;
	stroke(170);
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
	
	BriqueX = 2200;
	BriqueY= 1120;
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
	
	BriqueX2 = 2160;
	BriqueY2 = 840;
	stroke(170);
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
	
	BriqueX = 2210;
	BriqueY= 980;
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
	
	// centre maison 8 = 2135 en x. Sol en y = 1200  
	var porteX = 2135;  //mettre le centre de la maison
	var porteY =1200;  //mettre le rez de chaussée de la maison   
	noStroke();
	fill(245,245,235);   //1ere porte
	rect(porteX-35, porteY-120,72,85);
	strokeWeight(3);
	stroke(120);
	line(porteX, porteY-120,porteX, porteY-35);
	line(porteX-4, porteY-68, porteX-4, porteY-63);
	line(porteX+4, porteY-68, porteX+4, porteY-63);
	fill(35,35,65);
	rect(porteX-30, porteY-115,23,45);    /// fenetre dans la 1ere porte
	rect(porteX+7,porteY-115,23,45);
	strokeWeight(6);
	stroke(80,35,35);
	rect(porteX-120, porteY-120, 40,55); /////////////////// premieres fenetres a gauche//droite 1er niveau
	rect(porteX+80,porteY-120,40,55);
	strokeWeight(1)
	stroke(0);
	fill(210,200,200);
	rect(porteX-65, porteY-33, 130, 3); ////////////////////////// // 1er patio 
	fill(135,120,120);
	rect(porteX-65, porteY-30, 130, 12);
	fill(85,70,70,75);
	rect(porteX-65, porteY-18, 130, 16);
	
	fill(135,85,85);
	rect(porteX-30, porteY-28, 60, 5);   // 1er escaliers
	rect(porteX-30, porteY-19, 60, 5);
	rect(porteX-30, porteY-9, 60, 5);
	strokeWeight(3);
	stroke(25);
	line(porteX-31, porteY-30, porteX-32, porteY);  //rampes 1er escalier
	line(porteX+31, porteY-30, porteX+32, porteY);
	line(porteX-66, porteY-60, porteX-66, porteY-32); //rampes 1er patio de gauche
	line(porteX-60, porteY-60, porteX-60, porteY-32);
	line(porteX-54, porteY-60, porteX-54, porteY-32);
	line(porteX-48, porteY-60, porteX-48, porteY-32);
	line(porteX-42, porteY-62, porteX-42, porteY-32);
	line(porteX+66, porteY-60, porteX+66, porteY-32); //rampes 1er patio de droite
	line(porteX+60, porteY-60, porteX+60, porteY-32);
	line(porteX+54, porteY-60, porteX+54, porteY-32);
	line(porteX+48, porteY-60, porteX+48, porteY-32);
	line(porteX+42, porteY-62, porteX+42, porteY-32);
	strokeWeight(4)
	line(porteX-67, porteY-62, porteX-40, porteY-62); //gauche
	line(porteX+67, porteY-62, porteX+40, porteY-62); //droite
	
	
  	noStroke();
	fill(135,85,85);//////////////////////////// les longues escaliers
	rect(porteX+98, porteY-5, 50, 4); 
	rect(porteX+98, porteY-13, 50, 4);
	rect(porteX+98, porteY-20, 50, 4);
	rect(porteX+98, porteY-28, 50, 4);
	rect(porteX+98, porteY-37, 50, 4);
	rect(porteX+98, porteY-45, 50, 4);
	strokeWeight(4);
	stroke(135,85,85);
	line(porteX+145, porteY-54, porteX+100,  porteY-53);
	line(porteX+143, porteY-64, porteX+100,  porteY-63);
	line(porteX+141, porteY-73, porteX+99,  porteY-72);
	line(porteX+138, porteY-83, porteX+99,  porteY-80);
	line(porteX+134, porteY-94, porteX+98,  porteY-89);
	line(porteX+134, porteY-96, porteX+97,  porteY-89);
	line(porteX+128, porteY-106, porteX+96,  porteY-100);
	line(porteX+127, porteY-109, porteX+96,  porteY-100);
	line(porteX+119, porteY-120, porteX+95,  porteY-109);
	line(porteX+121, porteY-117, porteX+94,  porteY-109);
	line(porteX+109, porteY-129, porteX+94,  porteY-119);
	line(porteX+106, porteY-129, porteX+92,  porteY-119);
	line(porteX+97, porteY-139, porteX+85,  porteY-126);
	line(porteX+95, porteY-139, porteX+85,  porteY-126);
	line(porteX+93, porteY-139, porteX+85,  porteY-126);
	line(porteX+81, porteY-143, porteX+79,  porteY-129);
	line(porteX+83, porteY-143, porteX+79,  porteY-129);
	line(porteX+79, porteY-143, porteX+79,  porteY-129);
	line(porteX+72, porteY-147, porteX+72,  porteY-132);
	noStroke();/////////////////////////// rampes des longues escaliersss
	fill(25);
	rect(porteX+147, porteY-33, 2, 28);
	rect(porteX+147, porteY-56, 2, 28);
	rect(porteX+147, porteY-73, 2, 28);
	rect(porteX+144, porteY-82, 2, 28);
	rect(porteX+142, porteY-92, 2, 28);
	rect(porteX+139, porteY-101, 2, 28);
	rect(porteX+136, porteY-111, 2, 28);
	rect(porteX+132, porteY-124, 2, 28);
	rect(porteX+126, porteY-135, 2, 28);
	rect(porteX+118, porteY-148, 2, 28);
	rect(porteX+112, porteY-153, 2, 28);
	rect(porteX+106, porteY-158, 2, 28);
	rect(porteX+100, porteY-164, 2, 28);
	rect(porteX+94, porteY-167, 2, 28);
	rect(porteX+87, porteY-170, 2, 28);
	rect(porteX+80, porteY-172, 2, 28);
	rect(porteX+75, porteY-172, 2, 28);
	rect(porteX+70, porteY-174, 2, 28);// dernier bout de rampe de gauche
	rect(porteX+96, porteY-33, 2, 28);
	rect(porteX+96, porteY-82, 2, 28);
	rect(porteX+96, porteY-60, 2, 28);
	rect(porteX+96, porteY-100, 2, 28);
	rect(porteX+96, porteY-117, 2, 28);
	rect(porteX+95, porteY-117, 2, 28);
	rect(porteX+94, porteY-125, 2, 28);
	rect(porteX+92, porteY-137, 2, 28);
	rect(porteX+90, porteY-147, 2, 28);
	rect(porteX+85, porteY-149, 2, 28);
	rect(porteX+81, porteY-153, 2, 28);
	rect(porteX+77, porteY-155, 2, 28);
	rect(porteX+71, porteY-158, 2, 28);
	strokeWeight(3);
	stroke(25);
	line(porteX+149, porteY-33, porteX+148, porteY-54);
	line(porteX+148, porteY-54, porteX+142, porteY-91)
	line(porteX+142, porteY-91, porteX+130, porteY-130);
	line(porteX+130, porteY-130,porteX+115, porteY-153);
	line(porteX+115, porteY-153,porteX+100, porteY-163);
	line(porteX+100, porteY-163,porteX+80, porteY-170);
	line(porteX+80, porteY-170,porteX+70, porteY-171);
	line(porteX+95, porteY-115,porteX+93, porteY-130);
	line(porteX+93, porteY-130,porteX+88, porteY-145);
	line(porteX+88, porteY-145, porteX+82, porteY-150);
	line(porteX+82, porteY-150, porteX+75, porteY-155);
	line(porteX+75, porteY-155, porteX+70, porteY-157);
	noStroke();

	
	
	strokeWeight(1);
	stroke(120);
	fill(245,245,235); 					/// les 2 portes du deuxieme patios
	rect(porteX-60, porteY-230, 34,80);
	rect(porteX-17, porteY-230, 34, 80);
	rect(porteX+26, porteY-230, 34, 80);
	strokeWeight(2);
	fill(35,35,65);				//// fenetre des 3  deuxieme portes 
	rect(porteX-55, porteY-227, 24, 45);
	rect(porteX-12, porteY-227, 24, 45);
	rect(porteX+31, porteY-227, 24, 45);
	strokeWeight(6);
	stroke(50,15,15);
	rect(porteX-130, porteY-240, 55,60); /////////////////// deuxieme fenetres a gauche//droite 2er niveau
	rect(porteX+75,porteY-240,55,60);
	line(porteX-103,porteY-240, porteX-103, porteY-185);
	line(porteX+102,porteY-240, porteX+102, porteY-185);
	
	stroke(0);
	strokeWeight(1);
	fill(210,200,180);        /////// 2eme patio 
	rect(porteX-65, porteY-140, 130, 10);
	rect(porteX-68, porteY-150,136, 10);
	strokeWeight(3);					////////// rampes pour 2eme patio
	stroke(15);
	line(porteX-69, porteY-179, porteX-69, porteY-149);
	line(porteX-63, porteY-179, porteX-63, porteY-149);
	line(porteX-57, porteY-179, porteX-57, porteY-149);
	line(porteX-51, porteY-179, porteX-51, porteY-149);
	line(porteX-45, porteY-179, porteX-45, porteY-149);
	line(porteX-39, porteY-179, porteX-39, porteY-149);
	line(porteX-33, porteY-179, porteX-33, porteY-149);
	line(porteX-27, porteY-179, porteX-27, porteY-149);
	line(porteX-21, porteY-179, porteX-21, porteY-149);
	line(porteX-15, porteY-179, porteX-15, porteY-149);
	line(porteX-9, porteY-179, porteX-9, porteY-149);
	line(porteX-3, porteY-179, porteX-3, porteY-149);
	line(porteX, porteY-179, porteX, porteY-149); // centre des rampes du 2eme patio
	line(porteX+69, porteY-179, porteX+69, porteY-149); 
	line(porteX+63, porteY-179, porteX+63, porteY-149);
	line(porteX+57, porteY-179, porteX+57, porteY-149);
	line(porteX+51, porteY-179, porteX+51, porteY-149);
	line(porteX+45, porteY-179, porteX+45, porteY-149);
	line(porteX+39, porteY-179, porteX+39, porteY-149);
	line(porteX+33, porteY-179, porteX+33, porteY-149);
	line(porteX+27, porteY-179, porteX+27, porteY-149);
	line(porteX+21, porteY-179, porteX+21, porteY-149);
	line(porteX+15, porteY-179, porteX+15, porteY-149);
	line(porteX+9, porteY-179, porteX+9, porteY-149);
	line(porteX+3, porteY-179, porteX+3, porteY-149);
	strokeWeight(2);			
	line(porteX-69, porteY-153, porteX+69, porteY-153);
	line(porteX-70, porteY-180, porteX+70, porteY-180);
	fill(210,200,180);        													/////// 3eme patio 
	rect(porteX-65, porteY-260, 130, 10);
	rect(porteX-68, porteY-250,136, 10);
	strokeWeight(6);
	stroke(50,15,15);
	fill(35,35,65);	
	rect(porteX-130, porteY-340, 55,60); /////////////////// 3eme fenetres a gauche//droite du 3er niveau
	rect(porteX+75,porteY-340,55,60);
	line(porteX-103,porteY-340, porteX-103, porteY-285);
	line(porteX+102,porteY-340, porteX+102, porteY-285);
	strokeWeight(1);
	stroke(120);
	fill(245,245,235); 				/// les 2 portes du troisieme patios
	rect(porteX-50, porteY-340, 34,80);
	rect(porteX+15, porteY-340, 34, 80);
	strokeWeight(2);
	fill(35,35,65);						//// fenetre des 3eme portes 
	rect(porteX-45, porteY-337, 24, 45);
	rect(porteX+21, porteY-337, 24, 45);
	strokeWeight(3);					////////// rampes pour 3eme patio
	stroke(15);
	line(porteX-69, porteY-289, porteX-69, porteY-259);
	line(porteX-63, porteY-289, porteX-63, porteY-259);
	line(porteX-57, porteY-289, porteX-57, porteY-259);
	line(porteX-51, porteY-289, porteX-51, porteY-259);
	line(porteX-45, porteY-289, porteX-45, porteY-259);
	line(porteX-39, porteY-289, porteX-39, porteY-259);
	line(porteX-33, porteY-289, porteX-33, porteY-259);
	line(porteX-27, porteY-289, porteX-27, porteY-259);
	line(porteX-21, porteY-289, porteX-21, porteY-259);
	line(porteX-15, porteY-289, porteX-15, porteY-259);
	line(porteX-9, porteY-289, porteX-9, porteY-259);
	line(porteX-3, porteY-289, porteX-3, porteY-259);
	line(porteX, porteY-289, porteX, porteY-259); // centre des rampes du 2eme patio
	line(porteX+69, porteY-289, porteX+69, porteY-259); 
	line(porteX+63, porteY-289, porteX+63, porteY-259);
	line(porteX+57, porteY-289, porteX+57, porteY-259);
	line(porteX+51, porteY-289, porteX+51, porteY-259);
	line(porteX+45, porteY-289, porteX+45, porteY-259);
	line(porteX+39, porteY-289, porteX+39, porteY-259);
	line(porteX+33, porteY-289, porteX+33, porteY-259);
	line(porteX+27, porteY-289, porteX+27, porteY-259);
	line(porteX+21, porteY-289, porteX+21, porteY-259);
	line(porteX+15, porteY-289, porteX+15, porteY-259);
	line(porteX+9, porteY-289, porteX+9, porteY-259);
	line(porteX+3, porteY-289, porteX+3, porteY-259);
		strokeWeight(2);			
	line(porteX-69, porteY-263, porteX+69, porteY-263);
	line(porteX-70, porteY-290, porteX+70, porteY-290);
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////// maison #9
	
	strokeWeight(1);
	stroke(0);
	fill(141, 114, 78);
	rect(2280,800,290,400);
	
	// centre maison 9 = 2425 en x. Sol en y = 1200 
	var porteX = 2425;  //mettre le centre de la maison
	var porteY =1200;  //mettre le rez de chaussée de la maison   
	noStroke();
	fill(245,245,235);   //1ere porte
	rect(porteX-35, porteY-120,72,85);
	strokeWeight(3);
	stroke(120);
	line(porteX, porteY-120,porteX, porteY-35);
	line(porteX-4, porteY-68, porteX-4, porteY-63);
	line(porteX+4, porteY-68, porteX+4, porteY-63);
	fill(35,35,65);
	rect(porteX-30, porteY-115,23,45);    /// fenetre dans la 1ere porte
	rect(porteX+7,porteY-115,23,45);
	strokeWeight(6);
	stroke(80,35,35);
	rect(porteX-120, porteY-120, 40,55); /////////////////// premieres fenetres a gauche//droite 1er niveau
	rect(porteX+80,porteY-120,40,55);
	strokeWeight(1)
	stroke(0);
	fill(210,200,200);
	rect(porteX-65, porteY-33, 130, 3); ////////////////////////// // 1er patio 
	fill(135,120,120);
	rect(porteX-65, porteY-30, 130, 12);
	fill(85,70,70,75);
	rect(porteX-65, porteY-18, 130, 16);
	
	fill(135,85,85);
	rect(porteX-30, porteY-28, 60, 5);   // 1er escaliers
	rect(porteX-30, porteY-19, 60, 5);
	rect(porteX-30, porteY-9, 60, 5);
	strokeWeight(3);
	stroke(25);
	line(porteX-31, porteY-30, porteX-32, porteY);  //rampes 1er escalier
	line(porteX+31, porteY-30, porteX+32, porteY);
	line(porteX-66, porteY-60, porteX-66, porteY-32); //rampes 1er patio de gauche
	line(porteX-60, porteY-60, porteX-60, porteY-32);
	line(porteX-54, porteY-60, porteX-54, porteY-32);
	line(porteX-48, porteY-60, porteX-48, porteY-32);
	line(porteX-42, porteY-62, porteX-42, porteY-32);
	line(porteX+66, porteY-60, porteX+66, porteY-32); //rampes 1er patio de droite
	line(porteX+60, porteY-60, porteX+60, porteY-32);
	line(porteX+54, porteY-60, porteX+54, porteY-32);
	line(porteX+48, porteY-60, porteX+48, porteY-32);
	line(porteX+42, porteY-62, porteX+42, porteY-32);
	strokeWeight(4)
	line(porteX-67, porteY-62, porteX-40, porteY-62); //gauche
	line(porteX+67, porteY-62, porteX+40, porteY-62); //droite
	
	
  
	noStroke();
	fill(135,85,85);//////////////////////////// les longues escaliers
	rect(porteX-148, porteY-5, 50, 4); 
	rect(porteX-148, porteY-13, 50, 4);
	rect(porteX-148, porteY-20, 50, 4);
	rect(porteX-148, porteY-28, 50, 4);
	rect(porteX-148, porteY-37, 50, 4);
	rect(porteX-148, porteY-45, 50, 4);
	strokeWeight(4);
	stroke(135,85,85);
	line(porteX-145, porteY-54, porteX-100,  porteY-53);
	line(porteX-143, porteY-64, porteX-100,  porteY-63);
	line(porteX-141, porteY-73, porteX-99,  porteY-72);
	line(porteX-138, porteY-83, porteX-99,  porteY-80);
	line(porteX-134, porteY-94, porteX-98,  porteY-89);
	line(porteX-134, porteY-96, porteX-97,  porteY-89);
	line(porteX-128, porteY-106, porteX-96,  porteY-100);
	line(porteX-127, porteY-109, porteX-96,  porteY-100);
	line(porteX-119, porteY-120, porteX-95,  porteY-109);
	line(porteX-121, porteY-117, porteX-94,  porteY-109);
	line(porteX-109, porteY-129, porteX-94,  porteY-119);
	line(porteX-106, porteY-129, porteX-92,  porteY-119);
	line(porteX-97, porteY-139, porteX-85,  porteY-126);
	line(porteX-95, porteY-139, porteX-85,  porteY-126);
	line(porteX-93, porteY-139, porteX-85,  porteY-126);
	line(porteX-81, porteY-143, porteX-79,  porteY-129);
	line(porteX-83, porteY-143, porteX-79,  porteY-129);
	line(porteX-79, porteY-143, porteX-79,  porteY-129);
	line(porteX-72, porteY-147, porteX-72,  porteY-132);
	noStroke();//////////////////////////// rampes des longues escaliersss
	fill(25);
	rect(porteX-149, porteY-33, 2, 28);
	rect(porteX-149, porteY-56, 2, 28);
	rect(porteX-149, porteY-73, 2, 28);
	rect(porteX-146, porteY-82, 2, 28);
	rect(porteX-144, porteY-92, 2, 28);
	rect(porteX-141, porteY-101, 2, 28);
	rect(porteX-138, porteY-111, 2, 28);
	rect(porteX-134, porteY-124, 2, 28);
	rect(porteX-128, porteY-135, 2, 28);
	rect(porteX-120, porteY-148, 2, 28);
	rect(porteX-114, porteY-153, 2, 28);
	rect(porteX-108, porteY-158, 2, 28);
	rect(porteX-102, porteY-164, 2, 28);
	rect(porteX-96, porteY-167, 2, 28);
	rect(porteX-89, porteY-170, 2, 28);
	rect(porteX-82, porteY-172, 2, 28);
	rect(porteX-77, porteY-172, 2, 28);
	rect(porteX-72, porteY-174, 2, 28);// dernier bout de rampe de gauche
	rect(porteX-98, porteY-33, 2, 28);
	rect(porteX-98, porteY-82, 2, 28);
	rect(porteX-98, porteY-60, 2, 28);
	rect(porteX-98, porteY-100, 2, 28);
	rect(porteX-98, porteY-117, 2, 28);
	rect(porteX-97, porteY-117, 2, 28);
	rect(porteX-96, porteY-125, 2, 28);
	rect(porteX-94, porteY-137, 2, 28);
	rect(porteX-92, porteY-147, 2, 28);
	rect(porteX-87, porteY-149, 2, 28);
	rect(porteX-83, porteY-153, 2, 28);
	rect(porteX-79, porteY-155, 2, 28);
	rect(porteX-73, porteY-158, 2, 28);
	strokeWeight(3);
	stroke(25);
	line(porteX-149, porteY-33, porteX-148, porteY-54);
	line(porteX-148, porteY-54, porteX-142, porteY-91)
	line(porteX-142, porteY-91, porteX-130, porteY-130);
	line(porteX-130, porteY-130,porteX-115, porteY-153);
	line(porteX-115, porteY-153,porteX-100, porteY-163);
	line(porteX-100, porteY-163,porteX-80, porteY-170);
	line(porteX-80, porteY-170,porteX-70, porteY-171);
	line(porteX-95, porteY-115,porteX-93, porteY-130);
	line(porteX-93, porteY-130,porteX-88, porteY-145);
	line(porteX-88, porteY-145, porteX-82, porteY-150);
	line(porteX-82, porteY-150, porteX-75, porteY-155);
	line(porteX-75, porteY-155, porteX-70, porteY-157);
	
	
	
	strokeWeight(1);
	stroke(120);
	fill(245,245,235); 					/// les 2 portes du deuxieme patios
	rect(porteX-60, porteY-230, 34,80);
	rect(porteX-17, porteY-230, 34, 80);
	rect(porteX+26, porteY-230, 34, 80);
	strokeWeight(2);
	fill(35,35,65);				//// fenetre des 3  deuxieme portes 
	rect(porteX-55, porteY-227, 24, 45);
	rect(porteX-12, porteY-227, 24, 45);
	rect(porteX+31, porteY-227, 24, 45);
	strokeWeight(6);
	stroke(50,15,15);
	rect(porteX-130, porteY-240, 55,60); /////////////////// deuxieme fenetres a gauche//droite 2er niveau
	rect(porteX+75,porteY-240,55,60);
	line(porteX-103,porteY-240, porteX-103, porteY-185);
	line(porteX+102,porteY-240, porteX+102, porteY-185);
	
	stroke(0);
	strokeWeight(1);
	fill(210,200,180);        /////// 2eme patio 
	rect(porteX-65, porteY-140, 130, 10);
	rect(porteX-68, porteY-150,136, 10);
	strokeWeight(3);					////////// rampes pour 2eme patio
	stroke(15);
	line(porteX-69, porteY-179, porteX-69, porteY-149);
	line(porteX-63, porteY-179, porteX-63, porteY-149);
	line(porteX-57, porteY-179, porteX-57, porteY-149);
	line(porteX-51, porteY-179, porteX-51, porteY-149);
	line(porteX-45, porteY-179, porteX-45, porteY-149);
	line(porteX-39, porteY-179, porteX-39, porteY-149);
	line(porteX-33, porteY-179, porteX-33, porteY-149);
	line(porteX-27, porteY-179, porteX-27, porteY-149);
	line(porteX-21, porteY-179, porteX-21, porteY-149);
	line(porteX-15, porteY-179, porteX-15, porteY-149);
	line(porteX-9, porteY-179, porteX-9, porteY-149);
	line(porteX-3, porteY-179, porteX-3, porteY-149);
	line(porteX, porteY-179, porteX, porteY-149); // centre des rampes du 2eme patio
	line(porteX+69, porteY-179, porteX+69, porteY-149); 
	line(porteX+63, porteY-179, porteX+63, porteY-149);
	line(porteX+57, porteY-179, porteX+57, porteY-149);
	line(porteX+51, porteY-179, porteX+51, porteY-149);
	line(porteX+45, porteY-179, porteX+45, porteY-149);
	line(porteX+39, porteY-179, porteX+39, porteY-149);
	line(porteX+33, porteY-179, porteX+33, porteY-149);
	line(porteX+27, porteY-179, porteX+27, porteY-149);
	line(porteX+21, porteY-179, porteX+21, porteY-149);
	line(porteX+15, porteY-179, porteX+15, porteY-149);
	line(porteX+9, porteY-179, porteX+9, porteY-149);
	line(porteX+3, porteY-179, porteX+3, porteY-149);
	strokeWeight(2);			
	line(porteX-69, porteY-153, porteX+69, porteY-153);
	line(porteX-70, porteY-180, porteX+70, porteY-180);
	fill(210,200,180);        													/////// 3eme patio 
	rect(porteX-65, porteY-260, 130, 10);
	rect(porteX-68, porteY-250,136, 10);
	strokeWeight(6);
	stroke(50,15,15);
	fill(35,35,65);	
	rect(porteX-130, porteY-340, 55,60); /////////////////// 3eme fenetres a gauche//droite du 3er niveau
	rect(porteX+75,porteY-340,55,60);
	line(porteX-103,porteY-340, porteX-103, porteY-285);
	line(porteX+102,porteY-340, porteX+102, porteY-285);
	strokeWeight(1);
	stroke(120);
	fill(245,245,235); 				/// les 2 portes du troisieme patios
	rect(porteX-50, porteY-340, 34,80);
	rect(porteX+15, porteY-340, 34, 80);
	strokeWeight(2);
	fill(35,35,65);						//// fenetre des 3eme portes 
	rect(porteX-45, porteY-337, 24, 45);
	rect(porteX+21, porteY-337, 24, 45);
	strokeWeight(3);					////////// rampes pour 3eme patio
	stroke(15);
	line(porteX-69, porteY-289, porteX-69, porteY-259);
	line(porteX-63, porteY-289, porteX-63, porteY-259);
	line(porteX-57, porteY-289, porteX-57, porteY-259);
	line(porteX-51, porteY-289, porteX-51, porteY-259);
	line(porteX-45, porteY-289, porteX-45, porteY-259);
	line(porteX-39, porteY-289, porteX-39, porteY-259);
	line(porteX-33, porteY-289, porteX-33, porteY-259);
	line(porteX-27, porteY-289, porteX-27, porteY-259);
	line(porteX-21, porteY-289, porteX-21, porteY-259);
	line(porteX-15, porteY-289, porteX-15, porteY-259);
	line(porteX-9, porteY-289, porteX-9, porteY-259);
	line(porteX-3, porteY-289, porteX-3, porteY-259);
	line(porteX, porteY-289, porteX, porteY-259); // centre des rampes du 2eme patio
	line(porteX+69, porteY-289, porteX+69, porteY-259); 
	line(porteX+63, porteY-289, porteX+63, porteY-259);
	line(porteX+57, porteY-289, porteX+57, porteY-259);
	line(porteX+51, porteY-289, porteX+51, porteY-259);
	line(porteX+45, porteY-289, porteX+45, porteY-259);
	line(porteX+39, porteY-289, porteX+39, porteY-259);
	line(porteX+33, porteY-289, porteX+33, porteY-259);
	line(porteX+27, porteY-289, porteX+27, porteY-259);
	line(porteX+21, porteY-289, porteX+21, porteY-259);
	line(porteX+15, porteY-289, porteX+15, porteY-259);
	line(porteX+9, porteY-289, porteX+9, porteY-259);
	line(porteX+3, porteY-289, porteX+3, porteY-259);
		strokeWeight(2);			
	line(porteX-69, porteY-263, porteX+69, porteY-263);
	line(porteX-70, porteY-290, porteX+70, porteY-290);
	
	////////////////////////////////////////////////////////////////// maison #10
	
	strokeWeight(1);
	stroke(0);
	fill(120, 45, 16);
	rect(2570,830,280,370);

	///////////////////////////////////// FENETRE DE BASE
	noFill();
  	stroke(0);
  	strokeWeight(4);
  	rect(5,6,2850, 1594);
	stroke(35, 15, 0);
	strokeWeight(8);
	rect(13,14,2837, 1584);
}
