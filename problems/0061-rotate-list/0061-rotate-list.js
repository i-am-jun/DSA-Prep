/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // 1. Find the length and the tail
    let n = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        n++;
    }

    // 2. Connect tail to head to make it circular
    tail.next = head;

    // 3. Find how many steps to the new tail
    // If k > n, we only need the remainder
    k = k % n;
    let stepsToNewTail = n - k;
    
    let newTail = tail; 
    while (stepsToNewTail > 0) {
        newTail = newTail.next;
        stepsToNewTail--;
    }

    // 4. Set the new head and break the circular connection
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};