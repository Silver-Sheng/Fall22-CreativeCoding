let catImg;
let catWidth;
let catHeight;

function setup() {
    createCanvas(windowWidth, windowHeight);

    getCat("https://api.thecatapi.com/v1/images/search")
}

function draw() {
    background(0);    
    if(catImg != undefined) {
         if (catImg.height > windowHeight || catImg.width > windowWidth) {
            catWidth /= 2
            catHeight /= 2
     }
     image(catImg, 0, 0, catWidth, catHeight)
    }
}

async function getCat(url) {
    const response = await fetch(url);
    const data = await response.json();
    // print(data);
    catImg = loadImage(data[0].url);
    catWidth = data[0].width;
    catHeight = data[0].height;
}



//get random picture of duck
// let duckImg;
// let duckWidth;
// let duckHeight;

// function setup() {
//     createCanvas(windowWidth, windowHeight);

//     getDuck("https://random-d.uk/api/v1/random")
// }

// function draw() {
//     background(0); 
//     if (duckImg != undefined) {     
//         image(duckImg, 0, height/2, duckWidth, duckHeight)
//     }
// }

// async function getDuck(url) {
//     const response = await fetch(url)
//     const data = await response.json()
//     duckImg = loadImage(data.url)
// }