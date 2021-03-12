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
  
}

function draw() {
  background(0);

  for(let x =0; x < 10;x++){
    noiseList[x] = random(5);
  }
  let j = 0;
  for(let i = 0; i < 400;i+=40){
    

    sw = 255- noise(noiseList[j])*255;
    //strokeWeight(sw);
    //strokeWeight(random(0.1,3));
    //noFill();
    fill(255,150,0,sw);
    noStroke();

    quad(750-i*1.75, 500-i,1000+i*1.75,500-i,1000+(i+30)*1.75,500-(i+30),750-(i+30)*1.75, 500-(i+30));

    noiseList[j] = noiseList[j] + 0.1;

    j = j + 1;
  }

  
}

