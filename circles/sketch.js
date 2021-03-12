let eHeight = 100;
let eWidth = 100;

xoff = 0.01;

function setup() {
  
}

function draw() {
	createCanvas(windowWidth,windowHeight);
  background(193,255,77);
  noFill();
  //noStroke();
  
  noLoop();
  for(let j = eHeight/2; j < 1080; j=j+eHeight){
  for(let i = 0; i < 1920; i=i+eWidth*0.4){
  	//strokeWeight(random(0.5,5));

  	//strokeWeight(map(i,0,1920,0.1,5));
  	strokeWeight(random(0.5,5),random(100,200));
    //strokeWeight(1);

     //ew = noise(xoff)*eWidth
     ew = random(eWidth);

  	ellipse(i,j,ew,eHeight);
    xoff = xoff + 0.01;
  }
  xoff = random(100);
}
}

function mousePressed() {
 
  redraw();
}