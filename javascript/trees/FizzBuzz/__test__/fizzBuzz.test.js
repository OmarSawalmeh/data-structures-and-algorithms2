"use strict";
const fizzBuzz = require("../fizzBuzz");
const BinaryTree = require("../../Binary Tree/Binary_Tree");
const Node = require("../../Node/Node");

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
    let nine = new Node(15);

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
  test("Return Tree is Empty", () => {
    const newTree = new BinaryTree();
    expect(fizzBuzz(newTree)).toEqual("Tree is Empty");
  });

  test("Value is divisible by 3 and 5, replace to >>> FizzBuzz", () => {
    let one = new Node(15);
    let tree = new BinaryTree(one);

    expect(fizzBuzz(tree)).toEqual(["FizzBuzz"]);
  });
  test("Value is divisible by 3,  replace to >>> Fizz", () => {
    let one = new Node(3);
    let tree = new BinaryTree(one);
    expect(fizzBuzz(tree)).toEqual(["Fizz"]);
  });
  test("Value is divisible by 5,  replace to >>> Buzz", () => {
    let one = new Node(5);
    let tree = new BinaryTree(one);
    expect(fizzBuzz(tree)).toEqual(["Buzz"]);
  });
  test("Value is not divisible by 3 or 5", () => {
    expect(tree.root.value).toEqual(1);
  });
});
