/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    let stack = []; // Stores indices
    
    // Add a sentinel value of 0 to the end to flush the stack at the finish
    heights.push(0); 

    for (let i = 0; i < heights.length; i++) {
        // While current height is less than height at stack's top index
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const h = heights[stack.pop()]; // Height of the rectangle
            
            // If stack is empty, width is i; else width is (i - top_of_stack - 1)
            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }
    

    heights.pop(); 
    
    return maxArea;
};