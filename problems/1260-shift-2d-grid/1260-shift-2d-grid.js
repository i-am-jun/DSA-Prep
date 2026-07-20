/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
     const m = grid.length;
    const n = grid[0].length;
    const total = m * n;
    
    // Normalize k to prevent unnecessary rotations
    k = k % total;
    
    // Initialize an empty grid of the same dimensions
    const result = Array.from({ length: m }, () => new Array(n));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Convert 2D index (i, j) to 1D index
            const current1DIndex = i * n + j;
            
            // Calculate new 1D position after shift
            const new1DIndex = (current1DIndex + k) % total;
            
            // Convert new 1D index back to 2D coordinates
            const newRow = Math.floor(new1DIndex / n);
            const newCol = new1DIndex % n;
            
            result[newRow][newCol] = grid[i][j];
        }
    }
    
    return result;
};