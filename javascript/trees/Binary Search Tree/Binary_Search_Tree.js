"use strict";

let Node = require("../Node/Node");

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  Add(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      //return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
        }
        current = current.right;
      }
    }
  }

  Contains(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) return false;
    return true;
  }

}

module.exports = binarySearchTree;
