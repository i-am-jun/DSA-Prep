/**
 * @param {number[]} nums
 * @param {number[]} pre
 * @return {number}
 */
var sortArray = function(nums, pre) {
       const n = nums.length;
    
    // Create the target sorted string representation
    const target = Array.from({ length: n }, (_, i) => i).join(',');
    const startStr = nums.join(',');
    
    // If already sorted, 0 operations needed
    if (startStr === target) return 0;
    
    // BFS queue storing [current_array_string, steps]
    const queue = [[startStr, 0]];
    const visited = new Set([startStr]);
    
    while (queue.length > 0) {
        const [currStr, steps] = queue.shift();
        const currArr = currStr.split(',').map(Number);
        
        // Try all allowed prefix reversal lengths
        for (const x of pre) {
            if (x <= 1) continue; // Reversing 1 or 0 elements changes nothing
            
            // Perform prefix reversal of length x
            const nextArr = [...currArr];
            let left = 0;
            let right = x - 1;
            while (left < right) {
                const temp = nextArr[left];
                nextArr[left] = nextArr[right];
                nextArr[right] = temp;
                left++;
                right--;
            }
            
            const nextStr = nextArr.join(',');
            
            // Check if we reached the sorted target
            if (nextStr === target) {
                return steps + 1;
            }
            
            // If not visited, add to queue
            if (!visited.has(nextStr)) {
                visited.add(nextStr);
                queue.push([nextStr, steps + 1]);
            }
        }
    }
    
    return -1;
};