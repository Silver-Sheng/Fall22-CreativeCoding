let catImg;
let catWidth;
let catHeight;

let duckImg;
let duckWidth;
let duckHeight;

function setup() {
    createCanvas(windowWidth, windowHeight);

    getCat("https://api.thecatapi.com/v1/images/search")
    getDuck("https://random-d.uk/api/v1/random")

}

//get random picture of cat
// get random picture of duck in the lowever half of screen
function draw() {
    background(0);    
    if(catImg != undefined) {
        if (catImg.height > windowHeight || catImg.width > windowWidth) {
            catWidth == windowWidth/2
            catHeight == windowHeight/2
        }
        image(catImg, 0, 0, catWidth, catHeight)
    }
    if (duckImg != undefined) {    
        if (duckImg.height > windowHeight || duckImg.width > windowWidth) {
            duckWidth == windowWidth/2
            duckHeight == windowHeight/2
        }
        image(duckImg, 0, height/2, duckWidth, duckHeight)
    }
}

async function getCat(url) {
    const response = await fetch(url);
    const data = await response.json();
    print(data);
    catImg = loadImage(data[0].url);
    catWidth = data[0].width;
    catHeight = data[0].height;
}

async function getDuck(url) {
    const response = await fetch(url)
    const data = await response.json()
    duckImg = loadImage(data.url)
}