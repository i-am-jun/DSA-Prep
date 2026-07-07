/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    // Convert number to string and split into digits
    const digits = n.toString().split('');
    
    // Filter out '0' and join to form the new number string
    const nonZeroStr = digits.filter(d => d !== '0').join('');
    
    // If there are no non-zero digits, return 0
    if (nonZeroStr === '') return 0;
    
    // Convert the concatenated string to an integer
    const x = Number(nonZeroStr);
    
    // Calculate the sum of the digits in x
    let sum = 0;
    for (let i = 0; i < nonZeroStr.length; i++) {
        sum += Number(nonZeroStr[i]);
    }
    
    // Return the product
    return x * sum;
};