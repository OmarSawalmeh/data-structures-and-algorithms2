"use strict";

const LinkedList = require("./LinkedList");

const ll = new LinkedList();
ll.append(7);
ll.append(9);
ll.append(11);
ll.append(15);
ll.append(24);
ll.append(28);
ll.append(33);

// Insert a new Node To The Head of Linked List.....
ll.insert(5);
ll.insert(0);

// Check if a Value send exists as a Node’s value somewhere within the list......
console.log(ll.includes(0)); // -----> return true
console.log(ll.includes(33)); // -----> return true
console.log(ll.includes(37)); // -----> return false

//
console.log("---------YNWA--------");
ll.insertBefor(0, 17);
console.log("---------YNWA--------");
ll.insertAfter(15, 7);
ll.insertAfter(7, 77);
ll.insertAfter(33, 44);

// Return String representing all the values in the Linked Lis.....
console.log(ll.toString());

// Print All Node As Values.....
ll.printAll();

// k-th value from the end of a linked list......
console.log("--------k-th value from the end of a linked list.----------");
let kth_value = ll.kthFromEnd(0);
console.log(kth_value);

///////////////////////////////////////////////////////////////////////////////////
console.log("--------- zipLists ----------");
const ll1 = new LinkedList();
ll1.append(7);
ll1.append(9);
ll1.append(11);
ll1.append(15);
ll1.append(24);
const ll2 = new LinkedList();
ll2.append(0);
ll2.append(0);
ll2.append(0);
ll2.append(0);
ll2.append(0);

const zipped = ll1.zipLists(ll1, ll2);
console.log(zipped.printAll());
console.log(zipped.toString());
