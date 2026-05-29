/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
      // Map each number to its digit sum, then find the minimum
    return Math.min(...nums.map(num => {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }));
};