//draw a class for eyes
class Eyes {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  //draw normal eyes:
  showNormalEyes() {
    //draw the eyes outline
    strokeWeight(3);
    stroke(0);
    fill(255);
    //left eye
    ellipse(
      this.x - (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 4,
      this.r / 8
    );
    //right eye
    ellipse(
      this.x + (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 4,
      this.r / 8
    );
    //draw the pupils
    fill(color4, color5, color6);
    //right pupil
    ellipse(
      this.x - (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 8,
      this.r / 8
    );
    //left pupil
    ellipse(
      this.x + (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 8,
      this.r / 8
    );
  }

  //draw speechless eyes:
  showLinearEyes() {
    fill(0);
    //right
    rect(
      this.x - (1 / 3) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 5,
      this.r / 20
    );
    //left
    rect(
      this.x + (1 / 7) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 5,
      this.r / 20
    );
  }

  //draw bean eyes:
  showRoundEyes() {
    fill(0);
    //right
    ellipse(
      this.x - (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 10,
      this.r / 10
    );
    //left
    ellipse(
      this.x + (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 10,
      this.r / 10
    );
  }

  //draw shock eyes:
  showeShockEyes() {
    //draw the eyes outline
    strokeWeight(2);
    stroke(0);
    fill(255);
    //left eye
    ellipse(
      this.x - (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 4,
      this.r / 4
    );
    //right eye
    ellipse(
      this.x + (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 4,
      this.r / 4
    );
    //draw the pupils
    fill(0);
    //right pupil
    ellipse(
      this.x - (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 10,
      this.r / 10
    );
    //left pupil
    ellipse(
      this.x + (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 10,
      this.r / 10
    );
  }

  //draw puppy eyes:
  showPuppyEyes() {
    fill(0);
    //left eye
    ellipse(
      this.x - (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 4,
      this.r / 4
    );
    //right eye
    ellipse(
      this.x + (1 / 4) * this.r,
      this.y - (1 / 10) * this.r,
      this.r / 4,
      this.r / 4
    );
    fill(255);
    //right pupil lower highlight
    ellipse(
      this.x - (1 / 5) * this.r,
      this.y - (1 / 20) * this.r,
      this.r / 11,
      this.r / 11
    );
    //left pupil lower higtlight
    ellipse(
      this.x + (1 / 3.3) * this.r,
      this.y - (1 / 20) * this.r,
      this.r / 10,
      this.r / 10
    );
    //right pupil upper highlight
    ellipse(
      this.x - (1 / 3.5) * this.r,
      this.y - (1 / 8) * this.r,
      this.r / 7,
      this.r / 7
    );
    //left pupil upper hightlight
    ellipse(
      this.x + (1 / 4.7) * this.r,
      this.y - (1 / 8) * this.r,
      this.r / 7,
      this.r / 7
    );
  }

  //create a ramdom function for showing eyes:
  showEyes(type) {
    let i = random([1, 2, 3, 4, 5]);
    if (i == 1) {
      this.showNormalEyes();
    } else if (i == 2) {
      this.showLinearEyes();
    } else if (i == 3) {
      this.showRoundEyes();
    } else if (i == 4) {
      this.showeShockEyes();
    } else {
      this.showPuppyEyes();
    }
  }

  // for fixed facial expression combo:
  // showEyes(type) {
  //     if (type == 1) {
  //         this.showNormalEyes();
  //     } else if (type == 2) {
  //         this.showLinearEyes();
  //     } else if (type == 3) {
  //         this.showRoundEyes();
  //     } else if(type == 4) {
  //         this.showeShockEyes();
  //     } else {
  //         this.showSadEyes();
  //     }
  // }
}
