
let ballX = 0;
let ballY = 0;

let targetX = 0;
let targetY = 0;



function setup() {
  createCanvas(800, 600)
}

function draw() {
  background(100)

  // ballX += deltaTime
  // ballX = millis()
  // ballX = second() * 10
  // ballY = minute() * 10

  // let i = 0
  // while (i < 10) {
  //   ellipse(ballX + i * 10, ballY + i * 10, 100, 100)
  //   i++
  // }

  // for(let i = 0; i < 10; i++){
  //   ellipse(ballX + i * 10, ballY + i * 10, 100, 100)
  // }
  // let x = sin(millis()/1000) 
  // ballX = map(x, -1, 1, -100, 100)

  // let y = cos(millis()/660)
  // ballY = map(y, -1, 1, -100, 100)

  // ellipse(width/2 + ballX, height/2 + ballY, 100, 100)

  ballX = ease(ballX, targetX, 0.10)
  console.log(Math.round(ballX), targetX)
  ballY = ease(ballY, targetY, 0.05)
  ellipse(ballX, ballY, 100)

  // push()
  // rotate(millis()/100)
  // translate(ballX, 0, 0)
  // ellipse(50, 100, 100, 100)
  // ellipse(-50, -100, 100, 100)
  // pop()

  // rect(500, 500, 100, 100)

  if (keyIsDown(UP_ARROW)) {
    ballY -= 1
  }
  if (keyIsDown(DOWN_ARROW)) {
    ballY += 1
  }
  if (keyIsDown(LEFT_ARROW)) {
    ballX -= 1
  }
  if (keyIsDown(RIGHT_ARROW)) {
    ballX += 1
  }
}

function sum(argumentOne, argumentTwo) {
  return argumentOne + argumentTwo
}

function ease(value, target, pct) {
  return value * (1-pct) + target * pct
}


// function keyTyped() {
//   console.log(key)
//   if (key == 'w') {
//     ballY -= 10
//   }
//   if (key == 's') {
//     ballY += 10
//   }
//   if (key == 'a') {
//     ballX -= 10
//   }
//   if (key == 'd') {
//     ballX += 10
//   }
// }

function mousePressed(){
  targetX = mouseX
  targetY = mouseY
}