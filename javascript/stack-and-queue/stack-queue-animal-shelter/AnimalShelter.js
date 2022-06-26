"use strict";

const Node = require("../lib/Node");

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(animal) {
    if (animal !== 'cat' && animal !== 'dog') {
      return null;
    }
    else{
      const newNode = new Node(animal);
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
        this.length += 1;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
        this.length += 1;
        return this.front;
      }
    }
  }

  dequeue(pref) {
    if (this.isEmpty()) {
      return null;
    }
    if (pref !== 'cat' && pref !== 'dog') {
      return null;
    }

    if (this.front.value === pref) {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length -= 1;
      return temp.value;
    } else {
      let prevNode = this.front;
      let currentNode = this.front.next;
      while (currentNode) {
        if (currentNode.value === pref) {
          prevNode.next = currentNode.next;
          currentNode.next = null;
          this.length -= 1;
          return currentNode.value;
        }
        currentNode = currentNode.next;
        prevNode = prevNode.next;
      }
    }
  }
}

module.exports = AnimalShelter;
