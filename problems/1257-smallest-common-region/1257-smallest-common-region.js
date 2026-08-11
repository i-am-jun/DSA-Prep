/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
     const parentMap = new Map();

    // Step 1: Build the parent-child mapping
    for (const regionList of regions) {
        const parent = regionList[0];
        for (let i = 1; i < regionList.length; i++) {
            parentMap.set(regionList[i], parent);
        }
    }

    // Step 2: Store all ancestors of region1
    const ancestors = new Set();
    let curr = region1;
    while (curr) {
        ancestors.add(curr);
        curr = parentMap.get(curr);
    }

    // Step 3: Find the first common ancestor for region2
    curr = region2;
    while (curr) {
        if (ancestors.has(curr)) {
            return curr;
        }
        curr = parentMap.get(curr);
    }
};