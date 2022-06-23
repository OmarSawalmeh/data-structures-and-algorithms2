'use strict';

const Stack = require('../stack/Stack');

class Pseudo_queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(value) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.top);
      this.stack1.pop();
    }

    this.stack1.push(value);
    this.length += 1;

    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.top);
      this.stack2.pop();
    }
  }

  dequeue() {
    if (this.stack1.length === 0) {
      console.log('Queue is Empty');
      return null;
    }
    let value = this.stack1.peek();
    this.stack1.pop();
    this.length -= 1;
    return value;
  }
}

module.exports = Pseudo_queue;
