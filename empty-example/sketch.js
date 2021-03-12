let eHeight = 100;
let eWidth = 100;

function setup() {
  
}

function draw() {
	createCanvas(windowWidth,windowHeight);
  background(150,20,50);
  //noFill();
  noStroke();
  
  noLoop();
  for(let i = 0; i < 1920; i=i+50){
  	//strokeWeight(random(0.5,5));

  	for(let j = eHeight/2; j < 1080; j=j+eHeight){
  	//strokeWeight(map(i,0,1920,0.1,5));
  	fill(100,20,50,random(200,230));
  	rect(i,j,random(0,eWidth),eHeight);
  }
}
}

function mousePressed() {
 
  redraw();
}