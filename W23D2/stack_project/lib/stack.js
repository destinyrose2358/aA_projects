// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

exports.Node = Node;
exports.Stack = Stack;
