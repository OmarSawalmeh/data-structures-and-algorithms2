"use strict";
const BinaryTree = require("./Binary Tree/Binary_Tree");
const BinarySearchTree = require('./Binary Search Tree/Binary_Search_Tree');
const Node = require("./Node/Node");

/////////////////////////////////////////////////////////////////////
console.log('-------- Binary Tree ---------');

let tree = null;

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
one.right = three;      //             1
two.left = six;         //         2         3
six.right = seven;      //      6         4     5
seven.left = eight;     //         7
seven.right = nine;     //      8     9
three.left = four;
three.right = five;

tree = new BinaryTree(one);

let preOrder = tree.preOrder();
console.log("pre order: ", preOrder);
// pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5

let inOrder = tree.inOrder();
console.log("in order: ", inOrder);
// in order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5

let postOrder = tree.postOrder();
console.log("post order: ", postOrder);
// post order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1

console.log(tree.findMax(one));

/////////////////////////////////////////////////////////////////////
console.log('-------- Binary Search Tree ---------');
let bst = new BinarySearchTree();
bst.Add(5);
bst.Add(7);
bst.Add(9);
bst.Add(11);
bst.Add(3);
bst.Add(0);



console.log(bst.Contains(5));
console.log(bst.Contains(7));
console.log(bst.Contains(9));
console.log(bst.Contains(11));
console.log(bst.Contains(0));

console.log(bst.Contains(6));
console.log(bst.Contains(-5));
console.log(bst.Contains(-9));
console.log(bst.Contains(111));


/////////////////////////////////////////////////////////////////////
console.log('-------- Tree Breadth First ---------');

let tree2 = null;

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

tree2 = new BinaryTree(two2);

let bfs = tree2.breadthFirstSearch();

console.log(bfs);
