/* 1. A new face can be generated when the mouse clicks
2. The color of the face can change while clicking
3. The facial features can sort and combine randomly
4. The color of the eyes can change while clicking
5. Create a different class for each facial feature 
6. Create a new random backgroun with each click */

function setup() {
    createCanvas(600, 600);
    background(0);
    textSize(30);
    fill(255);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Tap to see the emoji :)",0, 200, width);
}

//make the face draw along with each click of mouse:
function mousePressed() {
    background(random(255), random(255), random(255));
    
    //create faces:
    let face = new Face();
    face.showFace();

    color1 = random(255);
    color2 = random(255);
    color3 = random(255);
    color4 = random(255);
    color5 = random(255);
    color6 = random(255);
}