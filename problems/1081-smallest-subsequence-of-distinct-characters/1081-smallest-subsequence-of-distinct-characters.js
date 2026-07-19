/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    // Map to store the last occurrence index of each character
    const lastOccurrence = new Map();
    for (let i = 0; i < s.length; i++) {
        lastOccurrence.set(s[i], i);
    }

    const stack = [];
    const inStack = new Set();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If the character is already in our subsequence, we skip it
        // to ensure each distinct character appears exactly once.
        if (inStack.has(char)) {
            continue;
        }

        // Greedily remove characters from the stack if:
        // 1. The stack is not empty
        // 2. The top of the stack is lexicographically greater than the current character
        // 3. The character at the top of the stack will appear again later in the string
        while (
            stack.length > 0 &&
            stack[stack.length - 1] > char &&
            lastOccurrence.get(stack[stack.length - 1]) > i
        ) {
            const removedChar = stack.pop();
            inStack.delete(removedChar);
        }

        // Add the current character to the stack
        stack.push(char);
        inStack.add(char);
    }

    return stack.join('');
};