let shapeCirArray = [];
let start = 0;
let r = 150;
let angle = 0;
let numOfShape = 10;
let move;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 10; i++) {
    shapeCirArray[i] = new ShapeCir(start);
    start += 100;
  }

  move = TWO_PI / numOfShape;

}

function draw() {
  background(0);
  translate(60, 60)
  
  backColor();
  
  for (let i = 0; i < 10; i++) {
    shapeCirArray[i].present();
  }

  draw10Circles();
}


//function for background colors
function backColor() {
    noStroke();
    for (let x = 0; x <= width; x += 120) {
        for(let y = 0; y <= height; y += 120) {
            fill(random(100, 255), random(100), random(150, 255), 100);
            ellipse(x, y, 90, 90);
        } 
    }
}


// class for s group of circles moving horizontally
class ShapeCir {
    
    constructor(x, y, z) {
        this.x = x;
        this.y = 60;
        this.step = 10;
    }

    run() {
        if (this.x + this.step >= width || this.x + this.step <= 0) {
            this.step = this.step * -1;
        }
        this.x = this.x + this.step;
    }
  
    present() {
        noStroke();
        fill(random(255), 192, 203);
        ellipse(this.x, this.y, 70, 70, 100);

        this.run();
    }
  
}


//function to draw 10 gradient cirlces
function draw10Circles() {

    translate(650, 400)
    for (let j =0; j < numOfShape; j++) { 
        let a = r * sin(angle);
        let b = r * cos(angle);
        noStroke();
        fill(239, 235, 231, map(sin(frameCount/70), 0, 1, 0, 100));
        circle(a, b, 200 + map(sin(frameCount/70), 0, 1, 0, 100));
        angle += move; 
    }

}

