// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    // if (array.length === 1) return true;
    // let leftIdx = idx * 2;
    // let rightIdx = idx * 2 + 1;
    // let left = [null, ...array.slice(leftIdx)];
    // let right = [null, ...array.slice(rightIdx)];
    // return (array[1] >= Math.max(...left)) && isMaxHeap(left, leftIdx) && isMaxHeap(right, rightIdx);
    let nodes = array.slice(1);
    return !nodes.includes(null) && nodes.every((node, idx) => node >= Math.max(...nodes.slice(idx * 2 + 1)));
}


module.exports = {
    isMaxHeap
};