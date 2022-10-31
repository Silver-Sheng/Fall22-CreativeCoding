//Create 9 groups of circular sectors that move around with mouse movements
//each group contains 4 sectors

let sector;
let sectorArray = [];
let colorArray = [];

function setup() {
  createCanvas(400, 400);
  //create 9 groups of circles that consist of 4 sectors
  for (a = 0; a < 3; a++) {
    for (b = 0; b < 3; b++) {
      //set the color value for each circle group
      colorArray = ["#80B4BF", "#0F402E", "#A1A67B", "#BF5E26"];
      /* other color options:
      colorArray = ["#e0d2a0", "#6d9333", "#334800", "#202515"]
      colorArray = ["#fc9600", "#eb6200", "#5c9143", "#004818"]
      colorArray = ["#6dc0d1", "#008ea8", "#006483", "#002f4c"]
      colorArray = ["#d2d2d4", "#8fb9d9", "#06364f", "#0a161d"]
      colorArray = ["#ffdf01", "#ffc100", "#ff8500", "#fe4b00"]
      colorArray = ["#a7c0d6", "#48a1c3", "#f4b73f", "#eb7830"]
       colorArray = ["#D9C562", "#A67232", "#8C5230", "#D98E73"] */

      //fill color randomly but not repeatedly for each circle group
      let color = random(colorArray);
      //remove the color that has been chosen before
      colorArray.splice(colorArray.indexOf(color), 1);

      //the center of each circle
      //x-coordinate of the circle center
      cx = a * 132 + 66;
      //y-coordinate of the circle center
      cy = b * 132 + 66;
      sectorArray.push(new Sector(cx - 27, cy - 27, 180, color));

      color = random(colorArray);
      colorArray.splice(colorArray.indexOf(color), 1);
      sectorArray.push(new Sector(cx + 27, cy - 27, 270, color));

      color = random(colorArray);
      colorArray.splice(colorArray.indexOf(color), 1);
      sectorArray.push(new Sector(cx - 27, cy + 27, 90, color));

      color = random(colorArray);
      colorArray.splice(colorArray.indexOf(color), 1);
      sectorArray.push(new Sector(cx + 27, cy + 27, 0, color));
    }
  }

  // for (x = 0; x < 6; x += 1) {
  //   for (y = 0; y < 6; y += 1) {
  //     sectorArray.push(new Sector((x*66)+33 , (y*66)+33))
  //   }
  // }
}

function draw() {
  background("#F2F0EB");
  // other color options:
  // background("#f2f2ef");
  // background("#e7eee7");
  // background("#f1f1f1");
  // background("#1d947d");

  //display all the sectors create above
  for (i = 0; i < 36; i++) {
    sectorArray[i].display();
  }
}

//let the sector object rotate based on the mouse movement
function mouseMoved() {
  for (i = 0; i < 36; i++) {
    sectorArray[i].update(mouseX, mouseY);
  }
}

// create a class for the circular sector
class Sector {
  // set up the angle, position, rotation, and color variables
  constructor(x, y, angle, secColor) {
    this.pos = createVector(x, y);
    this.angle = angle;
    this.secColor = secColor;
    this.right = false;
    this.bottom = false;
    this.rotation = 0;
    this.targetRotation = 0;
    this.secX = 0;
    this.secY = 0;
  }

  //comparing the mouse position to the sector's position
  update(mX, mY) {
    if (mX > this.pos.x) {
      this.right = true;
    } else {
      this.right = false;
    }
    if (mY > this.pos.y) {
      this.bottom = true;
    } else {
      this.bottom = false;
    }
  }

  //set up the angle, rotation, and color of the sector
  display() {
    angleMode(DEGREES);
    noStroke();
    fill(this.secColor);

    //define the rotation situations for 4 different angles
    switch (this.angle) {
      //when the initial angle is 0 degree
      case 0:
        if (this.right && !this.bottom) {
          this.targetRotation = 90;
        } else if (!this.right && this.bottom) {
          this.targetRotation = 270;
        } else if (!this.right && !this.bottom) {
          this.targetRotation = 0;
        } else {
          this.targetRotation = 180;
        }
        break;
      //when the initial angle is 180 degree
      case 180:
        if (this.right && !this.bottom) {
          this.targetRotation = 270;
        } else if (!this.right && this.bottom) {
          this.targetRotation = 90;
        } else if (!this.right && !this.bottom) {
          this.targetRotation = 180;
        } else {
          this.targetRotation = 0;
        }
        break;
      //when the initial angle is 90 degree
      case 90:
        if (this.right && !this.bottom) {
          this.targetRotation = 0;
        } else if (!this.right && this.bottom) {
          this.targetRotation = 180;
        } else if (!this.right && !this.bottom) {
          this.targetRotation = 270;
        } else {
          this.targetRotation = 90;
        }
        break;
      //when the initial angle is 270 degree
      case 270:
        if (this.right && !this.bottom) {
          this.targetRotation = 180;
        } else if (!this.right && this.bottom) {
          this.targetRotation = 0;
        } else if (!this.right && !this.bottom) {
          this.targetRotation = 90;
        } else {
          this.targetRotation = 270;
        }
        break;
    }

    //Rotation option 2: all sectors share one rotation method)
    // if(this.right && !this.bottom) {
    //   this.targetRotation = 90
    // }
    // else if(!this.right && this.bottom) {
    //   this.targetRotation = 270
    // }
    // else if (!this.right && !this.bottom) {
    //   this.targetRotation = 0
    // }
    // else {
    //   this.targetRotation = 180
    // }

    // smooth the rotation speed and movement of the sector
    if (this.targetRotation < this.rotation) {
      this.rotation = lerp(this.rotation, this.targetRotation + 360, 0.05);
    } else {
      this.rotation = lerp(this.rotation, this.targetRotation, 0.05);
    }

    //set the sector's angle and size
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation);

    //define four different initial positions for the sector
    switch (this.angle) {
      case 270:
        this.secX = -25;
        this.secY = 25;
        break;
      case 180:
        this.secX = 25;
        this.secY = 25;
        break;
      case 90:
        this.secX = 25;
        this.secY = -25;
        break;
      case 0:
        this.secX = -25;
        this.secY = -25;
        break;
      default:
    }

    arc(this.secX, this.secY, 100, 100, this.angle, this.angle + 90, PIE);
    pop();

    //to avoid errors from rotation
    if (this.rotation >= 360) {
      this.rotation -= 360;
    }
  }
}
