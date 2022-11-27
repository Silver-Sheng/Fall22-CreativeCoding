//create a class for nose
class Nose {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  //draw a triangle nose:
  triNose() {
    fill(0);
    triangle(
      this.x,
      this.y - 5,
      this.x - 5,
      this.y + 10,
      this.x + 5,
      this.y + 10
    );
  }

  //draw a round nose:
  roundNose() {
    fill(0);
    ellipse(this.x, this.y, this.r / 20, this.r / 20);
  }

  //show or not show the nose with random order:
  showNose() {
    let i = random([1, 2, 3, 4]);
    if (i == 1) {
      this.triNose();
    } else if (i == 3) {
      this.roundNose();
    }
  }

  //for fixed facial expression combo:
  // showNose(type) {
  //     if (type == 1) {
  //         this.normalNose();
  //     } else if (type == 4 || type == 3) {
  //         this.otherNose();
  //     }
  // }
}
