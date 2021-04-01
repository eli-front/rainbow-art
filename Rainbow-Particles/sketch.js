let balls = [];
const connectionVal = 3;
// const ballCount = 50;
// const alphaValue =  30;

let countSlider;
let alphaSlider;

function setup() {
  createCanvas(windowWidth, windowHeight-60);
  countSlider = createSlider(0, 500, 100, 1);
  countSlider.position(15, windowHeight - 50);
  countSlider.style('width', `${width-30}px`);
  alphaSlider = createSlider(0, 255, 30, 1);
  alphaSlider.position(15, windowHeight - 30);
  alphaSlider.style('width', `${width-30}px`);
  
  for (let i = 0; i < countSlider.value(); i++) balls.push(new Ball(random(width-20)+10, random(height-20)+10));
}

function draw() {
  if (width != windowWidth || height != windowHeight-60) {
    resizeCanvas(windowWidth, windowHeight-60);
    
    countSlider.position(15, height + 10);
    countSlider.style('width', `${width-30}px`);
    
    alphaSlider.position(15, height + 30);
    alphaSlider.style('width', `${width-30}px`);
  }
  background(220, 220, 220, alphaSlider.value());
  
  balls.forEach((e) => {
    e.update();
    e.show();
  });
  while (countSlider.value() > balls.length) {
    balls.push(new Ball(random(width-20)+10, random(height-20)+10));
  }
  
  while (countSlider.value() < balls.length) {
    balls.shift();
  }
}

function mouseClicked() {
  balls.push(new Ball(mouseX, mouseY));
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x,y);
    this.vel = createVector(random(-1,1), random(-1,1));
  }
  
  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.checkWall();
  }
  
  checkWall(){
    if (this.pos.x < 0 ){
    this.vel.x *= -1;
    }
     if (this.pos.y < 0 ){
     
      this.vel.y *= -1;
    }
    if (this.pos.x > width){
  
      this.vel.x *= -1;
    }
    if (this.pos.y > height){
      this.vel.y *= -1;
    }
  }
  
  drawLines() {
    let selfIndex = balls.indexOf(this)
    balls.forEach((e, i) => {
      let d = this.pos.dist(e.pos);
      
      if (d < 255/connectionVal && d!=0 && selfIndex > i) {
        
        let midPt = createVector((this.pos.x+e.pos.x)/2, (this.pos.y+e.pos.y)/2);
        
       
        stroke(this.colorFrom(midPt, 255-d*connectionVal));
        line(e.pos.x, e.pos.y, this.pos.x, this.pos.y);
      }
    });
  }
  
  colorFrom(pos, alpha) {
    return color(pos.x/width*255, pos.y/height*255, 255-pos.x/width*255, alpha)
  }
  
  show() {
    this.drawLines();
    noStroke();
    fill(this.colorFrom(this.pos, 255))
    circle(this.pos.x, this.pos.y, 5);
  }
}

