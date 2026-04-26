/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };

    for (let token of tokens) {
        if (operators[token]) {
            let b = stack.pop(); // Right operand
            let a = stack.pop(); // Left operand
            stack.push(operators[token](a, b));
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
};