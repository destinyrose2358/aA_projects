function merge(array1, array2) {
    const merged = [];

    while (array1.length || array2.length) {
        let element1 = array1.length ? array1[0] : Infinity;
        let element2 = array2.length ? array2[0] : Infinity;

        let next;
        if (element1 > element2) {
            next = array2.shift();
        } else {
            next = array1.shift();
        }
        merged.push(next);
    }
    return merged;
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    let leftSort = mergeSort(left);
    let rightSort = mergeSort(right);

    return merge(leftSort, rightSort);
}

module.exports = {
    merge,
    mergeSort
};