/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // If both nodes are null, trees are identical at this point
    if (!p && !q) return true;
    
    // If one is null or values don't match, they aren't the same
    if (!p || !q || p.val !== q.val) return false;
    
    // Check left and right subtrees recursively
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};