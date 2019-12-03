// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    return ++this.length;
  }

  dequeue() {
    switch (this.length) {
      case 0:
        return null;
      case 1:
        let returnNode = this.front;
        this.front = null;
        this.back = null;
        this.length = 0;
        return returnNode.value;
      default:
        let oldFront = this.front;
        this.front = this.front.next;
        this.length--;
        return oldFront.value;
    } 
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;