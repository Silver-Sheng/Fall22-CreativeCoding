/*let nums = [20, 30, 40, 50, 60];
// let words = ["happy", "friends", "kind", "love"];
// array can be anything like strings, integers...

let i = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    for (i = 0; i < 5; i++) {
        noFill();
        stroke(255);
        ellipse(i*100+100, 200, nums[i], nums[i]);

    }


    // fill(255);
    // textSize(32);
    // text(words[i], 10, 200)

}

// function mousePressed() {
//     9 += 1;

//     if (i == words.length) {
//         i = 0;
//     }
// } */



function setup() {
    createCanvas(windowWidth, windowHeight);
}


function draw() {
    background(0);
    strokeWeight(4);
    stroke(255);

    translate(50, 50)

    for (let x = 0; x <= width; x += 150) {
        for(let y = 0; y <= height; y += 150) {
            fill(random(255), 0, random(255));
            ellipse(x, y, 50, 50);
        }
           
    }

}















// let ball = {
//     x: 100,
//     y: 200
// }

// let numArray = [1, 3, 5, 7, 10, 100]
    

// let ballArray = [
//     makeBall(200, 100)
// ]

// function makeBall(ballX, ballY) {
//     let ball = {
//         x: ballX,
//         y: ballY
//     }
//     return ball
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     for (let i = 0; i < 100; 
//         i++){
            
        // ellipse(
        //     ballArray[i].x,
        //     ballArray[i].y, 100)

        // }

    // console.log (numArray[i])

    
// }

// function draw() {
//     background(0);
    
//     fill(200);
//     ellipse(ball.x, numArray[5], 100, 100);
// }


// class Ball {
//     constructor(x.y) {
//         this.x = x
//         this.y = y
//     }
// }