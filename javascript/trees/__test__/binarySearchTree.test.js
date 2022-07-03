"use strict";

const BinarySearchTree = require("../Binary Search Tree/Binary_Search_Tree");
const Node = require("../Node/Node");

let tree = null;

describe("Binary Tree", () => {
  beforeAll(() => {
    let bst = new BinarySearchTree();
    bst.Add(5);
    bst.Add(7);
    bst.Add(9);
    bst.Add(11);
    bst.Add(3);
    bst.Add(0);
    
  });

  test("For a Binary Search Tree, can successfully add a left child and right child properly to a node", () => {
    let bst = new BinarySearchTree();
    expect(bst.Add(5)).toEqual();
    expect(bst.Add(7)).toEqual();
    expect(bst.Add(3)).toEqual();

  });
  test("For a Binary Search Tree, When add empty root", () => {
    let bst = new BinarySearchTree();
    expect(bst).toEqual({'root': null});
  });
  test("Can successfully return a correct boolean when check the BST contain the value or not", () => {
    let bst = new BinarySearchTree();
    bst.Add(5);
    bst.Add(7);
    bst.Add(9);
    bst.Add(11);
    bst.Add(3);
    bst.Add(0);

    expect(bst.Contains(5)).toEqual(true);
    expect(bst.Contains(0)).toEqual(true);

    expect(bst.Contains(-7)).toEqual(false);
    expect(bst.Contains(111)).toEqual(false);
  });

});
