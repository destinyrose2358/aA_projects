// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    const stack = new Stack();
    let currentNode = linkedList.head;
    let reverse = "";

    while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.next;
    }

    while (stack.size()) {
        if (stack.size() > 1) {
            reverse += `${stack.pop().value} -> `;
        } else {
            reverse += `${stack.pop().value}`;
        }
    }

    return reverse;
}

//grabbed from stack project

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.length) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
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
        return resultNode.value;
    }

    size() {
        return this.length;
    }
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
