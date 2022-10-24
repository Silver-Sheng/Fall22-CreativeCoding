let sector;
// let sectorArray = [];

function setup() {
  createCanvas(400, 400);
  sector = new Sector()
}

function draw() {
  background(220);
  sector.display()
}

function mouseMoved() {
  sector.update(mouseX, mouseY)
}

class Sector{
  constructor(x, y) {
    this.pos = createVector(width/2, height/2);
    this.x = 0;
    this.y = 0;
    this.right = false;
    this.bottom = false;
    this.rotation = 0;
    this.targetRotation = 0;
  }
  
  update(mX, mY){
    if(mX > this.x) {
      this.right = true;
    } else {
      this.right = false;
    }
    if(mY > this.y) {
      this.bottom = true;
    } else {
      this.bottom = false
    }
  }
  
  display(){
    angleMode(DEGREES)
    fill(255)
    if(this.right && !this.bottom) {
      this.targetRotation = 90
    } 
    else if(!this.right && this.bottom) { 
      this.targetRotation = 180
    }
    else if (!this.right && !this.bottom) {
      this.targetRotation = 270
    }
    else {
      this.targetRotation = 0
    }
    
    this.rotation = lerp(this.rotation, this.targetRotation, 0.05)
    
    push()
    translate(this.pos.x, this.pos.y)
    rotate(this.rotation)
    arc(
      this.x, this.y,
      this.x + 100, this.y+100,
      0, 90, PIE
    )
    pop()
  }
}