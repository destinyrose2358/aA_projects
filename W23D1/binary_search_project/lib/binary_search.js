function binarySearch(array, target) {
    if (!array.length) return false;
    let middleIdx = Math.floor(array.length / 2);
    let middle = array[middleIdx];
    switch (Math.sign(middle - target)) {
        case -1:
            return binarySearch(array.slice(middleIdx + 1), target);
        case 0:
            return true;
        case 1:
            return binarySearch(array.slice(0, middleIdx), target);
    }
}

function binarySearchIndex(array, target) {
    if (!array.length) return -1;
    let middleIdx = Math.floor(array.length / 2);
    let middle = array[middleIdx];
    switch (Math.sign(middle - target)) {
        case -1:
            let result = binarySearchIndex(array.slice(middleIdx + 1), target);
            return (result === -1) ? -1 : middleIdx + 1 + result
        case 0:
            return middleIdx;
        case 1:
            return binarySearchIndex(array.slice(0, middleIdx), target);
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};