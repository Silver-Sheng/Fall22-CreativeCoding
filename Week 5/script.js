let toggle = false

let dog;




function setup() {
    createCanvas(windowWidth, windowHeight);

    fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
        console.log("response recived")
        console.log(response)
        return response.json()
    }).then((data) => {
        console.log("json parsed!")
        console.log(data)
    })

    setTimeout(doThisLater, 4000)
    
    setTimeout(doThisEvenLater, 6000)

    setTimeout(() => {
        console.log("Hello, again")
        toggle = true
    }, 8000)
}

function draw() {
    background(0);
    if(toggle) ellipse(100, 100, 100)
}

function doThisLater() {
    console.log("hello, world!!!!");
    toggle = true
}


const doThisEvenLater = () => {}

const sum = (a, b) => a + b;