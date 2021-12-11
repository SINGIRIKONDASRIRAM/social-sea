var backgroundImg;
var himalyas,himalyasImg;
var desert,desertImg;
var costalplains,costalplainsImg;
var animalshimalyaImg,animalshimalya;
var himalyaflower1,himalyaflower1Img;
var himalyaflower2,himalyaflower2Img;
var mt,mtImg
var c,cImg;
var ca1,ca2,cf1,cf2,ca1Img,ca2Img,cf1Img,cf2Img;
var d,dImg;
var da1,da2,df1,df2,da1Img,da2Img,df1Img,df2Img;
// var i,iImg;
// var ia1,ia2,if1,if2,ia1Img,ia2Img,if1Img,if2Img;
// var np;npImg;
// var npa1,npa2,npf1,npf2,npa1Img,npa2Img,npf1Img,npf2Img;
var p;pImg;
var pa1,pa2,pf1,pf2,pa1Img,pa2Img,pf1Img,pf2Img;



function preload()
{
	backgroundImg=loadImage("background.png")
	himalyasImg=loadImage("fauna.png");
	animalshimalyaImg=loadImage("fauna1.jpeg");
	himalyaflower1Img=loadImage("fauna2.jpeg")
	himalyaflower2Img=loadImage("fauna3.jpeg")
	mtImg=loadImage("fauna4.jpeg");
	cImg=loadImage("s.png");
	ca1Img=loadImage("sa1.jpg");
	ca2Img=loadImage("sa2.jpg");
	cf1Img=loadImage("sa4.jpg");
	cf2Img=loadImage("sa5.jpg");
	dImg=loadImage("flora.png");
	da1Img=loadImage("flora1.jpeg");
	da2Img=loadImage("flora2.jpeg");
	df1Img=loadImage("flora3.jpeg");
	df2Img=loadImage("flora4.jpeg");
	iImg=loadImage("i.jpg");
	ia1Img=loadImage("ia1.jpg");
	ia2Img=loadImage("ia2.jpg");
	if1Img=loadImage("if1.jpg");
	if2Img=loadImage("if2.jpg");
	// npImg=loadImage("np.jpg");
	// npa1Img=loadImage("npa1.jpg");
	// npa2Img=loadImage("npa2.jpg");
	// npf1Img=loadImage("npf1.jpg");
	// npf2Img=loadImage("npf2.jpg");
	// npImg=loadImage("np.jpg");
	pImg=loadImage("wf.png");
	pa1Img=loadImage("wf1.jpg");
	pa2Img=loadImage("wf2.jpg");
	pf1Img=loadImage("wf3.jpg");
	pf2Img=loadImage("wf4.jpg");

}

function setup() {
	createCanvas(1000,1000);
himalyas=createSprite(450,100,20,20);
himalyas.addImage(himalyasImg);
himalyas.scale=0.5;	
c=createSprite(550,550,20,20);
c.addImage(cImg);
c.scale=0.5;
d=createSprite(100,450,20,20);
d.addImage(dImg);
d.scale=0.5;
// i=createSprite(900,830,20,20);
// i.addImage(iImg);
// i.scale=0.5;
// np=createSprite(690,350,20,20);
// np.addImage(npImg);
// np.scale=0.5;
p=createSprite(600,340,20,20);
p.addImage(pImg);
p.scale=0.5;
	
  
}


function draw() {
  background(backgroundImg);
  if(mousePressedOver(himalyas)){
	  animalshimalya=createSprite(100,200,20,20);
	  animalshimalya.addImage(animalshimalyaImg);
	  animalshimalya.scale=0.2;
	  animalshimalya.lifetime=400;
	  himalyaflower1=createSprite(400,200,20,20);
	  himalyaflower1.addImage(himalyaflower1Img);
	  himalyaflower1.scale=0.2;
	  himalyaflower1.lifetime=400;
	  himalyaflower2=createSprite(680,200,20,20);
	  himalyaflower2.addImage(himalyaflower2Img);
	  himalyaflower2.scale=0.3;
	  himalyaflower2.lifetime=400;
	  mt=createSprite(900,200,20,20);
	  mt.addImage(mtImg);
	  mt.scale=0.1;
	  mt.lifetime=400;
  }
  if(mousePressedOver(c)){
	ca1=createSprite(80,700,20,20);
	ca1.addImage(ca1Img);
	ca1.scale=0.3;
	ca1.lifetime=400;
	ca2=createSprite(340,700,20,20);
	ca2.addImage(ca2Img);
	ca2.scale=0.2;
	ca2.lifetime=400;
	cf1=createSprite(530,700,20,20);
	cf1.addImage(cf1Img);
	cf1.scale=0.3;
	cf1.lifetime=400;
	cf2=createSprite(720,700,20,20);
	cf2.addImage(cf2Img);
	cf2.scale=0.6;
	cf2.lifetime=400;
  }

if(mousePressedOver(p)){
	pa1=createSprite(380,450,20,20);
	pa1.addImage(pa1Img);
	pa1.scale=0.09;
	pa1.lifetime=400;
	pa2=createSprite(520,450,20,20);
	pa2.addImage(pa2Img);
	pa2.scale=0.2;
	pa2.lifetime=400;
	npf1=createSprite(700,450,20,20);
	npf1.addImage(pf1Img);
	npf1.scale=0.04;
	npf1.lifetime=400;
	npf2=createSprite(890,450,20,20);
	npf2.addImage(pf2Img);
	npf2.scale=0.1;
	npf2.lifetime=400;
}


// if(mousePressedOver(np)){
// 	npa1=createSprite(600,440,20,20);
// 	npa1.addImage(npa1Img);
// 	npa1.scale=0.4;
// 	npa1.lifetime=400;
// 	npa2=createSprite(720,440,20,20);
// 	npa2.addImage(npa2Img);
// 	npa2.scale=0.4;
// 	npa2.lifetime=400;
// 	npf1=createSprite(850,440,20,20);
// 	npf1.addImage(npf1Img);
// 	npf1.scale=0.4;
// 	npf1.lifetime=400;
// 	npf2=createSprite(850,550,20,20);
// 	npf2.addImage(npf2Img);
// 	npf2.scale=0.4;
// 	npf2.lifetime=400;
// }


// if(mousePressedOver(i)){
// 	ia1=createSprite(880,950,20,20);
// 	ia1.addImage(ia1Img);
// 	ia1.scale=0.4;
// 	ia1.lifetime=400;
// 	ia2=createSprite(740,950,20,20);
// 	ia2.addImage(ia2Img);
// 	ia2.scale=0.4;
// 	ia2.lifetime=400;
// 	if1=createSprite(610,950,20,20);
// 	if1.addImage(if1Img);
// 	if1.scale=0.4;
// 	if1.lifetime=400;
// 	if2=createSprite(490,950,20,20);
// 	if2.addImage(if2Img);
// 	if2.scale=0.4;
// 	if2.lifetime=400;
// }

if(mousePressedOver(d)){
	da1=createSprite(180,340,50,50);
	da1.addImage(da1Img);
	da1.scale=0.2
	da1.lifetime=400;
	da2=createSprite(50,340,50,50);
	da2.addImage(da2Img);
	da2.scale=0.4;
	da2.lifetime=400;
	df1=createSprite(50,550,50,50);
	df1.addImage(df1Img);
	df1.scale=0.4;
	df1.lifetime=400;
	df2=createSprite(200,550,50,50);
	df2.addImage(df2Img);
	df2.scale=0.1;
	df2.lifetime=400;
}


  drawSprites();
 
}



