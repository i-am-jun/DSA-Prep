/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
  let m = box.length;
    let n = box[0].length;
    let res = Array.from({ length: n }, () => Array(m).fill('.'));

    // 1. Rotate 90 degrees clockwise and map stones/obstacles
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[j][m - 1 - i] = box[i][j];
        }
    }

    // 2. Simulate gravity: stones fall in the rotated matrix
    // Now m is the number of rows and n is the number of cols in 'res'
    for (let j = 0; j < m; j++) {
        let emptyPos = n - 1; // Start at the bottom
        for (let i = n - 1; i >= 0; i--) {
            if (res[i][j] === '*') {
                emptyPos = i - 1; // Obstacle blocks falling
            } else if (res[i][j] === '#') {
                // Swap stone to the lowest empty spot
                let temp = res[i][j];
                res[i][j] = '.';
                res[emptyPos][j] = temp;
                emptyPos--;
            }
        }
    }

    return res;  
};