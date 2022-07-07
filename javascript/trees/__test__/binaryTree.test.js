"use strict";

const BinaryTree = require("../Binary Tree/Binary_Tree");
const Node = require("../Node/Node");

let tree = null;

describe("Binary Tree", () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  test("constructor", () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
    expect(tree.root.value).toEqual(1);
  });
  test("preOrder", () => {
    let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOutput);
  });
  test("inOrder", () => {
    let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expectedOutput);
  });
  test("postOrder", () => {
    let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expectedOutput);
  });

  test("Return Null when a tree is empty", () => {
    const newTree = new BinaryTree();
    expect(newTree.findMax(newTree.root)).toEqual(null);
  });

  test("Test Breadth-first approach", () => {
    let two2 = new Node(2);
    let seven7 = new Node(7);
    let two22 = new Node(2);
    let six6 = new Node(6);
    let five5 = new Node(5);
    let eleven11 = new Node(11);
    let five55 = new Node(5);
    let four4 = new Node(4);
    let nine9 = new Node(9);
    
    
    two2.left = seven7;
    two2.right = five5;            
    seven7.left = two22;           
    seven7.right = six6;         
    six6.left = five55;           
    six6.right = eleven11;   
    five5.right = nine9;
    nine9.left = four4;
    
    tree = new BinaryTree(two2);

    let bfs = tree.breadthFirstSearch();
    expect(bfs).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
});
