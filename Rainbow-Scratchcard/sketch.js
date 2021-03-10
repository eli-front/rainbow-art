let paintOn;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(26,26,26);

  strokeWeight(50);
}



function draw() {
  if (paintOn) {
    stroke(mouseX/width*255, (height-mouseY)/height*255, mouseY/height*255);
    line(mouseX, mouseY, mouseX, mouseY);
  }
}

function mousePressed() {
  paintOn = true;
}

function mouseReleased() {
  paintOn = false;
}