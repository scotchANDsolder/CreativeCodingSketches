let eHeight = 100;
let eWidth = 100;

xoff = 0.01;

function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth,windowHeight);
  
 
  frameRate(10);
  //noStroke();
  
  //noLoop();
  
}

function draw() {
  background(255,255,0);
  for(let i = 0; i < 1000;i+=2){
    
    
    strokeWeight(random(0.1,10));
    noFill();
    rect(width/3, height*2/3,10*i,16*i);
  }
  // fill(252,76,252);
  // noStroke();
  // rect(width/3, height*2/3,11,17);
  
}

