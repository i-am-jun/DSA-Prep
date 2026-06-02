/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    if (!board || board.length === 0) return board;
    
    let m = board.length;
    let n = board[0].length;
    let stable = false;
    
    while (!stable) {
        stable = true;
        
        // 1. Scan and mark candies to crush (using negative values)
        // Horizontal scan
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n - 2; c++) {
                let val1 = Math.abs(board[r][c]);
                if (val1 !== 0 && 
                    val1 === Math.abs(board[r][c+1]) && 
                    val1 === Math.abs(board[r][c+2])) {
                    board[r][c] = -val1;
                    board[r][c+1] = -val1;
                    board[r][c+2] = -val1;
                    stable = false;
                }
            }
        }
        
        // Vertical scan
        for (let r = 0; r < m - 2; r++) {
            for (let c = 0; c < n; c++) {
                let val1 = Math.abs(board[r][c]);
                if (val1 !== 0 && 
                    val1 === Math.abs(board[r+1][c]) && 
                    val1 === Math.abs(board[r+2][c])) {
                    board[r][c] = -val1;
                    board[r+1][c] = -val1;
                    board[r+2][c] = -val1;
                    stable = false;
                }
            }
        }
        
        // If the board is stable, break out of the loop
        if (stable) break;
        
        // 2. Crush marked candies and drop the remaining ones
        for (let c = 0; c < n; c++) {
            let writeIdx = m - 1;
            for (let r = m - 1; r >= 0; r--) {
                if (board[r][c] > 0) {
                    board[writeIdx][c] = board[r][c];
                    writeIdx--;
                }
            }
            // Fill the top empty spaces with 0
            while (writeIdx >= 0) {
                board[writeIdx][c] = 0;
                writeIdx--;
            }
        }
    }
    
    return board;
};