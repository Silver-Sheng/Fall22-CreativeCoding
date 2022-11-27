class Ball {
    constructor(x, y, c){
      this.x = x
      this.y = y
      this.speedX = random(-1,1)
      this.speedY = random(-1,1)
      this.color = c//color(128, 64, 185)
    }
  
    move(){
      this.x += this.speedX
      this.y += this.speedY
    }
  
    display(){
      fill(this.color)
      ellipse(this.x, this.y, 100)
    }
  }