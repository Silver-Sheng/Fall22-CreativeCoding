function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
}

function draw() {
    background(244, 236, 213);
    translate(300, 300);
    rotate(-90);

    let hrPointer = hour();
    let minPointer = minute();
    let secPointer = second();

    noStroke();
    fill(255, 150)
    ellipse(0, 0, 370, 370);

    strokeWeight(6);
    noFill();
    stroke(166, 178, 165);
    let secAngle = map(secPointer, 0, 60, 0, 360)
    arc(0, 0, 370, 370, 0, secAngle);

    strokeWeight(8);
    stroke(249, 218, 136);
    let minAngle = map(minPointer, 0, 60, 0, 360)
    arc(0, 0, 350, 350, 0, minAngle);

    strokeWeight(10);
    stroke(172, 26, 50);
    let hrAngle = map(hrPointer % 12, 0, 24, 0, 360)
    arc(0, 0, 325, 325, 0, hrAngle);

    push();
    rotate(secAngle);
    stroke(166, 178, 165);
    strokeWeight(6);
    line(0, 0, 125, 0);
    pop();

    push();
    rotate(minAngle);
    stroke(249, 218, 136);
    strokeWeight(8);
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(hrAngle);
    stroke(172, 26, 50);
    strokeWeight(10);
    line(0, 0, 70, 0);
    pop();

    push();
    rotate(90);
    noStroke();
    fill(172, 26, 50);
    textSize(17);
    text('12', -10, -135);

    textSize(17);
    text('3', 135, 5);
    
    textSize(17);
    text('6', -5, 145);

    textSize(17);
    text('9', -145, 5);


    
}




