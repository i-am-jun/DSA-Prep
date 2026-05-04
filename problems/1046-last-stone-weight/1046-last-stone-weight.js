/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b);
    
    while(stones.length > 1){
       let a =  stones.pop(stones.length - 1);
       let b = stones.pop(stones.length - 2);
        stones.push(a-b);
        stones.sort((a, b) => a - b);
    }

    return stones.length>=1? stones[0]: 0;

    
};