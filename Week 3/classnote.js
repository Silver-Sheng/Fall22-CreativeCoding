let ball = {
    x: 100,
    y: 200
}

let numArray = [1, 3, 5, 7, 10, 100]


// let ballArray = []


function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < numArray.length; i++)
    console.log (numArray[i])
    
}

function draw() {
    background(0);
    
    fill(200);
    ellipse(ball.x, numArray[5], 100, 100);
}