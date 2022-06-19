"use strict";

// Require our linked list implementation
const LinkedList = require("../LinkedList");

describe("Linked List", () => {
  test("Create instantiate an empty linked list", () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  test("Insert into the linked list", () => {
    let list = new LinkedList();
    list.insert(11);
    list.insert(9);
    list.insert(7);
    expect(list.head.value).toEqual(7);
  });

  test("The head property will properly point to the first node in the linked list", () => {
    let list = new LinkedList();
    list.append(50);
    list.append(60);
    list.append(80);
    expect(list.head.value).toEqual(50);
  });

  test("Insert multiple nodes into the linked list", () => {
    let list = new LinkedList();
    list.insert(11);
    list.insert(9);
    list.insert(7);
    expect(list.head.value).toEqual(7);
    expect(list.head.next.value).toEqual(9);
    expect(list.head.next.next.value).toEqual(11);
  });

  test("Check if a Value send exists as a Node’s value somewhere within the list", () => {
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11);
    list.insert(9);
    list.insert(7);
    expect(list.includes(60)).toEqual(true);
    expect(list.includes(11)).toEqual(true);
    expect(list.includes(9)).toEqual(true);
  });

  test("Check if a Value send NOT exists as a Node’s value somewhere within the list", () => {
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11);
    list.insert(9);
    list.insert(7);
    expect(list.includes(100)).toEqual(false);
    expect(list.includes(55)).toEqual(false);
    expect(list.includes(0)).toEqual(false);
  });

  test("Return a collection of all the values that exist in the linked list", () => {
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11);
    list.insert(9);
    list.insert(7);
    expect(list.toString()).toEqual(
      `${7} -> ${9} -> ${11} -> ${60} -> ${80} -> NULL`
    );
  });

  test("Test Insert Befor the specific value", () => {
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11);

    // Test InsertBefor Method....
    list.insertBefor(11, 0);
    list.insertBefor(80, 7);

    expect(list.toString()).toEqual(
      `${0} -> ${11} -> ${60} -> ${7} -> ${80} -> NULL`
    );
  });

  test("Test Insert After the specific value", () => {
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11);

    // Test InsertBefor Method....
    list.insertAfter(11, 0);
    list.insertAfter(80, 7);

    expect(list.toString()).toEqual(
      `${11} -> ${0} -> ${60} -> ${80} -> ${7} -> NULL`
    );
  });

  //👇️ All These test about kthFromEnd method.....
  test("Linked-list index is out of range.", () => {
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11); // 11 60 80

    // Where k is greater than the length of the linked list....
    expect(list.kthFromEnd(5)).toEqual(
      "IndexOutOfRangeException: Linked-list index is out of range."
    );
  });

  test("Linked-list index is out of range.", () => {
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11); // 11 60 80

    // Where k and the length of the list are the same....
    expect(list.kthFromEnd(3)).toEqual(
      "IndexOutOfRangeException: Linked-list index is out of range."
    );
  });

  test("Linked-list index is not a positive integer.", () => {
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11); // 11 60 80

    // Where k is not a positive integer....
    expect(list.kthFromEnd(-3)).toEqual(undefined);
  });

  test("Checke of Linked-list Where sized equal 1.", () => {
    let list = new LinkedList();
    list.append(60);

    // Where the linked list is of a size 1....
    expect(list.kthFromEnd(0)).toEqual(60);
  });

  test("Checke somewhere in the middle of the linked list", () => {
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11);
    list.insertAfter(11, 0);
    list.insertAfter(80, 7);
    //               11 -> 0 -> 60 -> 80 -> 7
    // After erverse 7 -> 80 -> 60 ->0 -> 11

    // Where k is not at the end, but somewhere in the middle of the linked list....
    expect(list.kthFromEnd(1)).toEqual(80);
  });

  //👇️ All These test about zipLists method.....
  test("Checke the linked list contain all nodes from two list", () => {
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
    expect(zipped.toString()).toEqual(
      "7 -> 0 -> 9 -> 0 -> 11 -> 0 -> 15 -> 0 -> 24 -> 0 -> NULL"
    );
  });

  test("When the first argument(list1) empty", () => {
    const ll1 = new LinkedList();
    ll1.append(7);
    ll1.append(9);
    ll1.append(11);
    ll1.append(15);
    ll1.append(24);
    const ll2 = new LinkedList();

    const zipped = ll1.zipLists(ll1, ll2);
    expect(zipped.toString()).toEqual("7 -> 9 -> 11 -> 15 -> 24 -> NULL");
  });

  test("When the second argument(list2) empty", () => {
    const ll1 = new LinkedList();

    const ll2 = new LinkedList();
    ll2.append(0);
    ll2.append(0);
    ll2.append(0);
    ll2.append(0);
    ll2.append(0);

    const zipped = ll1.zipLists(ll1, ll2);
    expect(zipped.toString()).toEqual("0 -> 0 -> 0 -> 0 -> 0 -> NULL");
  });
});
