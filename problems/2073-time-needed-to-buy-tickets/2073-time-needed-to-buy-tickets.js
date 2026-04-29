/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let totalTime = 0;
    const targetTickets = tickets[k];

    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            // People at or before index k
            totalTime += Math.min(tickets[i], targetTickets);
        } else {
            // People after index k
            totalTime += Math.min(tickets[i], targetTickets - 1);
        }
    }

    return totalTime;
};