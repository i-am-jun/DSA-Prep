/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
      // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let curr = slow;
    
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    
    // Step 3: Iterate from both ends to find the maximum twin sum
    let maxSum = 0;
    let firstHalf = head;
    let secondHalf = prev; // The head of the reversed second half
    
    while (secondHalf) {
        let currentTwinSum = firstHalf.val + secondHalf.val;
        maxSum = Math.max(maxSum, currentTwinSum);
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    return maxSum;
};