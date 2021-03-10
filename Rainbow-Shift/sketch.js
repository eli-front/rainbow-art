let slider;
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 255, 100);
  slider.position(width/2-30, height-10);
  slider.style('width', '80px');
  // frameRate(10);
}

function draw() {
  let value = slider.value()*4
  if (value <= 255) {
    background(value, 0, 0);
  } else if (value <= 510) {
    background(255, value-255, 0);
  } else if (value <= 765) {
    background((510-value)+255, 255, 0);
  } else if (value <= 1020) {
    background(0, (765-value)+255, value-765);
  }
  
}