let systems = []

function setup() {
  createCanvas(windowWidth, windowHeight)

  // for (let i = 0; i < 10; i++) {
  //   systems.push(new ShapeSystem(
  //     // createVector(
  //       random(width),
  //       random(height)
  //     // )
  //   ))
    
  // }
}

function draw() {
  background(100)

  systems.forEach(system => {
    let temp = system.makeRandomShape()
    system.addNew(temp)
    system.updateShapes()
    system.displayShapes()
  })

  // shapeSystem.origin = createVector(mouseX, mouseY)
  // let temp = shapeSystem.makeRandomShape()
  // shapeSystem.addNew(temp)
  // shapeSystem.updateShapes()
  // shapeSystem.displayShapes()

  // console.log(shapeSystem.origin)
}

function mousePressed() {
  systems.push(new ShapeSystem(mouseX, mouseY))
}