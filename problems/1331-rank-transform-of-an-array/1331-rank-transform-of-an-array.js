/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
       // 1. Create a sorted copy of unique numbers
    const sortedUnique = [...new Set(arr)].sort((a, b) => a - b);
    
    // 2. Map each number to its 1-based rank
    const rankMap = new Map();
    sortedUnique.forEach((num, index) => {
        rankMap.set(num, index + 1);
    });
    
    // 3. Replace each element in the original array with its rank
    return arr.map(num => rankMap.get(num)); 
};