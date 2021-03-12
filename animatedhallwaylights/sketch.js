let eHeight = 100;
let eWidth = 100;

xoff = 0.01;

noiseList = [10];

function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth,windowHeight);
  
  frameRate(10);
  //noStroke();
  
  //noLoop();
   for(let x =0; x < 10;x++){
    noiseList[x] = 0.7*x;
  }
  
}

function draw() {
  background(0);

 
  let j = 0;
  for(let i = 0; i < 400;i+=55){
    

    sw = 255- noise(noiseList[j])*225;
    //strokeWeight(sw);
    //strokeWeight(random(0.1,3));
    //noFill();
    fill(255,255,0,sw);
    noStroke();
    //circle(1000,500,10);

    quad(750-i*1.75, 500-i,1000+i*1.75,500-i,1000+(i+30)*1.75,500-(i+30),750-(i+30)*1.75, 500-(i+30));

    noiseList[j] = noiseList[j] + 0.05;

    j = j + 1;
  }

  
}

