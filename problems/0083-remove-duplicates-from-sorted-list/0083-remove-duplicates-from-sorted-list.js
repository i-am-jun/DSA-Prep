/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;

    // Iterate until the end of the list
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            // Found a duplicate: skip the next node
            current.next = current.next.next;
        } else {
            // No duplicate: move to the next node
            current = current.next;
        }
    }

    return head;
};