/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If it's a closing bracket
        if (map[char]) {
            // Pop the top element (or use a dummy value if empty)
            const topElement = stack.length === 0 ? '#' : stack.pop();
            
            // If the popped element doesn't match the required opener
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, it's valid
    return stack.length === 0;
};