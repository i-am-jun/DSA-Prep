/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    // Helper function to calculate the product of digits of a given number
    const getDigitProduct = (num) => {
        if (num === 0) return 0;
        let product = 1;
        while (num > 0) {
            const digit = num % 10;
            if (digit === 0) return 0; // Short-circuit since product becomes 0
            product *= digit;
            num = Math.floor(num / 10);
        }
        return product;
    };

    // Sequentially check each number starting from n
    while (true) {
        if (getDigitProduct(n) % t === 0) {
            return n;
        }
        n++;
    }
};