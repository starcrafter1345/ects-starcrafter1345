class ECTS {
  constructor(score) {
    this.score = Number(score);
  }

  ectsFromScore() {
    let ectsScore;

    if (90 <= this.score && this.score <= 100) {
      ectsScore = "A";
    } else if (82 <= this.score && this.score <= 89) {
      ectsScore = "B";
    } else if (74 <= this.score && this.score <= 81) {
      ectsScore = "C";
    } else if (65 <= this.score && this.score <= 73) {
      ectsScore = "D";
    } else if (60 <= this.score && this.score <= 64) {
      ectsScore = "E"
    } else {
      ectsScore = "F"
    }

    return ectsScore;
  }
}

module.exports = ECTS;