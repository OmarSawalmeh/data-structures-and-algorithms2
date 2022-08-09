"use strict";

const insertionSort = require("../insertionSort");

describe("Test insertion sort...", () => {
  test("Test Sort", () => {
    let array = [20,18,12,8,5,-2];

    expect(insertionSort(array)).toEqual([-2, 5, 8, 12, 18, 20]);
  });
});
