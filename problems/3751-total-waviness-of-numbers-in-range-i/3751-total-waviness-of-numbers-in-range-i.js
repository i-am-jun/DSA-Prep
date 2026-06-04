/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let totalSum = 0;

    // Helper function to calculate waviness for a single number
    const getWaviness = (num) => {
        const s = num.toString();
        if (s.length < 3) return 0;
        
        let count = 0;
        for (let i = 1; i < s.length - 1; i++) {
            const prev = s[i - 1];
            const curr = s[i];
            const next = s[i + 1];
            
            // Check if current digit is a peak or a valley
            if ((curr > prev && curr > next) || (curr < prev && curr < next)) {
                count++;
            }
        }
        return count;
    };

    // Iterate through all numbers in the inclusive range
    for (let i = num1; i <= num2; i++) {
        totalSum += getWaviness(i);
    }

    return totalSum;
};