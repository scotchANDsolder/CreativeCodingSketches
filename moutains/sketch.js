let yoff = 0.0; // 2nd dimension of perlin noise
let xoff = 0.5;
let coff = 0.9;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  
  
}

function draw() {
	background(249,247,210);
  //noStroke();
  
  
  noLoop();
  noStroke();
  fill(255,135,20)
 circle(width-400,400,400);

  //rect(width-400,300,100,100);
  


stroke(27,148,114);

for (let x = 0; x <= width; x += 1) {

  let lheight = height - noise(coff)*height*0.9;
  line(x,height,x,lheight)
  coff = coff + 0.001;


}

stroke(27,148,114);

for (let x = 0; x <= width; x += 1) {

  let lheight = height - noise(yoff)*height*0.7;
  line(x,height,x,lheight)
  yoff = yoff + 0.001;


}



}
function mousePressed() {
 
  redraw();
}