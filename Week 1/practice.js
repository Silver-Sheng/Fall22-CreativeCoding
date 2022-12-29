let x = 200;
let y = 150;

function setup() {
  createCanvas(400, 400);
}

let myName = "Minion";

function draw() {
  background(x, y, x);

  stroke(255, 255, 255);
  fill(150, 200, 225);
  ellipse(100, 275, 25, 25);

  fill(250, 200, 150);
  rect(frameCount, 100, 25, 25);

  stroke(200, 200, 200);
  line(0, 0, width, height);

  fill(255, 255, 255);
  text(myName, 180, 380);
}
