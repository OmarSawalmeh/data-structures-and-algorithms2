"use strict";

// Require our linked list implementation
const hashTable = require("../index");

describe("Linked List", () => {
  test("Setting a key/value to your hashtable results in the value being in the data structure", () => {
    const myhashmap = new hashTable(10);
    myhashmap.set("esam", "401d15 student");
    myhashmap.set("laith", "401d15 student");
    myhashmap.set("shihab", "401d15 student");

    const ret1 = myhashmap.contains("test");
    const ret2 = myhashmap.contains("laith");

    expect(ret1).toEqual(false);
    expect(ret2).toEqual(true);
  });

  test("Successfully handle a collision within the hashtable && return the true or false depend on contain the key or not.", () => {
    const myhashmap = new hashTable(10);
    myhashmap.set("esam", "401d15 student");
    myhashmap.set("ahmad", "401d15 student");
    myhashmap.set("mohamad", "401d15 student");
    myhashmap.set("samah", "401d15 student");
    myhashmap.set("laith", "401d15 student");
    myhashmap.set("shihab", "401d15 student");

    const ret1 = myhashmap.contains("test");
    const ret2 = myhashmap.contains("laith");

    expect(ret1).toEqual(false);
    expect(ret2).toEqual(true);
  });

  test("Successfully returns value for a key that exist in the hashtable", () => {
    const myhashmap = new hashTable(10);
    myhashmap.set("esam", "401d15 student");
    myhashmap.set("ahmad", "401d15 student");
    myhashmap.set("mohamad", "401d15 student");
    myhashmap.set("samah", "401d15 student");
    myhashmap.set("laith", "401d15 student");
    myhashmap.set("shihab", "401d15 student");

    const ret1 = myhashmap.get("shihab");

    expect(ret1).toEqual("401d15 student");
  });

    test("Successfully returns null for a key that does not exist in the hashtable", () => {
      const myhashmap = new hashTable(10);
      myhashmap.set("esam", "401d15 student");
      myhashmap.set("ahmad", "401d15 student");
      myhashmap.set("mohamad", "401d15 student");
      myhashmap.set("samah", "401d15 student");
      myhashmap.set("laith", "401d15 student");
      myhashmap.set("shihab", "401d15 student");

      const ret2 = myhashmap.get("test");

      expect(ret2).toEqual("");
    });

  test("Successfully returns a list of all unique keys that exist in the hashtable", () => {
    const myhashmap = new hashTable(10);
    myhashmap.set("esam", "401d15 student");
    myhashmap.set("ahmad", "401d15 student");
    myhashmap.set("mohamad", "401d15 student");
    myhashmap.set("samah", "401d15 student");
    myhashmap.set("laith", "401d15 student");
    myhashmap.set("shihab", "401d15 student");

    const ret1 = myhashmap.keys();

    expect(ret1).toEqual(["laith", "ahmad", "shihab", "esam"]);
  });

    test("Successfully returns a first repeated word in inputs", () => {
      const input1 = "Once upon a time, there was a brave princess who...";
      const input2 ="It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
      const input3 ="It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didnt know what I was doing in New York...";

      const myhashmap = new hashTable(10);

      let ret1 = myhashmap.repeatedWord(input1);
      let ret2 = myhashmap.repeatedWord(input2);
      let ret3 = myhashmap.repeatedWord(input3);

      expect(ret1).toEqual("a");
      expect(ret2).toEqual("it");
      expect(ret3).toEqual("summer");
    });


});
