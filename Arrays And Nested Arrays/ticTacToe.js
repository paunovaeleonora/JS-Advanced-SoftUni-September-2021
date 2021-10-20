function ticTacToe(moves) {
    const board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    
    function countOccurrences(arr, val){ 
        arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
        if (arr.length === a) {
            return true;
        }
        return false;
    };

    

    for (let i = 0; i < moves.length; i++); {
        let row, col = moves[i].split(' ');
        if (i % 2 == 0) {
            board[row][col] = 'X';
        }else {
            board[row][col] = 'O';
        }

    }
}