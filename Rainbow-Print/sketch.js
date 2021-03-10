let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(60);
}

function draw() {
  for (let i = 0; i < width; i++) {
    let x = count%width;
    let y = Math.floor(count/width);
    fill(x/width*255, y/height*255, (255-y)/height*255);
    square(x, y, 1);
    count++;
  }
  if (count >= width*height) {
    noLoop();
  }
}