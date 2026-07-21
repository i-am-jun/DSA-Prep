/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //create map of all values and its count
    const freq = new Map();
    for(let num of nums){
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    //convert map to list with key and values using entries function
    let list = [...freq.entries()];
    //sort the list into descending order based on count
    list.sort((a,b) => b[1] - a[1]);
    //take out first k elements of the list (only keys not values)
    return list.slice(0,k).map(([num]) => num);
};