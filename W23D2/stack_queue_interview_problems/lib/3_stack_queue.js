// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(node) {
        // if (!node) return this.length;
        if (!this.length) {
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        return ++this.length;
    }

    pop() {
        if (!this.length) return null;
        let resultNode = this.top;
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
            this.length = 0;
        } else {
            this.top = this.top.next;
            this.length--;
        }
        return resultNode;
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(val) {
        while(this.inStack.size()) {
            this.outStack.push(this.inStack.pop());
        }

        let newNode = new Node(val);
        this.outStack.push(newNode);
        this.back = newNode;
        if (this.outStack.length == 1) this.front = newNode;

        while (this.outStack.size()) {
            this.inStack.push(this.outStack.pop());
        }
        return this.size();
    }

    dequeue() {
        if (!this.inStack.size()) return null;

        let node = this.inStack.pop();
        this.front = this.inStack.top;
        if (!this.inStack.size()) this.back = null;
        return node;
    }

    size() {
        return this.inStack.size();
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
