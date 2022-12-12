class CoolCircle {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.r = random(75, 100);
    this.c = c;
    this.particles = [];
    this.alpha = 0;
    this.updateVec = 1;
    this.c.setAlpha(this.alpha);
  }

  updateAlpha() {
    if (this.alpha == 80) {
      this.updateVec = 1;
    }
    if (this.alpha == 204) {
      this.updateVec = -1;
    }
    this.alpha += 0.5 * this.updateVec;
    this.c.setAlpha(this.alpha);
  }

  appear() {
    let p = new Particle(
      this.x,
      this.y,
      this.r,
      this.r * 2,
      random(100, 360),
      color(this.c.toString("#rrggbb"))
    );
    this.particles.push(p);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].inBound()) {
        this.particles[i].update();
        this.particles[i].show();
      } else {
        this.particles.splice(i, 1);
        this.updateAlpha();
      }
    }
    push();
    stroke(this.c);
    strokeWeight(this.r / 5);
    noFill();
    circle(this.x, this.y, this.r * 2);
    pop();
  }

  halting() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].show();
      this.alpha -= 0.5;
    }

    push();
    stroke(this.c);
    strokeWeight(this.r / 5);
    noFill();
    circle(this.x, this.y, this.r * 2);
    pop();
  }

  turn() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].turn();
    }
    push();
    stroke(this.c);
    strokeWeight(this.r / 5);
    noFill();
    circle(this.x, this.y, this.r * 2);
    pop();
  }

  disappear() {
    for (let i = 0; i < this.particles.length; i++) {
      // console.log(this.particles[i].hasNotGone())
      if (this.particles[i].hasNotGone()) {
        this.particles[i].update();
        this.particles[i].show();
      } else {
        this.particles.splice(i, 1);
      }
    }

    push();
    stroke(this.c);
    strokeWeight(this.r / 5);
    noFill();
    circle(this.x, this.y, this.r * 2);
    pop();
  }
}
