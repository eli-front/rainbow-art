function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(200);
  
  strokeWeight(5);
  
}

function draw() {
  background(0);
  for (let i = 10; i < width-10; i+=10) {
    for (let j = 10; j < height-10; j+=10) {
      stroke(i/width*255, j/height*255, 255-j/height*255);
      line(mouseX, mouseY, i, j);
    }
  }
  
}