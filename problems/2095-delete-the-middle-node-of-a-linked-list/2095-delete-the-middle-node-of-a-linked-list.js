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
var deleteMiddle = function(head) {
    // Edge case: if the list has only 1 node, deleting it leaves an empty list
    if (!head || !head.next) {
        return null;
    }
    
    // Initialize pointers
    let slow = head;
    let fast = head;
    let prev = null;
    
    // Move fast by 2 steps and slow by 1 step
    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Bypassing the middle node (slow)
    prev.next = slow.next;
    
    return head;
};