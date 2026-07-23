/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
      const n = nums.length;
    
    // For arrays smaller than 3, we can only obtain the elements themselves
    if (n < 3) {
        return n;
    }
    
    // Find the smallest power of 2 strictly greater than n
    let powerOfTwo = 1;
    while (powerOfTwo <= n) {
        powerOfTwo <<= 1;
    }
    
    return powerOfTwo;
};