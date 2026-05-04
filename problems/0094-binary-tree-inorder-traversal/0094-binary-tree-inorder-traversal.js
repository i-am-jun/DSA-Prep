/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let curr = root;

    while (curr !== null || stack.length > 0) {
        // 1. Reach the leftmost node of the current node
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }

        // 2. Current must be null at this point, so pop from stack
        curr = stack.pop();
        result.push(curr.val); // Add the node value

        // 3. We have visited the node and its left subtree. 
        // Now, it's the right subtree's turn.
        curr = curr.right;
    }

    return result;
};