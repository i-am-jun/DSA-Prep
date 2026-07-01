/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {_Node|null} node
 * @return {_Node|null}
 */
var cloneTree = function(root) {
      if (root === null) return null;

    const copy = new Node(root.val);

    for (const child of root.children) {
        copy.children.push(cloneTree(child));
    }

    return copy;
};