// let toggle = false

let dogImg;

function setup() {
  createCanvas(windowWidth, windowHeight)
  // setTimeout(doThisLater, 4000)
  // setTimeout(doThisEvenLater, 6000)
  // setTimeout(() => {
  //   console.log("Hello, again")
  //   toggle = true
  // }, 8000)

  // fetch("https://dog.ceo/api/breeds/image/random")
  // .then((response) => {
  //   console.log("response received!")
  //   console.log(response)
  //   return response.json()
  // })
  // .then((data) => {
  //   console.log("json parsed!")
  //   console.log(data)
  //   dogImg = loadImage(data.message)
  // })
  // .catch((err) => {
  //   console.log("it didn't work!")
  //   console.error(err)
  // })

  getDog("https://dog.ceo/api/breeds/image/random")
}

function draw() {
  background(125)

  // if(toggle)  ellipse(100, 100, 100)
  if(dogImg != undefined) {
    let dogWidth = dogImg.width
    let dogHeight = dogImg.height

    if (dogImg.width > width) {
      dogHeight /= 2
      dogWidth /= 2
    }

    image(dogImg, 0, 0, dogWidth, dogHeight)
  }
  
}


function doThisLater() {
  console.log("Hello, world!!!!")
  toggle = true
}

const doThisEvenLater = () => {
  console.log("Goodbye!!!!")
  toggle = false
}

const sum = (a, b) => a + b


async function getDog(url) {
  const response = await fetch(url)
  const data = await response.json()
  dogImg = loadImage(data.message)
}