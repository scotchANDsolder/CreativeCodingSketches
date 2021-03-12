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
  for(let x =0; x < 50;x++){
    noiseList[x] = 0.07*x;
  }
}

function draw() {
  background(0);

  
  let j = 0;
  for(let i = 0; i < 2000;i+=40){
    

    sw =  noise(noiseList[j])*255;
    console.log(sw);
    //strokeWeight(sw);
    //strokeWeight(random(0.1,3));
    //noFill();
    fill(255,0,255,sw);
    noStroke();

    quad(i+10, 0,0,i+10,0,i+30,i+30,0);
    
    noiseList[j] = noiseList[j] + 0.02;
    //console.log(noiseList[j]);
    //xoff = xoff +0.1;
    j = j + 1;
  }
  console.log("End");
  

  
}

