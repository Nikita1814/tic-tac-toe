class TicTacToe {
  constructor() {
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentPlayer = "x";
    this.winner = null;
    this.turns = 0;
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] = this.currentPlayer;
      if (this.currentPlayer === "x") {
        this.currentPlayer = "o";
      } else {
        this.currentPlayer = "x";
      }

      this.turns += 1;
    }
  }

  isFinished() {
    if (this.getWinner() !== null || this.isDraw()) {
      return true;
    } else {
      return false;
    }
  }

  getWinner() {
    let f = this.field;
    for (let i = 0; i < this.field.length; i++) {
      if (f[i][0] !== null && f[i][0] === f[i][1] && f[i][0] === f[i][2]) {
        this.winner = f[i][0];
        return this.winner;
      }
      if (f[0][i] !== null && f[0][i] === f[1][i] && f[0][i] === f[2][i]) {
        this.winner = f[0][i];
        return this.winner;
      }
    }

    if (f[0][0] !== null && f[0][0] === f[1][1] && f[0][0] === f[2][2]) {
      this.winner = f[0][0];
      return this.winner;
    }
    if (f[0][2] !== null && f[0][2] === f[1][1] && f[0][2] === f[2][0]) {
      this.winner = f[0][2];
      return this.winner;
    }
    return this.winner;
  }

  noMoreTurns() {
    if (this.turns === 9) {
      return true;
    } else {
      return false;
    }
  }

  isDraw() {
    if (this.turns === 9 && this.getWinner() === null) {
      return true;
    } else {
      return false;
    }
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
