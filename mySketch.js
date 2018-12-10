var BriqueX = 0;
var BriqueY = 0;
var BriqueX2 = 0;
var BriqueY2 = 0;

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

function setup(){
  createCanvas(2850, 1600);
  background(255,255,235);
  getJSON('https://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&APPID=c24766a030fea56b0f4b66352b1ecff0',
  function(err, data) {
    if (err !== null) {
      alert('Ça marche pas!! ' + err);
    } else {
      alert('Data: ' + data);
    }
  }); 
}



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
	noStroke();
	rect(-100,802,300,20);
	rect(0,792,100,10);
	fill(25);
	rect(-100,797,100,5);
	rect(100,797,100,5);
	rect(0,787,100,5);
	fill(10);
	rect(0,785,100,2);
	
	
	//// briques foncés
	noFill();
	
	BriqueX2 = 0;
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
	
	// centre maison 1 = 50 en x. Sol en y = 1200 
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
	
	//////maison #2 ////////////////////////////////////////////////////////////////////////////////maison #2 //////////////////
	/////////////////////////////////////maison #2 ///////////////////////////maison #2 //////////////////////////////////////
	///////////maison #2 ////////maison #2 /////////////////////////////////////////////// maison #2 
	
	strokeWeight(1);
	stroke(0);
	fill(134, 114, 89);
	rect(200,830,280,370);
	fill(15);
	rect(201,825,278,5);
	
	///////// briques claires (DIFFERENT PATTERN)
	
	BriqueX = 210;
	BriqueY= 960;
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
	
	BriqueX = 210;
	BriqueY= 835;
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
	
	BriqueX = 210;
	BriqueY= 1135;
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
	
	BriqueX = 310;
	BriqueY= 960;
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
	
	BriqueX = 390;
	BriqueY= 1060;
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
	
	BriqueX = 390;
	BriqueY= 880;
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
	
	var porteX = 340;  //mettre le centre de la maison
	var porteY =1200;  //mettre le rez de chaussée de la maison   
	stroke(25);		 
	strokeWeight(3);
	fill(50);   //1ere porte
	rect(porteX-35, porteY-120,72,85);
	line(porteX, porteY-120,porteX, porteY-35);
	line(porteX-4, porteY-68, porteX-4, porteY-63);
	line(porteX+4, porteY-68, porteX+4, porteY-63);
	fill(35,35,65);
	rect(porteX-30, porteY-115,23,45);    /// fenetre dans la 1ere porte
	rect(porteX+7,porteY-115,23,45);
	strokeWeight(6);
	stroke(15);
	rect(porteX-120, porteY-120, 60,60); /////////////////// premieres fenetres a gauche//droite 1er niveau
	rect(porteX+60,porteY-120,60,60);
	strokeWeight(1)
	stroke(0);
	fill(210,200,200);
	rect(porteX-65, porteY-33, 130, 3); ////////////////////////// // 1er patio 
	fill(35,20,20);
	rect(porteX-65, porteY-30, 130, 12);
	fill(25);
	rect(porteX-65, porteY-18, 130, 16);
	fill(25);//////////////////toit
	rect(porteX-60, 840, 120,10);
	line(porteX-60, 835, porteX-60, 850);
	line(porteX+60, 835, porteX+60, 850);
	
	fill(180,160,150);
	rect(porteX-30, porteY-28, 60, 5);   // 1er escaliers
	rect(porteX-30, porteY-19, 60, 5);
	rect(porteX-30, porteY-9, 60, 5);
	strokeWeight(3);
	stroke(0);
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
	fill(180,160,150);//////////////////////////// les longues escaliers
	rect(porteX-148, porteY-5, 50, 4); 
	rect(porteX-148, porteY-13, 50, 4);
	rect(porteX-148, porteY-20, 50, 4);
	rect(porteX-148, porteY-28, 50, 4);
	rect(porteX-148, porteY-37, 50, 4);
	rect(porteX-148, porteY-45, 50, 4);
	strokeWeight(4);
	stroke(180,160,150);
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
	fill(5);
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
	stroke(5);
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

	
	strokeWeight(3);
	stroke(10);
	fill(25); 					/// les 2 portes du deuxieme patios
	rect(porteX-60, porteY-230, 34,80);
	rect(porteX-17, porteY-230, 34, 80);
	rect(porteX+26, porteY-230, 34, 80);
	strokeWeight(2);
	fill(35,35,65);						//// fenetre des 3  deuxieme portes 
	rect(porteX-51, porteY-227, 15, 45);
	rect(porteX-12, porteY-227, 24, 45);
	rect(porteX+35, porteY-227, 15, 45);
	strokeWeight(6);
	stroke(15);
	rect(porteX-125, porteY-240, 45,70); /////////////////// deuxieme fenetres a gauche//droite 2er niveau
	rect(porteX+80,porteY-240,45,70);
	line(porteX-103,porteY-240, porteX-103, porteY-175);
	line(porteX+102,porteY-240, porteX+102, porteY-175);
	
	stroke(0);
	strokeWeight(1);
	fill(35,20,20);       /////// 2eme patio  
	rect(porteX-65, porteY-140, 130, 10);
	fill(25);
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
	fill(25);        							/////// 3eme patio 
	rect(porteX-65, porteY-260, 130, 10);
	fill(35,20,20);
	rect(porteX-68, porteY-250,136, 10);
	strokeWeight(6);
	stroke(15);
	fill(35,35,65);	
	rect(porteX-125, porteY-340, 45,70); /////////////////// 3eme fenetres a gauche//droite du 3er niveau
	rect(porteX+80,porteY-340,45,70);
	line(porteX-103,porteY-340, porteX-103, porteY-275);
	line(porteX+102,porteY-340, porteX+102, porteY-275);
	strokeWeight(1);
	stroke(12);
	fill(25); 						/// les 2 portes du troisieme patios
	rect(porteX-40, porteY-340, 34,80);
	rect(porteX+10, porteY-340, 34, 80);
	strokeWeight(2);
	fill(35,35,65);							//// fenetre des 3eme portes 
	rect(porteX-33, porteY-337, 20, 45);
	rect(porteX+18, porteY-337, 20, 45);
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
	

	//////////////////////maison #3///////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////maison #3///////////////////////////////////////////////////////////////////////////
	//////////////////////maison #3//////////////////////////////////////////// maison #3 /////maison #3
	strokeWeight(1);
	stroke(0);
	fill(131, 52, 0);
	rect(480,800,300,400);
	fill(25);
	rect(600,790,60,10);
	rect(482,795,296,10);
	
	BriqueX = 500;
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
	
	BriqueX = 680;
	BriqueY= 810;
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
	
	BriqueX = 610;
	BriqueY= 1100;
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
	BriqueY= 1150;
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
	stroke(15);
	rect(porteX-120, porteY-120, 40,55); /////////////////// premieres fenetres a gauche//droite 1er niveau
	rect(porteX+80,porteY-120,40,55);
	strokeWeight(1)
	stroke(0);
	fill(210,200,200);
	rect(porteX-65, porteY-33, 130, 3); ////////////////////////// // 1er patio 
	fill(135,120,120);
	rect(porteX-65, porteY-30, 130, 12);
	fill(25);
	rect(porteX-65, porteY-18, 130, 16);
	
	fill(55);
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
	fill(55);//////////////////////////// les longues escaliers
	rect(porteX-148, porteY-5, 50, 4); 
	rect(porteX-148, porteY-13, 50, 4);
	rect(porteX-148, porteY-20, 50, 4);
	rect(porteX-148, porteY-28, 50, 4);
	rect(porteX-148, porteY-37, 50, 4);
	rect(porteX-148, porteY-45, 50, 4);
	strokeWeight(4);
	stroke(55);
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
	fill(15);
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
	stroke(15);
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
	stroke(15);
	rect(porteX-130, porteY-240, 55,60); /////////////////// deuxieme fenetres a gauche//droite 2er niveau
	rect(porteX+75,porteY-240,55,60);
	line(porteX-103,porteY-240, porteX-103, porteY-185);
	line(porteX+102,porteY-240, porteX+102, porteY-185);
	
	stroke(0);
	strokeWeight(1);
	fill(85,85,80);        /////// 2eme patio 
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
	stroke(15);
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
	
	////////////////////////////////////////////////////////////////// maison #4 //////////// maison #4//////////// maison #4
	//////////// maison #4//////////// maison #4////////////// maison #4//////////// maison #4//////////// maison #4
	/////////////////// maison #4//////////// maison #4//////////// maison #4//////////// maison #4//////////// maison #4
	//////////// m/aison #4///////////// maison #4///////////// maison #4//////////// maison #4//////////// maison #4
	
	strokeWeight(1);
	stroke(0);
	fill(141, 114, 78);
	rect(780,800,300,400);
	strokeWeight(1);
	stroke(0);
	fill(141, 114, 78);
	rect(780,800,300,400);
	fill(25);
	rect(784,793,292,7);
	
		BriqueX = 790;
	BriqueY= 835;
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
	
	BriqueX = 810;
	BriqueY= 1135;
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
	
		BriqueX = 910;
	BriqueY= 960;
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
	
	BriqueX = 990;
	BriqueY= 1060;
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
	
	BriqueX = 990;
	BriqueY= 810;
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
		

	
var porteX = 930;  //mettre le centre de la maison
	var porteY =1200;  //mettre le rez de chaussée de la maison   
	stroke(25);		 
	strokeWeight(3);
	fill(50);   //1ere porte
	rect(porteX-35, porteY-120,72,85);
	line(porteX, porteY-120,porteX, porteY-35);
	line(porteX-4, porteY-68, porteX-4, porteY-63);
	line(porteX+4, porteY-68, porteX+4, porteY-63);
	fill(35,35,65);
	rect(porteX-30, porteY-115,23,45);    /// fenetre dans la 1ere porte
	rect(porteX+7,porteY-115,23,45);
	strokeWeight(6);
	stroke(15);
	rect(porteX-120, porteY-120, 60,60); /////////////////// premieres fenetres a gauche//droite 1er niveau
	rect(porteX+60,porteY-120,60,60);
	strokeWeight(1)
	stroke(0);
	fill(210,200,200);
	rect(porteX-65, porteY-33, 130, 3); ////////////////////////// // 1er patio 
	fill(35,20,20);
	rect(porteX-65, porteY-30, 130, 12);
	fill(25);
	rect(porteX-65, porteY-18, 130, 16);
	fill(25);											//////////////////toit
	rect(porteX-60, 830, 120,10);
	line(porteX-60, 825, porteX-60, 830);
	line(porteX+60, 825, porteX+60, 830);
	
	fill(180,160,150);
	rect(porteX-30, porteY-28, 60, 5);   // 1er escaliers
	rect(porteX-30, porteY-19, 60, 5);
	rect(porteX-30, porteY-9, 60, 5);
	strokeWeight(3);
	stroke(0);
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
	fill(200);//////////////////////////// les longues escaliers
	rect(porteX+98, porteY-5, 50, 4); 
	rect(porteX+98, porteY-13, 50, 4);
	rect(porteX+98, porteY-20, 50, 4);
	rect(porteX+98, porteY-28, 50, 4);
	rect(porteX+98, porteY-37, 50, 4);
	rect(porteX+98, porteY-45, 50, 4);
	strokeWeight(4);
	stroke(200);
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
 
	
	strokeWeight(3);
	stroke(10);
	fill(25); 									/// les 2 portes du deuxieme patios
	rect(porteX-35, porteY-230, 34,80);
	rect(porteX+1, porteY-230, 34, 80);
	strokeWeight(2);
	fill(35,35,65);											//// fenetre des 3  deuxieme portes 
	rect(porteX-30, porteY-227, 15, 45);
	rect(porteX+15, porteY-227, 15, 45);
	strokeWeight(6);
	stroke(15);
	rect(porteX-125, porteY-240, 45,70); /////////////////// deuxieme fenetres a gauche//droite 2er niveau
	rect(porteX+80,porteY-240,45,70);
	line(porteX-103,porteY-240, porteX-103, porteY-175);
	line(porteX+102,porteY-240, porteX+102, porteY-175);
	
	stroke(0);
	strokeWeight(1);
	fill(35,20,20);       /////// 2eme patio  
	rect(porteX-65, porteY-140, 130, 10);
	fill(25);
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
	fill(25);        													/////// 3eme patio 
	rect(porteX-65, porteY-260, 130, 10);
	fill(35,20,20);
	rect(porteX-68, porteY-250,136, 10);
	strokeWeight(6);
	stroke(15);
	fill(35,35,65);	
	rect(porteX-125, porteY-350, 45,80); /////////////////// 3eme fenetres a gauche//droite du 3er niveau
	rect(porteX+80,porteY-350,45,80);
	line(porteX-103,porteY-350, porteX-103, porteY-275);
	line(porteX+102,porteY-350, porteX+102, porteY-275);
	strokeWeight(1);
	stroke(12);
	fill(25); 									/// les 2 portes du troisieme patios
	rect(porteX-40, porteY-340, 34,80);
	rect(porteX+10, porteY-340, 34, 80);
	strokeWeight(2);
	fill(35,35,65);										//// fenetre des 3eme portes 
	rect(porteX-33, porteY-337, 20, 45);
	rect(porteX+18, porteY-337, 20, 45);
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
	
	
	
	
	////////////////////////////////////////////////////////////////// maison #5//////// maison #5//////// maison #5
	//////// maison #5//////// maison #5//////// maison #5//////// maison #5//////// maison #5
	//////// maison #5//////// maison #5//////// maison #5//////// maison #5//////// maison #5//////// maison #5//////// maison #5
	//////// maison #5//////// maison #5//////// maison #5//////// maison #5
	
	strokeWeight(1);
	stroke(0);
	fill(75, 26, 0);
	rect(1080,810,280,390);
	fill(15);
	rect(1082,805,276,5);
	
	noFill();
	BriqueX2 = 1100;
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
	
	BriqueX2 = 1230;
	BriqueY2 = 830;
	stroke(90);
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
	
	BriqueX2 = 1250;
	BriqueY2 = 1140;
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
	
	BriqueX2 = 1200;
	BriqueY2 = 980;
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
	
	var porteX = 1220;  //mettre le centre de la maison
	var porteY =1200;  //mettre le rez de chaussée de la maison   
	noStroke();
	translate(-40,0);
	fill(245,245,235);   //1ere porte
	rect(porteX-35, porteY-120,72,85);
	rect(porteX+62, porteY-120, 34, 85);
	strokeWeight(3);
	stroke(120);
	line(porteX, porteY-120,porteX, porteY-35);
	line(porteX-4, porteY-68, porteX-4, porteY-63);
	line(porteX+4, porteY-68, porteX+4, porteY-63);
	fill(35,35,65);
	rect(porteX-30, porteY-115,23,45);    /// fenetre dans la 1ere porte
	rect(porteX+7,porteY-115,23,45);
	rect(porteX+67,porteY-115,23,45);
	strokeWeight(1)
	stroke(0);
	fill(210,200,200);
	rect(porteX-65, porteY-33, 160, 3); ////////////////////////// // 1er patio 
	fill(55,35,35);
	rect(porteX-65, porteY-30, 160, 12);
	fill(55);
	rect(porteX-65, porteY-18, 160, 16);
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
	line(porteX+96, porteY-62, porteX+96, porteY-32);
	line(porteX+90, porteY-62, porteX+90, porteY-32);
	line(porteX+84, porteY-62, porteX+84, porteY-32);
	line(porteX+78, porteY-62, porteX+78, porteY-32);
	line(porteX+72, porteY-62, porteX+72, porteY-32);
	line(porteX+66, porteY-60, porteX+66, porteY-32); //rampes 1er patio de droite
	line(porteX+60, porteY-60, porteX+60, porteY-32);
	line(porteX+54, porteY-60, porteX+54, porteY-32);
	line(porteX+48, porteY-60, porteX+48, porteY-32);
	line(porteX+42, porteY-62, porteX+42, porteY-32);
	strokeWeight(4)
	line(porteX-67, porteY-62, porteX-40, porteY-62); //gauche
	line(porteX+98, porteY-62, porteX+40, porteY-62); //droite
	translate(+40,0);
	
	fill(35,35,65);
	strokeWeight(6);
	stroke(200);
	rect(porteX-125, porteY-120, 40,55); /////////////////// premieres fenetres a gauche//droite 1er niveau
	rect(porteX+80,porteY-120,40,55);
	

	

	strokeWeight(4);
	stroke(135,85,85);
	strokeWeight(1);
	stroke(120);
	fill(245,245,235); 									/// les 2 portes du deuxieme patios
	rect(porteX-60, porteY-230, 34,80);
	rect(porteX-17, porteY-230, 34, 80);
	rect(porteX+46, porteY-230, 34, 80);
	strokeWeight(2);
	fill(35,35,65);											//// fenetre des 3  deuxieme portes 
	rect(porteX-55, porteY-227, 24, 45);
	rect(porteX-12, porteY-227, 24, 45);
	rect(porteX+51, porteY-227, 24, 45);
	strokeWeight(6);
	stroke(200);
	rect(porteX-130, porteY-240, 55,60); /////////////////// deuxieme fenetres a gauche//droite 2er niveau
	rect(porteX+95,porteY-240,30,40);
	line(porteX-103,porteY-240, porteX-103, porteY-185);
	
	

	translate(-30,0);
	stroke(0);
	strokeWeight(1);
	fill(55,35,35);        /////// 2eme patio 
	rect(porteX-65, porteY-140, 230, 10);
	fill(15);
	rect(porteX-68, porteY-150,236, 10);
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
	line(porteX+171, porteY-179, porteX+171, porteY-149);
	line(porteX+165, porteY-179, porteX+165, porteY-149);
	line(porteX+159, porteY-179, porteX+159, porteY-2);
	
	line(porteX+111, porteY-179, porteX+111, porteY-2);
	line(porteX+105, porteY-179, porteX+105, porteY-149);
	line(porteX+99, porteY-179, porteX+99, porteY-149);
	line(porteX+93, porteY-179, porteX+93, porteY-149);
	line(porteX+87, porteY-179, porteX+87, porteY-149);
	line(porteX+81, porteY-179, porteX+81, porteY-149);
	line(porteX+75, porteY-179, porteX+75, porteY-149);
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
	line(porteX-69, porteY-153, porteX+171, porteY-153);
	line(porteX-70, porteY-180, porteX+172, porteY-180);
	translate(30,0);
	
	fill(55,35,35);       													/////// 3eme patio 
	rect(porteX-65, porteY-260, 130, 10);
	fill(25);
	rect(porteX-68, porteY-250,136, 10);
	strokeWeight(6);
	stroke(200);
	fill(35,35,65);	
	rect(porteX-130, porteY-340, 55,60); /////////////////// 3eme fenetres a gauche//droite du 3er niveau
	rect(porteX+75,porteY-340,55,60);
	line(porteX-103,porteY-340, porteX-103, porteY-285);
	line(porteX+102,porteY-340, porteX+102, porteY-285);
	strokeWeight(1);
	stroke(120);
	fill(245,245,235); 									/// les 2 portes du troisieme patios
	rect(porteX-50, porteY-340, 34,80);
	rect(porteX+15, porteY-340, 34, 80);
	strokeWeight(2);
	fill(35,35,65);											//// fenetre des 3eme portes 
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
	line(porteX, porteY-289, porteX, porteY-259); // centre des rampes du 3eme patio
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
	
	translate(-30,0);
	noStroke();
	fill(35,5,5);//////////////////////////// les longues escaliers
	rect(porteX+110, porteY-5, 50, 4); 
	rect(porteX+110, porteY-13, 50, 4);
	rect(porteX+110, porteY-20, 50, 4);
	rect(porteX+110, porteY-28, 50, 4);
	rect(porteX+110, porteY-37, 50, 4);
	rect(porteX+110, porteY-45, 50, 4);
	rect(porteX+110, porteY-53, 50, 4);
	rect(porteX+110, porteY-61, 50, 4);
	rect(porteX+110, porteY-69, 50, 4);
	rect(porteX+110, porteY-77, 50, 4);
	rect(porteX+110, porteY-85, 50, 4);
	rect(porteX+110, porteY-94, 50, 4);
	rect(porteX+110, porteY-103, 50, 4);
	rect(porteX+110, porteY-113, 50, 4);
	rect(porteX+110, porteY-121, 50, 4);
	rect(porteX+110, porteY-129, 50, 4);
	rect(porteX+110, porteY-137, 50, 4);
	rect(porteX+110, porteY-145, 50, 4);
	translate(30,0);
	
	////////////////////////////////////////////////////////////////// maison #6/////////////////// maison #6 maison #6
	/////////////////// maison #6/////////////////// maison #6///////////////////// maison #6/////////////////// maison #6
	////////////////////// maison #6///////////////////// maison #6/////////////////////////// maison #6
	/////////////////// maison #6///////////////////////// maison #6//////////////////// maison #6/////////////////// maison #6
	
	strokeWeight(1);
	stroke(0);
	fill(70, 20, 0);
	rect(1360,800,300,400);	
	noStroke();
	fill(50, 10, 0);
	rect(1360,790,300,15);
	rect(1460,785,100,8);
	fill(0);
	rect(1460,780,100,5);
	
	
	noFill();
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
	
	BriqueX2 = 1400;
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
	
	BriqueX2 = 1540;
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
	
	// centre maison 1 = 50 en x. Sol en y = 1200 
	var porteX = 1510;  //mettre le centre de la maison
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
	
	////////////////////////////////////////////////////////////////// maison #7/// maison #7/// maison #7/// mison #7
	/// maison #7/// maison #7/// maison #7/// maison #7/// maison #7
	/// maison #7////// maison #7 maison #7/// maison #7/// maison #7/// maison #7////// maison #7 maison #7/// maison #7
	/// maison #7/// maison #7/// maison #7/// maison #7
	
	strokeWeight(1);
	stroke(0);
	fill(134, 114, 89);
	rect(1660,820,330,380);
	fill(20);
	rect(1660,815,330,5);
	
	translate(-25,0);
	
	noFill();
	BriqueX = 1695;
	BriqueY= 835;
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
	
	BriqueX = 1895;
	BriqueY= 935;
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
	
	BriqueX = 1695;
	BriqueY= 1035;
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
	
	var porteX = 1825;  //mettre le centre de la maison
	var porteY =1200;  //mettre le rez de chaussée de la maison   
	noStroke();
	fill(245,245,235);   //1ere porte
	translate(-20,0);
	rect(porteX-35, porteY-120,72,85);
	rect(porteX+66, porteY-120, 34, 85);
	strokeWeight(3);
	stroke(120);
	line(porteX, porteY-120,porteX, porteY-35);
	line(porteX-4, porteY-68, porteX-4, porteY-63);
	line(porteX+4, porteY-68, porteX+4, porteY-63);
	fill(35,35,65);
	rect(porteX-30, porteY-115,23,45);    /// fenetre dans la 1ere porte
	rect(porteX+7,porteY-115,23,45);
	rect(porteX+71,porteY-115,23,45);
	translate(+20,0);
	strokeWeight(6);
	stroke(15);
	rect(porteX-120, porteY-120, 40,55); /////////////////// premieres fenetres a gauche//droite 1er niveau
	rect(porteX+120,porteY-120,40,55);
	strokeWeight(1)
	stroke(0);
	fill(210,200,200);
	rect(porteX-65, porteY-33, 160, 3); ////////////////////////// // 1er patio 
	fill(55,35,35);
	rect(porteX-65, porteY-30, 160, 12);
	fill(55);
	rect(porteX-65, porteY-18, 160, 16);
	
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
	line(porteX+96, porteY-62, porteX+96, porteY-32);
	line(porteX+90, porteY-62, porteX+90, porteY-32);
	line(porteX+84, porteY-62, porteX+84, porteY-32);
	line(porteX+78, porteY-62, porteX+78, porteY-32);
	line(porteX+72, porteY-62, porteX+72, porteY-32);
	line(porteX+66, porteY-60, porteX+66, porteY-32); //rampes 1er patio de droite
	line(porteX+60, porteY-60, porteX+60, porteY-32);
	line(porteX+54, porteY-60, porteX+54, porteY-32);
	line(porteX+48, porteY-60, porteX+48, porteY-32);
	line(porteX+42, porteY-62, porteX+42, porteY-32);
	
	strokeWeight(4)
	line(porteX-67, porteY-62, porteX-40, porteY-62); //gauche
	line(porteX+98, porteY-62, porteX+40, porteY-62); //droite
	

	strokeWeight(4);
	stroke(135,85,85);
	strokeWeight(1);
	stroke(120);
	fill(245,245,235); 						/// les 2 portes du deuxieme patios
	rect(porteX-60, porteY-230, 34,80);
	rect(porteX-17, porteY-230, 34, 80);
	rect(porteX+46, porteY-230, 34, 80);
	strokeWeight(2);
	fill(35,35,65);					//// fenetre des 3  deuxieme portes 
	rect(porteX-55, porteY-227, 24, 45);
	rect(porteX-12, porteY-227, 24, 45);
	rect(porteX+51, porteY-227, 24, 45);
	strokeWeight(6);
	stroke(15);
	rect(porteX-130, porteY-240, 55,60); /////////////////// deuxieme fenetres a gauche//droite 2er niveau
	rect(porteX+105,porteY-240,55,60);
	line(porteX-103,porteY-240, porteX-103, porteY-185);
	line(porteX+132,porteY-240, porteX+132, porteY-185);
	

	
	stroke(0);
	strokeWeight(1);
	fill(55,35,35);        /////// 2eme patio 
	rect(porteX-65, porteY-140, 230, 10);
	rect(porteX-68, porteY-150,236, 10);
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
	line(porteX+171, porteY-179, porteX+171, porteY-149);
	line(porteX+165, porteY-179, porteX+165, porteY-149);
	line(porteX+159, porteY-179, porteX+159, porteY-2);
	
	line(porteX+111, porteY-179, porteX+111, porteY-2);
	line(porteX+105, porteY-179, porteX+105, porteY-149);
	line(porteX+99, porteY-179, porteX+99, porteY-149);
	line(porteX+93, porteY-179, porteX+93, porteY-149);
	line(porteX+87, porteY-179, porteX+87, porteY-149);
	line(porteX+81, porteY-179, porteX+81, porteY-149);
	line(porteX+75, porteY-179, porteX+75, porteY-149);
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
	line(porteX-69, porteY-153, porteX+171, porteY-153);
	line(porteX-70, porteY-180, porteX+172, porteY-180);
	fill(55,35,35);       						/////// 3eme patio 
	rect(porteX-65, porteY-260, 130, 10);
	rect(porteX-68, porteY-250,136, 10);
	strokeWeight(6);
	stroke(15);
	fill(35,35,65);	
	rect(porteX-130, porteY-340, 55,60); /////////////////// 3eme fenetres a gauche//droite du 3er niveau
	rect(porteX+105,porteY-340,55,60);
	line(porteX-103,porteY-340, porteX-103, porteY-285);
	line(porteX+132,porteY-340, porteX+132, porteY-285);
	strokeWeight(1);
	stroke(120);
	fill(245,245,235); 					/// les 2 portes du troisieme patios
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
	line(porteX, porteY-289, porteX, porteY-259); // centre des rampes du 3eme patio
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
	
		
	noStroke();
	fill(35,5,5);//////////////////////////// les longues escaliers
	rect(porteX+110, porteY-5, 50, 4); 
	rect(porteX+110, porteY-13, 50, 4);
	rect(porteX+110, porteY-20, 50, 4);
	rect(porteX+110, porteY-28, 50, 4);
	rect(porteX+110, porteY-37, 50, 4);
	rect(porteX+110, porteY-45, 50, 4);
	rect(porteX+110, porteY-53, 50, 4);
	rect(porteX+110, porteY-61, 50, 4);
	rect(porteX+110, porteY-69, 50, 4);
	rect(porteX+110, porteY-77, 50, 4);
	rect(porteX+110, porteY-85, 50, 4);
	rect(porteX+110, porteY-94, 50, 4);
	rect(porteX+110, porteY-103, 50, 4);
	rect(porteX+110, porteY-113, 50, 4);
	rect(porteX+110, porteY-121, 50, 4);
	rect(porteX+110, porteY-129, 50, 4);
	rect(porteX+110, porteY-137, 50, 4);
	rect(porteX+110, porteY-145, 50, 4);
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////// maison #8
	
	
	strokeWeight(1);
	stroke(0);
	fill(141, 114, 78);
	rect(1990,800,290,400);
	
	noStroke();
	var porteX = 2135; 
	rect(porteX-140,780,20,25);
	rect(porteX+120,780,20,25);
	rect(porteX-50,795,100,8);
	rect(porteX-40,790,80,8);
	rect(porteX-30,785,60,8);
	rect(porteX-20,780,40,8);
	rect(porteX-10,775,20,8);
	fill(15);
	rect(porteX-141,777,22,5);
	rect(porteX+119,777,22,5);
	rect(porteX-12,772,24,5);
	stroke(15);
	strokeWeight(3);
	line(porteX-141,780,porteX-141,799);
	line(porteX-119,780, porteX-119, 799);
	line(porteX+141,780,porteX+141,799);
	line(porteX+119,780,porteX+119,799);
	strokeWeight(5);
	line(porteX-52,800,porteX-11,777);
	line(porteX+52,800,porteX+11,777);
	
	
	noFill();
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
	
	BriqueX2 = 2000;
	BriqueY2 = 1105;
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
	
	BriqueX2 = 2020;
	BriqueY2 = 955;
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
	
	//////////////////////////////////////////// centre maison 8 = 2135 en x. Sol en y = 1200  
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
	stroke(90);
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
	
	noStroke();
	var porteX = 2425; 
	rect(porteX-140,780,20,25);
	rect(porteX+120,780,20,25);
	rect(porteX-50,795,100,8);
	rect(porteX-40,790,80,8);
	rect(porteX-30,785,60,8);
	rect(porteX-20,780,40,8);
	rect(porteX-10,775,20,8);
	fill(15);
	rect(porteX-141,777,22,5);
	rect(porteX+119,777,22,5);
	rect(porteX-12,772,24,5);
	stroke(15);
	strokeWeight(3);
	line(porteX-141,780,porteX-141,799);
	line(porteX-119,780, porteX-119, 799);
	line(porteX+141,780,porteX+141,799);
	line(porteX+119,780,porteX+119,799);
	strokeWeight(5);
	line(porteX-52,800,porteX-11,777);
	line(porteX+52,800,porteX+11,777);
	
	noFill();
	BriqueX2 = 2360;
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
	
	BriqueX2 = 2300;
	BriqueY2 = 1105;
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
	
	BriqueX2 = 2500;
	BriqueY2 = 1105;
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
	
	BriqueX2 = 2500;
	BriqueY2 = 905;
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
	stroke(35);
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
	
	////////////////////// maison #10//////////////////////////////////////////// maison #10////////////////////////// maison #10
	//////////////////////////////////// maison #10//////////////////////// maison #10
	//// maison #10/////////////// maison #10////////////////////////////////////////// maison #10
	//////////////////// maison #10/////////////////////////////////////// maison #10
	/////////////////////////// maison #10///////////////////////// maison #10/////////////////////////////////// maison #10
	
	
	strokeWeight(1);
	stroke(0);
	fill(120, 45, 16);
	rect(2570,830,280,370);
	fill(25);
	rect(2574,825,272,5);
	
	noFill();
	BriqueX = 2610;
	BriqueY= 960;
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
	
	BriqueX = 2710;
	BriqueY= 835;
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
	
	BriqueX = 2615;
	BriqueY= 1135;
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
	
	BriqueX = 2610;
	BriqueY= 960;
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
	
	BriqueX = 2750;
	BriqueY= 1060;
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
	
	BriqueX = 2585;
	BriqueY= 880;
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
	
	var porteX = 2710;  //mettre le centre de la maison
	var porteY =1200;  //mettre le rez de chaussée de la maison   
	stroke(25);		 
	strokeWeight(3);
	fill(50);   //1ere porte
	rect(porteX-35, porteY-120,72,85);
	line(porteX, porteY-120,porteX, porteY-35);
	line(porteX-4, porteY-68, porteX-4, porteY-63);
	line(porteX+4, porteY-68, porteX+4, porteY-63);
	fill(35,35,65);
	rect(porteX-30, porteY-115,23,45);    /// fenetre dans la 1ere porte
	rect(porteX+7,porteY-115,23,45);
	strokeWeight(6);
	stroke(15);
	rect(porteX-120, porteY-120, 60,60); /////////////////// premieres fenetres a gauche//droite 1er niveau
	rect(porteX+60,porteY-120,60,60);
	strokeWeight(1)
	stroke(0);
	fill(210,200,200);
	rect(porteX-65, porteY-33, 130, 3); ////////////////////////// // 1er patio 
	fill(35,20,20);
	rect(porteX-65, porteY-30, 130, 12);
	fill(25);
	rect(porteX-65, porteY-18, 130, 16);
	fill(25);//////////////////toit
	rect(porteX-60, 840, 120,10);
	line(porteX-60, 835, porteX-60, 850);
	line(porteX+60, 835, porteX+60, 850);
	
	fill(180,160,150);
	rect(porteX-30, porteY-28, 60, 5);   // 1er escaliers
	rect(porteX-30, porteY-19, 60, 5);
	rect(porteX-30, porteY-9, 60, 5);
	strokeWeight(3);
	stroke(0);
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
	fill(180,160,150);//////////////////////////// les longues escaliers
	rect(porteX-148, porteY-5, 50, 4); 
	rect(porteX-148, porteY-13, 50, 4);
	rect(porteX-148, porteY-20, 50, 4);
	rect(porteX-148, porteY-28, 50, 4);
	rect(porteX-148, porteY-37, 50, 4);
	rect(porteX-148, porteY-45, 50, 4);
	strokeWeight(4);
	stroke(180,160,150);
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
	fill(5);
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
	stroke(5);
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
	
	
	
	
	
	strokeWeight(3);
	stroke(10);
	fill(25); 									/// les 2 portes du deuxieme patios
	rect(porteX-60, porteY-230, 34,80);
	rect(porteX-17, porteY-230, 34, 80);
	rect(porteX+26, porteY-230, 34, 80);
	strokeWeight(2);
	fill(35,35,65);											//// fenetre des 3  deuxieme portes 
	rect(porteX-51, porteY-227, 15, 45);
	rect(porteX-12, porteY-227, 24, 45);
	rect(porteX+35, porteY-227, 15, 45);
	strokeWeight(6);
	stroke(15);
	rect(porteX-125, porteY-240, 45,70); /////////////////// deuxieme fenetres a gauche//droite 2er niveau
	rect(porteX+80,porteY-240,45,70);
	line(porteX-103,porteY-240, porteX-103, porteY-175);
	line(porteX+102,porteY-240, porteX+102, porteY-175);
	
	stroke(0);
	strokeWeight(1);
	fill(35,20,20);       /////// 2eme patio  
	rect(porteX-65, porteY-140, 130, 10);
	fill(25);
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
	fill(25);        													/////// 3eme patio 
	rect(porteX-65, porteY-260, 130, 10);
	fill(35,20,20);
	rect(porteX-68, porteY-250,136, 10);
	strokeWeight(6);
	stroke(15);
	fill(35,35,65);	
	rect(porteX-125, porteY-340, 45,70); /////////////////// 3eme fenetres a gauche//droite du 3er niveau
	rect(porteX+80,porteY-340,45,70);
	line(porteX-103,porteY-340, porteX-103, porteY-275);
	line(porteX+102,porteY-340, porteX+102, porteY-275);
	strokeWeight(1);
	stroke(12);
	fill(25); 									/// les 2 portes du troisieme patios
	rect(porteX-40, porteY-340, 34,80);
	rect(porteX+10, porteY-340, 34, 80);
	strokeWeight(2);
	fill(35,35,65);										//// fenetre des 3eme portes 
	rect(porteX-33, porteY-337, 20, 45);
	rect(porteX+18, porteY-337, 20, 45);
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


}
