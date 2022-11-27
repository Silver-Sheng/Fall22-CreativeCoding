let ballArray = []

function setup() {
  createCanvas(windowWidth, windowHeight)

  for(let i = 0; i < 100; i++){
    ballArray.push(new Ball(random(width), random(height), 
    color(random(255), random(255), random(255))))
  }

  console.log(ballArray)
}

function draw() {
  background(100)
  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].move()
    ballArray[i].display()
  }
}