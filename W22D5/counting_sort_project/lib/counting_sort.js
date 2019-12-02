function countingSort(arr, max) {
    const results = [];
    const counts = new Array(max + 1).fill(0);

    for (let idx = 0; idx < arr.length; idx++) {
        counts[arr[idx]]++;
    }

    for (let idx = 0; idx < counts.length; idx++) {
        while (counts[idx] > 0) {
            results.push(idx);
            counts[idx]--;
        }
    }
    return results;
}


module.exports = {
    countingSort
};