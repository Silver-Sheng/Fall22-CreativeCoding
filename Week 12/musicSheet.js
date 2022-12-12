let trebleclef;
let space;
let c1, c2;

function preload() {
  trebleclef = loadImage("image/trebleclef.png");
}

function setup() {
  createCanvas(700, 400);

  c1 = color("#ffdde1");
  c2 = color("#ffafbd");
  setGradient(c1, c2);

  space = height / 7;
}

function draw() {
  //   background(255);

  // create an blank music sheet
  fill(255);
  stroke(255);
  strokeWeight(3);
  for (let y = space / 2 + space; y < height - space; y += space) {
    line(0, y, width, y);
  }
  image(trebleclef, -space / 2, -10, 250, height + 20);
}

function setGradient(c1, c2) {
  //background color gradient from white to pink color
  for (let y = 0; y < height; y++) {
    let n = map(y, 0, height, 0, 2);
    let gradientc = lerpColor(c1, c2, n);
    stroke(gradientc);
    line(0, y, width, y);
  }
}

// create a class for generating musical notes
class MusicalNote {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 255;
  }

  // define the movoment and motion for muscial note
  //   moveNote() {
  //     //animate its horizontal movement
  //     //control and opacity of the musical note
  //   }

  // draw the muscial note
  drawNote() {
    push();
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, 60, space - 20);
    pop();

    this.x -= 5.5;
    this.alpha -= 3;
  }
}
