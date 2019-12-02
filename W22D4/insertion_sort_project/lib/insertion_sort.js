function insertionSort(arr) {
    for (let idx = 1; idx < arr.length; idx++) {
        let currentEl = arr[idx];
        let testIdx;
        for (testIdx = idx - 1; testIdx >= 0 && currentEl < arr[testIdx]; testIdx--) {
            arr[testIdx + 1] = arr[testIdx];
        }
        arr[testIdx + 1] = currentEl;
    }
    return arr;
}

module.exports = {
    insertionSort
};