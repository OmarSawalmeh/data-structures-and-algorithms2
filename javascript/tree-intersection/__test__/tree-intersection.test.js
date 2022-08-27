'use strict';

"use strict";
let Node = require("../../linked-list/Node");
let BinaryTree = require("../../trees/Binary Tree/Binary_Tree");
let tree_intersection = require("../tree-intersection");

let a = new Node("10");
let b = new Node("11");
let c = new Node("13");
let d = new Node("4");
a.left = b;
a.right = c;
b.left = d;
let tree1 = new BinaryTree(a);


let k = new Node("10");
let l = new Node("11");
let m = new Node("13");
let n = new Node("19");
k.left = l;
k.right = m;
l.left = n;
let tree2 = new BinaryTree(k);

describe("Tree intersection Test", () => {
  it("Check return Repeated values", () => {
    expect(tree_intersection(tree1, tree2)).toEqual(["11", "13", "10"]);
  });

  it("Check returns a list for all Repeated values", () => {
    expect(tree_intersection(tree2, tree2)).toEqual(["19", "11", "13", "10"]);
  });
});