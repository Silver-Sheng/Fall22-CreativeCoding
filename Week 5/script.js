// let toggle = false

let dogImg;

function setup() {
    createCanvas(windowWidth, windowHeight);

    // fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
    //     console.log("response recived")
    //     console.log(response)
    //     return response.json()
    // }).then((data) => {
    //     console.log("json parsed!")
    //     console.log(data)

    //     dogImg = loadImage(data.message)

    // })

    getDog("https://dog.ceo/api/breeds/image/random")

    // setTimeout(doThisLater, 4000)
    
    // setTimeout(doThisEvenLater, 6000)

    // setTimeout(() => {
    //     console.log("Hello, again")
    //     toggle = true
    // }, 8000)
}

function draw() {
    background(0);

    if (dogImg != undefined) {
        let dogWidth = dogImg.width
        let dogHeight = dogImg.height

        if (dogImg.height > height) {
            dogWidth /= 2
            dogHeight /= 2
        }
        image(dogImg, 0, 0, dogWidth, dogHeight)
    }
    
}

async function getDog(url) {
    const response = await fetch(url)
    const data = await response.json()
    dogImg = loadImage(data.message)
}







// function doThisLater() {
//     console.log("hello, world!!!!");
//     toggle = true
// }


// const doThisEvenLater = () => {}

// const sum = (a, b) => a + b;