/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const operations = [];
    let current = 1;

    for (const num of target) {
        // While the stream number is not the one we need for target
        while (current < num) {
            operations.push("Push", "Pop");
            current++;
        }
        
        // When we find the target number in the stream
        operations.push("Push");
        current++;
    }

    return operations;

};