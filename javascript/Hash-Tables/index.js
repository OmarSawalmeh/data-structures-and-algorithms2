"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  // returning the all the values  from the linkedList
  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    const asciicodeSum = key.split("").reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0);
    const multiPrime = asciicodeSum * 599;
    const theIndex = multiPrime % this.size;
    return theIndex;
  }

  set(key, value) {
    const hash = this.hash(key);

    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    this.map[hash].append({ [key]: value });
  }

  get(key) {
    let ret = "";
    this.map.forEach((ll) => {
      if (ll.head.value[key] !== undefined) {
        ret = ll.head.value[key];
      }
    });
    return ret;
  }

  contains(key) {
    let ret = false;
    this.map.forEach((ll) => {
      const check = ll.head.value[key] !== undefined;
      // console.log(check);
      if (check == true) {
        ret = true;
      }
    });
    return ret;
  }

  keys() {
   const keys = [];
    this.map.forEach((ll) => {
      let key = Object.keys(ll.head.value)[0];
      keys.push(key);
    });
    return keys;
  }
}
      

const myhashmap = new Hashmap(10);
myhashmap.set("esam", "401d15 student");
myhashmap.set("ahmad", "401d15 student");
myhashmap.set("mohamad", "401d15 student");
myhashmap.set("samah", "401d15 student");
myhashmap.set("laith", "401d15 student");
myhashmap.set("shihab", "401d15 student");

// console.log(myhashmap.map[8]);
// console.log(myhashmap.map[8].head.value['esam']);

// console.log(myhashmap);
myhashmap.map.forEach((ll) => {
  console.log(ll.head.value["esam"] === "undefined");
});

console.log('GET .... ');
console.log(myhashmap.get("ahmad"));

console.log("contains .... ");
console.log('---------', myhashmap.contains("ahmad"));

console.log("keys .... ");
//console.log("---------", myhashmap.contains("ahmad"));
console.log(myhashmap.keys());

module.exports = Hashmap;