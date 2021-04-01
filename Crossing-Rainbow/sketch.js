
let incrSlider;

function setup() {
  const size = Math.min(windowWidth, windowHeight) - 30;
  createCanvas(size, size);
  
  incrSlider = createSlider(1, 40, 10, 0.01);
  incrSlider.position(5, height+5);
  incrSlider.style('width', `${width-10}px`);
   
}

function draw() {
  const incr = height/incrSlider.value();
  background(0);
  for (let i = 0; i < width*2+1; i+=incr) {
    for (let j = 0; j < height*2+1; j+=incr) {
      // stroke(j/height*255, i/width*255, 255-j/height*255);
      
      let x1 = i < width+1 ? i : width;
      let y1 = i < width+1 ? 0 : i-width;
      
      let x2 = j < height+1 ? 0 : j-height;
      let y2 = j < height+1 ? j : height;
      
      stroke(x1/width*255, y2/height*255, x2/width*255);
      
      line(x1, y1, x2, y2);
    }
  }
}