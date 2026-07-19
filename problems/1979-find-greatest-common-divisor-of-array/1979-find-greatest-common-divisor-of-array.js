/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = nums[0];
    let max = nums[0];
    
    // Find min and max in a single pass
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i];
        if (nums[i] > max) max = nums[i];
    }
    
    // Euclidean algorithm to find GCD
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    
    return gcd(min, max);
};