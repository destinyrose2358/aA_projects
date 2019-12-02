function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    return arr;
}

function selectionSort(arr) {
    for (let idx = 0; idx < arr.length; idx++) {
        let minimumIdx = idx;

        for (let unsortedIdx = idx + 1; unsortedIdx < arr.length; unsortedIdx++) {
            if (arr[minimumIdx] > arr[unsortedIdx]) {
                minimumIdx = unsortedIdx;
            }
        }
        swap(arr, idx, minimumIdx);
    }
}

module.exports = {
    selectionSort,
    swap
};