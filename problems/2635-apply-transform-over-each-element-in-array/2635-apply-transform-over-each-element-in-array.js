/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let solutionArr = [];
    for( let i=0; i < arr.length; i++){
        solutionArr[i] = fn(arr[i], i)
    }
    return solutionArr;
    
};