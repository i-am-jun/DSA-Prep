/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const nodeMap = new Map();
    const childrenSet = new Set();
    
    // 1. Build nodes and connect relationships
    for (const [parentVal, childVal, isLeft] of descriptions) {
        // Ensure parent node exists
        if (!nodeMap.has(parentVal)) {
            nodeMap.set(parentVal, new TreeNode(parentVal));
        }
        // Ensure child node exists
        if (!nodeMap.has(childVal)) {
            nodeMap.set(childVal, new TreeNode(childVal));
        }
        
        const parentNode = nodeMap.get(parentVal);
        const childNode = nodeMap.get(childVal);
        
        // Connect the nodes
        if (isLeft === 1) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }
        
        // Track that this node is a child
        childrenSet.add(childVal);
    }
    
    // 2. Identify the root node
    for (const [parentVal] of descriptions) {
        if (!childrenSet.has(parentVal)) {
            return nodeMap.get(parentVal);
        }
    }
    
    return null;
};