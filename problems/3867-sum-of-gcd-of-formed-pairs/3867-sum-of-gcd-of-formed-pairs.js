/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
       const n = nums.length;
    const prefixGcd = new Array(n);
    
    // Helper function to calculate GCD using Euclidean algorithm
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    
    // Step 1: Construct prefixGcd array
    let maxSoFar = nums[0];
    for (let i = 0; i < n; i++) {
        if (nums[i] > maxSoFar) {
            maxSoFar = nums[i];
        }
        prefixGcd[i] = gcd(nums[i], maxSoFar);
    }
    
    // Step 2: Sort prefixGcd in non-decreasing order
    prefixGcd.sort((a, b) => a - b);
    
    // Step 3: Pair the elements using two pointers and sum their GCDs
    let sum = 0;
    let left = 0;
    let right = n - 1;
    
    while (left < right) {
        sum += gcd(prefixGcd[left], prefixGcd[right]);
        left++;
        right--;
    }
    
    return sum;
};