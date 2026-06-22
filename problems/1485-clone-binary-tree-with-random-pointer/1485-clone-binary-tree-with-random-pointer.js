/**
 * // Definition for a _Node.
 * function _Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {_Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function(root) {
    if (!root) return null;
    
    // Hash map to map original nodes to their cloned equivalents
    const nodeMap = new Map();
    
    // Step 1: Traverse the tree to instantiate all NodeCopy objects
    function cloneStructure(node) {
        if (!node) return null;
        
        // Create the new node copy (initially without random pointers)
        const copyNode = new NodeCopy(node.val);
        nodeMap.set(node, copyNode);
        
        // Recursively clone left and right subtrees
        copyNode.left = cloneStructure(node.left);
        copyNode.right = cloneStructure(node.right);
        
        return copyNode;
    }
    
    // Build the structural clone
    const clonedRoot = cloneStructure(root);
    
    // Step 2: Traverse again to link the random pointers
    function connectRandomPointers(node) {
        if (!node) return;
        
        // Get the corresponding cloned node
        const copyNode = nodeMap.get(node);
        
        // Assign its random pointer using the map
        if (node.random) {
            copyNode.random = nodeMap.get(node.random);
        }
        
        // Continue for child nodes
        connectRandomPointers(node.left);
        connectRandomPointers(node.right);
    }
    
    // Establish random pointers across the cloned tree
    connectRandomPointers(root);
    
    return clonedRoot;
};