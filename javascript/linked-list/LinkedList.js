"use strict";

let Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  printAll() {
    let currNode = this.head;
    while (currNode !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

  // Insert a new Node To The Head of Linked List.....
  insert(value) {
    const newNode = new Node(value);
    let tempHead = this.head;
    this.head = newNode;
    this.head.next = tempHead;
  }

  // Check if a Value send exists as a Node’s value somewhere within the list......
  includes(value) {
    let currNode = this.head;
    let check = false;
    while (currNode !== null) {
      let currValue = currNode.value;
      if (currValue === value) {
        check = true;
      }
      currNode = currNode.next;
    }

    return check;
  }

  // Return String representing all the values in the Linked Lis.....
  toString() {
    let currNode = this.head;
    let allNode = ``;
    while (currNode !== null) {
      let currValue = currNode.value;
      allNode += `${[currValue]} -> `;
      currNode = currNode.next;
    }
    allNode += `NULL`;

    return allNode;
  }

  //Append value to the end of the list.....
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return this;
    } else {
      let currNode = this.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
      return this;
    }
  }

  // Insert Befor the specific value.....
  insertBefor(value, newValue) {
    let currNode = this.head;

    // EdgeCase::
    if (this.head.value === value) {
      // Insert befor the head
      this.insert(newValue);
    }

    while (currNode.next !== null) {
      //console.log(currNode.next.value, value);
      if (currNode.next.value === value) {
        //console.log("YESSSSSSSSSS", currNode.next.value, value);
        const newNode = new Node(newValue);
        let temp = currNode.next;
        currNode.next = newNode;
        newNode.next = temp;
        return this;
      }
      currNode = currNode.next;
    }
  }

  // Insert After the specific value.....
  insertAfter(value, newValue) {
    let currNode = this.head;

    while (currNode !== null) {
      //console.log(currNode.next.value, value);
      if (currNode.value === value) {
        //console.log("YESSSSSSSSSS", currNode.next.value, value);
        const newNode = new Node(newValue);
        let temp = currNode.next;
        currNode.next = newNode;
        newNode.next = temp;
        return this;
      }
      currNode = currNode.next;
    }
  }

  // [[ k-th ]] value from the end of a linked list......
  kthFromEnd(k) {
    let obj = {};
    let index = 0;
    let currNode = this.head;
    while (currNode !== null) {
      obj[index] = currNode.value;
      currNode = currNode.next;
      index += 1;
    }
    console.log(obj);

    index = 0;
    let value;
    const reversedKeys = Object.keys(obj).reverse();

    if (k >= reversedKeys.length) {
      return "IndexOutOfRangeException: Linked-list index is out of range.";
    }

    reversedKeys.forEach((key) => {
      if (index === k) {
        value = obj[key];
      }
      index += 1;
    });

    return value;
  }

  zipLists(list1, list2) {
    const ll = new LinkedList();

    let curr1 = list1.head;
    let curr2 = list2.head;

    while ((curr1 !== null) | (curr2 !== null)) {
      if (curr1 !== null) {
        ll.append(curr1.value);
        curr1 = curr1.next;
      }
      if (curr2 !== null) {
        ll.append(curr2.value);
        curr2 = curr2.next;
      }
    }

    return ll;
  }
}

module.exports = LinkedList;
