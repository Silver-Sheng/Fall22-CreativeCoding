//create a mouth class
class Mouth {
    constructor(r) {
        this.x = mouseX;
        this.y = mouseY;
        this.r = r;
    }

    //draw a normal mouth:
    showSmileMouth() {
        angleMode(DEGREES);
        fill(255);
        arc(this.x, this.y+this.r/5, this.r/3, this.r/3, 0, 180, CHORD)
    }

    //draw a speechless mouth:
    showlinearMouth() {
        push();
        rectMode(CENTER);
        noStroke();
        fill(0);
        rect(this.x, this.y+1/5*this.r, this.r/3, this.r/15);
        pop();
    }

    //draw a round mouth:
    showRoundMouth() {
        fill(0);
        ellipse(this.x, this.y+1/4*this.r, this.r/4, this.r/4)
    }

    //draw a shock mouth:
    showShockMouth() {
        push();
        stroke(0);
        fill(255)
        ellipse(this.x, this.y+1/4*this.r, this.r/4, this.r/3)
        pop();
    }

    //draw a sad mouth
    showSadMouth() {
        push();
        angleMode(DEGREES)
        noFill();
        strokeWeight(8)
        arc(this.x, this.y+this.r/3, this.r/3, this.r/3, 200, 340);
        pop();
    }

    //draw mouth with random order:
    showMouth() {
        let i = random([1, 2, 3, 4, 5]);
        if (i == 1)  {
            this.showSmileMouth();
        } else if (i == 2) {
            this.showlinearMouth();
        } else if (i == 3) {
            this.showRoundMouth();
        } else if(i == 4) {
            this. showShockMouth();
        } else if (i == 5) {
            this.showSadMouth();
        }
    }

    //for fixed facial expression combo:
    // showMouth(type) {
    //     if (type == 1) {
    //         this.showSmileMouth();
    //     } else if (type == 2) {
    //         this.showlinearMouth();
    //     } else if (type == 3) {
    //         this.showRoundMouth();
    //     } else if(type == 4) {
    //         this. showShockMouth();
    //     } else if (type == 5) {
    //         this.showSadMouth();
    //     }
    // }
}