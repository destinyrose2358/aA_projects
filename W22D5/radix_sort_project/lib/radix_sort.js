function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let max = getMax(arr);
    for (let idx = 0; idx < max; idx++) {
        let buckets = Array.from({ length: 10 }, () => []); // Array of empty arrays

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], idx);
            buckets[digit].push(arr[i]);
        }

        arr = [].concat(...buckets);
    }
    return arr;
}

function getMax(arr) {
    let max = 0;
    for (let idx = 0; idx < arr.length; idx++) {
        max = Math.max(max, getIntLength(arr[idx]));
    }
    return max;
}

function getIntLength(num) {
    return (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

module.exports = {
    radixSort
};