let color1, color2, color3, color4, color5, color6 =0;

//create a class for faces:
class Face {
    constructor() {
        //make create face in relation to mouse positions:
        this.x = mouseX;
        this.y = mouseY;
        //create random face sizes
        this.r = random(150, 250);
    }

    // function for drawing faces
    showFace() {
        //draw a circle with for the face
        push();
        strokeWeight(4);
        fill(color1, color2, color3);
        ellipse(this.x, this.y, this.r, this.r);
        pop();

        //draw eyes:
        let eye = new Eyes(this.r);
        eye.showEyes();

        //draw nose:
        let nose = new Nose(this.r);
        nose.showNose();

        //draw mouth:
        let mouth = new Mouth(this.r);
        mouth.showMouth();

       
        //for fixed facial expression combo:
        // let type = random([1, 2, 3, 4, 5])
    
        // let eye = new Eyes(this.r);
        // eye.showEyes(type);

        // let mouth = new Mouth(this.r);
        // mouth.showMouth(type);

        // let nose = new Nose(this.r);
        // nose.showNose(type);

    }
}