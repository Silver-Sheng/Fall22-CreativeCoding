let color1,
  color2,
  color3,
  color4,
  color5,
  color6 = 0;

//create a class for faces:
class Face {
  constructor(x, y) {
    //make create face in relation to mouse positions:
    this.x = x;
    this.y = y;
    console.log("x is", x);
    console.log("y is", y);
    //create default face sizes
    this.r = 200;
    this.eye = null;
    this.nose = null;
    this.mouth = null;
  }

  updateArduino(potentiometerData) {
    // update face radius with potentiometer input from arduino
    this.r += potentiometerData;
  }

  // function for drawing faces
  showFace() {
    //draw a circle for the face
    push();
    strokeWeight(4);
    fill(color1, color2, color3);
    ellipse(this.x, this.y, this.r, this.r);
    pop();

    //draw eyes:
    this.eye = new Eyes(this.x, this.y, this.r);
    this.eye.showEyes();

    //draw nose:
    this.nose = new Nose(this.x, this.y, this.r);
    this.nose.showNose();

    //draw mouth:
    this.mouth = new Mouth(this.x, this.y, this.r);
    this.mouth.showMouth();
  }
}
