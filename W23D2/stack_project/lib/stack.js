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
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor (){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val){
    const node = new Node(val);

    if (!this.bottom){
      this.bottom = node;
      this.top = node;
      this.length++;
      return this.length;
    }

    node.next = this.top;
    this.top = node;
    this.length++;
    return this.length;

  }

  pop(){
    if (this.length === 0) return null;
    const oldTop = this.top;

    if (this.top === this.bottom){
      this.top = null;
      this.bottom = null;
      this.length--;
      return oldTop.value;
    }

    this.top = this.top.next;
    this.length--;
    return oldTop.value;
  }

  size(){
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
