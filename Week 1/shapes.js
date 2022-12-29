function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  noStroke();
  fill(0, 0, 0);
  beginShape();
  vertex(100, 35);
  vertex(120, 90);
  vertex(178, 90);
  vertex(130, 122);
  vertex(150, 180);
  vertex(100, 143);
  vertex(50, 180);
  vertex(70, 122);
  vertex(22, 90);
  vertex(80, 90);
  endShape();

  fill(255, 229, 0);
  triangle(290, 35, 360, 160, 220, 160);
  triangle(290, 195, 220, 80, 360, 80);

  fill(230, 44, 89);
  beginShape();
  vertex(100, 213);
  vertex(125, 247);
  vertex(160, 247);
  vertex(153, 280);
  vertex(175, 308);
  vertex(147, 325);
  vertex(137, 365);
  vertex(100, 347);
  vertex(63, 365);
  vertex(53, 325);
  vertex(25, 308);
  vertex(47, 280);
  vertex(40, 247);
  vertex(75, 247);
  endShape();

  fill(0, 150, 205);
  rect(235, 235, 110, 110);
  beginShape();
  vertex(290, 213);
  vertex(367, 290);
  vertex(290, 367);
  vertex(213, 290);
  endShape();
}
