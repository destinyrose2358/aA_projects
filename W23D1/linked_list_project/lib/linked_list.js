// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        if (this.tail) this.tail.next = newNode;
        this.tail = newNode;
        if (!this.head) this.head = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.length) return undefined;
        let currentNode = this.head;
        while (currentNode && currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return currentNode;
        }
        let oldTail = this.tail;
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        return oldTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if (this.head) newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) this.tail = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.length) return undefined;
        if (this.head === this.tail) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return node;
        }
        let oldHead = this.head;
        let nextNode = this.head.next;
        this.head = nextNode;
        this.length--;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === target) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let currentNode = this.head;
        for (let i = 0; (i <= index) && currentNode; i++) {
            if (i === index) return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let targetNode = this.get(index);
        if (targetNode) {
            targetNode.value = val;
            return true;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index === 0) {
            return this.addToHead(val);
        }
        let prevNode = this.get(index - 1);
        let nextNode = this.get(index);
        if (nextNode) {
            let newNode = new Node(val);
            newNode.next = nextNode;
            if (prevNode) prevNode.next = newNode;
            this.length++;
            return true;
        }
        return false;
    }

    // TODO: Implement the remove method here
    remove(index) {
        let prevNode = this.get(index - 1);
        let removedNode = this.get(index);
        if (removedNode) {
            if (prevNode) prevNode.next = removedNode.next;
            this.length--;
            return removedNode;
        }
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
