let eHeight = 100;
let eWidth = 100;

xoff = 0.01;
noiseList=[130];

function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth,windowHeight);
  for(let i = 0; i < 150;i+=1){
    noiseList[i] = 1*i;
  }
  
 
  frameRate(7);
  //noStroke();
  
  //noLoop();
  
}

function draw() {
  background(0);
  let j = 0;
  for(let i = 5; i < 300;i+=2){
    
    sw = noise(noiseList[j])*12;
    strokeWeight(sw);
    //strokeWeight(random(0.1,10));
    stroke(255,255,0)
    noFill();

    circle(width/3, height*2/3,10*i,10*i);
    noiseList[j] = noiseList[j] + 0.05;
    //xoff = xoff + 0.2;
    j=j+1;
  }
  // fill(252,76,252);
  // noStroke();
  // rect(width/3, height*2/3,11,17);
  
}

