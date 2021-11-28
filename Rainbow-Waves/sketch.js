function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  background(0);
  for (let i = 50; i < width-50; i+=5) {
    for (let j = 50; j < height-50; j+=5) {
      const x = i + sin(abs(frameCount%800-400)*j/10000)*40;
      const y = j + cos(abs(frameCount%800-400)*i/10000)*40;
      const size = 4;


      fill(i/width*255, j/height*255, 255-j/height*255);
      circle(x, y, size);
    }

  }
}

