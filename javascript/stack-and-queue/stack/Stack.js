const Node = require('../lib/Node');

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.length += 1;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length += 1;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    try{

      const temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length -= 1;
      return temp.value;
    }
    catch(e){
      throw new Error(e);
    }

  }

  peek() {
    if (this.isEmpty()) {
      return 'no Nodes in the stack';
    }
    return this.top.value;
  }

}

module.exports = Stack;
