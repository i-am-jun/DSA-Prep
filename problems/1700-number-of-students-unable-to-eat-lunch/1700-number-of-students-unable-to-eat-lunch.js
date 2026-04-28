/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
      // 1. Count preferences of students
    let counts = { 0: 0, 1: 0 };
    for (let s of students) {
        counts[s]++;
    }
    
    // 2. Iterate through sandwiches
    for (let sandwich of sandwiches) {
        if (counts[sandwich] > 0) {
            // Student found who wants this sandwich
            counts[sandwich]--;
        } else {
            // No student wants this sandwich
            break;
        }
    }
    
    // Remaining students who couldn't get a sandwich
    return counts[0] + counts[1];
    
};