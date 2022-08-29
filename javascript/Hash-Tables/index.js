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
    let hashIndex = this.hash(key);
    if (this.map[hashIndex]) {
      let current = this.map[hashIndex].head;
      while (current) {
        if (current.value[key]) return true;
        current = current.next;
      }
      return false;
    } else {
      return false;
    }
  }

  keys() {
    const keys = [];
    this.map.forEach((ll) => {
      let key = Object.keys(ll.head.value)[0];
      keys.push(key);
    });
    return keys;
  }

  repeatedWord(input) {
    if (!input) {
      return "No input";
    }

    const hash = new Hashmap(10);
    const words = input.split(" ");
    //console.log(words);
    for (let i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase();
      if (word.charAt(word.length - 1) === ",") {
        word = word.slice(0, -1);
      }
      if (hash.contains(word)) {
        return word;
      } else {
        hash.set(word, word);
      }
    }
    return "There is no repetition of words in input";
  }

  // Code Challenge: Class 33
  hashKey(hash, value) {

    let result = [];
    let key = Object.keys(this.map[hash])[0];
    result.push(key);
    let valuesMap = Object.values(this.map[hash])[0];

    for (let i = 0; i < valuesMap.length; i++) {
      result.push(valuesMap[i]);
    }
    if (value) {
      let newValues = Object.values(value)[0];
      for (let i = 0; i < newValues.length; i++) {
            result.push(newValues[i]);
      }
    } else {
          result.push(null);
    }
    this.map[hash] = result;
  }

  leftJoin(hashMap1, hashMap2) {
    if (hashMap1.map.length >= 2) {
      for (let index = 0; index < hashMap2.map.length; index++) {
        if (hashMap1.map[index]) {
          hashMap1.hashKey(i, hashMap2.map[index]);
        }
      }
    }

    return hashMap1;
  }
}

// const myhashmap = new Hashmap(10);
// myhashmap.set("esam", "401d15 student");
// myhashmap.set("ahmad", "401d15 student");
// myhashmap.set("mohamad", "401d15 student");
// myhashmap.set("samah", "401d15 student");
// myhashmap.set("laith", "401d15 student");
// myhashmap.set("shihab", "401d15 student");

// // console.log(myhashmap.map[8]);
// // console.log(myhashmap.map[8].head.value['esam']);

// // console.log(myhashmap);
// myhashmap.map.forEach((ll) => {
//   console.log(ll.head.value["esam"] === "undefined");
// });

// console.log("GET .... ");
// console.log(myhashmap.get("ahmad"));

// console.log("contains .... ");
// console.log("---------", myhashmap.contains("ahmad"));

// console.log("keys .... ");
// //console.log("---------", myhashmap.contains("ahmad"));
// console.log(myhashmap.keys());


// // Test Repeated Word
// const input1 = 'Once upon a time, there was a brave princess who...';
// const input2 ="It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";


// const newHash = new Hashmap(10);

// let ret = newHash.repeatedWord(input1);
// console.log(ret);

// let ret2 = newHash.repeatedWord(input2);
// console.log(ret2);

module.exports = Hashmap;


