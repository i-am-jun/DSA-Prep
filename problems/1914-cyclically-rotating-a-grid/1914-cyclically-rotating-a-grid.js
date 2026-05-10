/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    let t = 0, l = 0, b = m - 1, r = n - 1;

    // Process each layer
    while (t < b && l < r) {
        let layer = [];
        // 1. Extract layer elements (clockwise order)
        for (let j = l; j <= r; j++) layer.push(grid[t][j]);
        for (let i = t + 1; i <= b; i++) layer.push(grid[i][r]);
        for (let j = r - 1; j >= l; j--) layer.push(grid[b][j]);
        for (let i = b - 1; i > t; i--) layer.push(grid[i][l]);

        // 2. Calculate effective rotation (counter-clockwise)
        let nRot = k % layer.length;
        
        // 3. Rotate array clockwise by (length - nRot) or 
        // counter-clockwise by nRot. 
        // Using slice to shift elements counter-clockwise:
        let rotatedLayer = layer.slice(nRot).concat(layer.slice(0, nRot));

        // 4. Map rotated elements back
        let idx = 0;
        for (let j = l; j <= r; j++) grid[t][j] = rotatedLayer[idx++];
        for (let i = t + 1; i <= b; i++) grid[i][r] = rotatedLayer[idx++];
        for (let j = r - 1; j >= l; j--) grid[b][j] = rotatedLayer[idx++];
        for (let i = b - 1; i > t; i--) grid[i][l] = rotatedLayer[idx++];

        // Move to the next inner layer
        t++; l++; b--; r--;
    }

    return grid;
};