class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    siftUp(idx) {
        let parentIdx = this.getParent(idx);
        if (parentIdx && this.array[parentIdx] < this.array[idx]) {
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
            this.siftUp(parentIdx);
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = this.array[leftIdx];
        let rightVal = this.array[rightIdx];
        let parent = this.array[idx];
        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;
        if (parent === undefined) parent = -Infinity;
        console.log(parent, leftVal, rightVal);
        if (parent >= Math.max(leftVal, rightVal)) return;
        let switchIdx = leftVal > rightVal ? leftIdx : rightIdx;
        [this.array[idx], this.array[switchIdx]] = [this.array[switchIdx], this.array[idx]];
        this.siftDown(switchIdx);
    }

    deleteMax() {
        switch (this.array.length) {
            case 1:
                return null;
            case 2:
                return this.array.pop();
        }
        let parent = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return parent;
    }
}

module.exports = {
    MaxHeap
};