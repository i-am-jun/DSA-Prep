class MyQueue {
    constructor() {
        // stack1 (inStack) handles incoming elements
        this.s1 = [];
        // stack2 (outStack) holds elements in reversed order for popping
        this.s2 = [];
    }

    /** 
     * Pushes element x to the back of the queue.
     * Time Complexity: O(1)
     */
    push(x) {
        this.s1.push(x);
    }

    /** 
     * Removes the element from the front of the queue and returns it.
     * Amortized Time Complexity: O(1)
     */
    pop() {
        this._prepareOutput();
        return this.s2.pop();
    }

    /** 
     * Returns the element at the front of the queue.
     * Amortized Time Complexity: O(1)
     */
    peek() {
        this._prepareOutput();
        return this.s2[this.s2.length - 1];
    }

    /** 
     * Returns true if the queue is empty, false otherwise.
     * Time Complexity: O(1)
     */
    empty() {
        return this.s1.length === 0 && this.s2.length === 0;
    }

    /**
     * Helper to transfer elements from s1 to s2 when s2 is empty.
     * Reverses the order to simulate FIFO.
     */
    _prepareOutput() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
    }
}


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */