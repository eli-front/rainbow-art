let count = 0;

let r1Slider;
let r2Slider;

let g1Slider;
let g2Slider;

let b1Slider;
let b2Slider;


function setup() {
  let scSize = Math.min(windowWidth, windowHeight - 60);
  createCanvas(scSize, scSize);
  
  r1Slider = createSlider(0, 50, random(50), 1);
  r1Slider.position(10, scSize+10);
  r1Slider.style('width', `${width/2-5}px`);
  
  r2Slider = createSlider(0, 50, random(50), 1);
  r2Slider.position(width/2+10, scSize+10);
  r2Slider.style('width', `${width/2-5}px`);
  
  g1Slider = createSlider(0, 50, random(50), 1);
  g1Slider.position(10, scSize+25);
  g1Slider.style('width', `${width/2-5}px`);
  
  g2Slider = createSlider(0, 50, random(50), 1);
  g2Slider.position(width/2+10, scSize+25);
  g2Slider.style('width', `${width/2-5}px`);
  
  b1Slider = createSlider(0, 50, random(50), 1);
  b1Slider.position(10, scSize+40);
  b1Slider.style('width', `${width/2-5}px`);
  
  b2Slider = createSlider(0, 50, random(50), 1);
  b2Slider.position(width/2+10, scSize+40);
  b2Slider.style('width', `${width/2-5}px`);
  
  randomSeed();
  background(255, 255, 255);
  noStroke();
}

function draw() {
  background(255, 255, 255, 10);
  
  if (count >= height*2) {
    count = 0;
    randomSeed();
  }
  
  let size;
  let nums;
  
  if (height < count+1) {
    size = height*2-count;
    nums = [...Array(size).keys()].map(i => i + count+1-height);
  } else {
    size = count+1;
    nums = [...Array(size).keys()];
  }
  for (let i = nums[0]; i <= nums[nums.length-1]; i++) {
      fill(noise(i/r1Slider.value(), (count-i-1)/r2Slider.value())*255, noise(i/g1Slider.value(), (count-i-1)/g2Slider.value())*255, noise(i/b1Slider.value(), (count-i-1)/b2Slider.value())*255);
      square(i, count-i-1, 1);
  }
  
  count++;
}