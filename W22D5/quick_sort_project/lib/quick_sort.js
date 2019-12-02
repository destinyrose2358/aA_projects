function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift();
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);

    let leftSort = quickSort(left);
    let rightSort = quickSort(right);

    return [...leftSort, pivot, ...rightSort];
}


module.exports = {
    quickSort
};