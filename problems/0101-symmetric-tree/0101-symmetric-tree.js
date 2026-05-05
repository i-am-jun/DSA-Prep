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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    
    // Initialize queue with the left and right children of the root
    let queue = [root.left, root.right];
    
    while (queue.length > 0) {
        let t1 = queue.shift();
        let t2 = queue.shift();
        
        if (!t1 && !t2) continue;
        if (!t1 || !t2 || t1.val !== t2.val) return false;
        
        // Push children in "mirror" order:
        // Left-Left with Right-Right
        queue.push(t1.left);
        queue.push(t2.right);
        // Left-Right with Right-Left
        queue.push(t1.right);
        queue.push(t2.left);
    }
    
    return true;
};