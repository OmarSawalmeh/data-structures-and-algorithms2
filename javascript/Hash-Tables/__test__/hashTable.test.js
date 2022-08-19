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


});
