class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.matrix = [...Array(3)].map(e => Array(3).fill(null));
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.winner) {
            return;
        }
            
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = (this.currentPlayerSymbol === 'x') ? 'o' : 'x';

            for (let i = 0; i < 3; i++) {
                if ((this.matrix[i][0]) &&
                    (this.matrix[i][0] === this.matrix[i][1]) &&
                    (this.matrix[i][0] === this.matrix[i][2])) {
                        this.winner = this.matrix[i][0];
                        return;
                } else 
                if ((this.matrix[0][i] !== null) &&
                    (this.matrix[0][i] === this.matrix[1][i]) &&
                    (this.matrix[0][i] === this.matrix[2][i])) {
                        this.winner = this.matrix[0][i];
                        return;
                } else if (i === 0) {
                    if (((this.matrix[1][1] !== null) &&
                        (this.matrix[0][0] === this.matrix[1][1]) &&
                        (this.matrix[0][0] === this.matrix[2][2])) ||
                        ((this.matrix[0][2] === this.matrix[1][1]) &&
                        (this.matrix[0][2] === this.matrix[2][0]))) {
                            this.winner = this.matrix[1][1];  
                            return
                        }
                    }
                }
        }

    }

    isFinished() {
       return (this.isDraw() || this.winner) ? true : false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return !this.matrix.find(arr => arr.includes(null));
    }

    isDraw() {
        return (this.noMoreTurns() && (this.winner === null));
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
