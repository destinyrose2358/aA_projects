function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
    return array;
}

function bubbleSort(array) {
    let sorted = false;
    while (!sorted) {
        sorted = true;

        for (let idx = 0; idx < array.length; idx++) {
            if (array[idx] > array[idx + 1]) {
                swap(array, idx, idx + 1);
                sorted = false;
            }
        }
    }

    return array;
}


module.exports = {
    bubbleSort,
    swap
};