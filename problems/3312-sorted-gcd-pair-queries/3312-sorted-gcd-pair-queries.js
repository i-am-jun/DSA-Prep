/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function(nums, queries) {
    const maxVal = Math.max(...nums);
    
    // Frequency of each number
    const freq = new Array(maxVal + 1).fill(0);
    for (const num of nums) {
        freq[num]++;
    }
    
    // Count multiples
    const cnt = new Array(maxVal + 1).fill(0);
    for (let i = 1; i <= maxVal; i++) {
        let count = 0;
        for (let j = i; j <= maxVal; j += i) {
            count += freq[j];
        }
        cnt[i] = count;
    }
    
    // Inclusion-Exclusion to find exact pairs for each GCD
    const exact = new Array(maxVal + 1).fill(0);
    for (let i = maxVal; i >= 1; i--) {
        let pairs = Math.floor(cnt[i] * (cnt[i] - 1) / 2);
        for (let j = 2 * i; j <= maxVal; j += i) {
            pairs -= exact[j];
        }
        exact[i] = pairs;
    }
    
    // Prefix sums of exact counts
    const prefix = new Array(maxVal + 1).fill(0);
    for (let i = 1; i <= maxVal; i++) {
        prefix[i] = prefix[i - 1] + exact[i];
    }
    
    // Binary search helper
    const findGcd = (target) => {
        let left = 1, right = maxVal;
        let ans = maxVal;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (prefix[mid] > target) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return ans;
    };
    
    // Process queries
    const ans = [];
    for (const q of queries) {
        ans.push(findGcd(q));
    }
    
    return ans;
};