"use strict";

const Mergesort = require('../mergeSort');

describe("Test  Merge Sort ", () => {
  test("Check Merging sort of array...", () => {
    let arr = [8, -11, 10, 2, 25, -8, 4, 7, -2];

    expect(Mergesort(arr)).toEqual[(-11, -8, -2, 2, 4, 7, 8, 10, 25)];
  });
});
