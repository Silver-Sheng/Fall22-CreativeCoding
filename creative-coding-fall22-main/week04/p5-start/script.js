let shapeArray = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  console.log(shapeArray)
}

function draw() {
  background(100)
  shapeArray.push(makeRandomShape())

  // for (let i = 0; i < shapeArray.length; i++) {
  //   shapeArray[i].move()
  //   shapeArray[i].display()
  // }

  // for (const shape of shapeArray) {
  //   shape.move()
  //   shape.display()
  // }

  shapeArray.forEach(function(shape) {
    shape.move()
    shape.display()
    console.log(shape.pos.x)
  })
}


function makeRandomShape() {
  let pos = createVector(width/2, height/2)
  let speed = createVector(random(-1,1), random(0,5))
  let c = color(
    random(255),random(255),random(255))

  let randomVar = random(0, 3)

  let shape

  if (randomVar < 1) {
    shape = new Ball(pos,speed,c)
  } else if (randomVar < 2) {
    shape = new Block(pos, speed, c)
  } else {
    shape = new Tri(pos, speed, c)
  }

  return shape
}