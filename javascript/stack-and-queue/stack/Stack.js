const Node = require("../lib/Node");

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
    try {
      const temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length -= 1;
      return temp.value;
    } catch (e) {
      throw new Error(e);
    }
  }

  peek() {
    if (this.isEmpty()) {
      return "no Nodes in the stack";
    }
    return this.top.value;
  }

  
  validateBrackets(expr) {
    let stack = new Stack();

    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];

      if (x === "(" || x === "[" || x === "{") {
        stack.push(x);
        continue;
      }

      if (stack.length === 0) return false;

      let check;
      switch (x) {
      case ")":
        check = stack.pop();
        if (check === "{" || check === "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check === "(" || check === "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check === "(" || check === "{") return false;
        break;
      }
    }

    return stack.length === 0;
  }


}

module.exports = Stack;
