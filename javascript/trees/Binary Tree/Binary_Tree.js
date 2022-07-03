'use strict';

class binaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let arrayOfReadNodes = [];
    let traverse = (node) => {
      arrayOfReadNodes.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return arrayOfReadNodes;
  }

  inOrder() {
    let arrayOfReadNodes = [];
    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      arrayOfReadNodes.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return arrayOfReadNodes;
  }

  postOrder() {
    let arrayOfReadNodes = [];
    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      arrayOfReadNodes.push(node.value);
    };

    traverse(this.root);
    return arrayOfReadNodes;
  }
}

module.exports = binaryTree;