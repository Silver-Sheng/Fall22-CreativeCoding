class Particle {
  constructor(x, y, innerR, outerR, level, color) {
    this.pos = p5.Vector.random2D();
    this.acc = this.pos.copy().mult(random(-0.0001, -0.001));
    // this.c = "#2BF0FB";
    this.c = color;
    this.w = level / 35;
    this.innerR = innerR;
    this.outerR = outerR;
    this.center = createVector(x, y);
    this.target = createVector(
      x + this.pos.x * innerR,
      y + this.pos.y * innerR
    );
    this.pos = this.pos.mult(this.outerR);
    this.pos.x += this.center.x;
    this.pos.y += this.center.y;

    // console.log(this.pos);

    this.vel = createVector(0, 0);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.pos.add(this.vel);
    this.pos.add(this.vel);
    this.pos.add(this.vel);
  }

  inBound() {
    let check =
      (this.center.x - this.pos.x) ** 2 + (this.center.y - this.pos.y) ** 2 >
      this.innerR ** 2;
    return check;
  }

  hasNotGone() {
    return (
      this.pos.x < width ||
      this.pos.x > 0 ||
      this.pos.y < height ||
      this.pos.y > 0
    );
  }

  turn() {
    this.acc.mult(-30);
  }

  show() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}
