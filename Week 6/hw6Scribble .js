// library page : https://github.com/generative-light/p5.scribble.js
//reference for filling the square:https://www.youtube.com/watch?v=bCeDOS0dRIM
//reference for mapping the volumn: https://www.youtube.com/watch?v=NCCHQwNAN6Y&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=4


let music;
let amp;
let scribble;
let angle = 0;

function preload(){
  music = loadSound('Lauv - Paris In The Rain.mp3');
}

function setup() {
  createCanvas(400, 400);
  music.play();
  amp = new p5.Amplitude();
  scribble = new Scribble();
  music.setVolume(0.5)
}

function draw() {
  background(0);
  
  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.5, 100, 300)
  
  randomSeed(diam);
  
  scribble.maxOffset = 5;

  // the x coordinates of the border
  let xCoords = [width/4, width/4, width/4*3, width/4*3];
  // the y coordinates of the border
  let yCoords = [height/4, height/4*3, height/4*3, height/4];
  let gap = 15;
  
  stroke(155, 183, 212);
  scribble.scribbleFilling(xCoords, yCoords, gap, diam);
 
  strokeWeight(10);
  
  strokeWeight(5);
  stroke(255);
  scribble.scribbleRect(200, 200, diam, diam);
}