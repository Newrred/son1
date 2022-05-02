let r = 0;

function setup() {
  createCanvas(800, 1200, WEBGL);

  colorMode(HSB, 360, 100, 100, 100);
}

function preload() {            // 사진 불러오기 함수
  img = loadImage('ppi.png');
}

function draw() {
  r = mouseY;
  background(0);

  image(img,-400,-600,);

  
  noFill();
  stroke(0,0,255);
  rotateY(frameCount * 0.01);
  //
 // rotateZ(frameCount * r/10000);
  sphere(r/5+20);

  stroke(255);
  cone(height/2- r/2, 20);

  stroke(255,0,0);
  ellipsoid(r/3, 150, 100);

  stroke(0,255,0);
  //ellipsoid(height/2-r/2, 150, 500);

 /* if(r < height){
    pointC();
  }else if(r == height ){
    pointB();
  }
  */
}


function pointC() {

  /*
  for(let i = 0; i <height; i ++)
  {

  }

  */

  r += 5;


}

function pointB() {

  /*
  for(let i = 0; i <height; i ++)
  {

  }

  */

  r -= height;


}