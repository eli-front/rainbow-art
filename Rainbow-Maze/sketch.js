let size = 10

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  strokeWeight(5)
  for (let i = 0; i < width/size; i++) {
    for (let j = 0; j < height/size; j++) {
      stroke(random(255), random(255), random(255), random(255))
      randLine(i, j)
    }
  }
}

function randLine(i, j) {
 if (random(1) > 0.5) {
   line(i*size, j*size, i*size + size, j*size + size)
 } else {
   line(i*size + size, j*size, i*size, j*size + size)
 }
}
