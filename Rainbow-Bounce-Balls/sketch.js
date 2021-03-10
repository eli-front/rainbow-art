let balls = [];

let countSlider;
let alphaSlider;

function setup() {
  createCanvas(windowWidth, windowHeight - 60);
  
  countSlider = createSlider(0, 1000, 200, 1);
  countSlider.position(15, windowHeight - 50);
  countSlider.style('width', `${width-30}px`);
  alphaSlider = createSlider(0, 255, 4, 1);
  alphaSlider.position(15, windowHeight - 30);
  alphaSlider.style('width', `${width-30}px`);
  
  for (let i = 0; i < 30; i++) balls.push(new Ball(random(width-20)+10, random(height-20)+10));
  background(26,26,26);
  noStroke();

}

function draw() {
  if (width != windowWidth || height != windowHeight-60) {
    resizeCanvas(windowWidth, windowHeight-60);
    
    countSlider.position(15, height + 10);
    countSlider.style('width', `${width-30}px`);
    
    alphaSlider.position(15, height + 30);
    alphaSlider.style('width', `${width-30}px`);
  }
  
  balls.forEach((e) => {
    e.update();
    e.show();
  });
  background(26, 26, 26, alphaSlider.value());
  while (countSlider.value() > balls.length) {
    balls.push(new Ball(random(width-20)+10, random(height-20)+10));
  }
  
  while (countSlider.value() < balls.length) {
    balls.shift();
  }
  
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2,2), random(-2,2));
    this.size = random(3,30);
    this.speed = random(0.5, 1);
  }
  
  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.checkWall();
  }
  
  checkWall(){
    if (this.pos.x < 0 ){
    //this.pos.x = width;
    this.vel.x *= -1;
    }
     if (this.pos.y < 0 ){
     //this.pos.y = height;
      this.vel.y *= -1;
    }
    if (this.pos.x > width){
      //this.pos.x  = 0;
      this.vel.x *= -1;
    }
    if (this.pos.y > height){
      //this.pos.y  = 0;
      this.vel.y *= -1;
    }
    
  }
  show() {
    fill(this.pos.x/width*255, (height-this.pos.y)/height*255, this.pos.y/height*255);
    circle(this.pos.x, this.pos.y, this.size)
  }
}