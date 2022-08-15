"use strict";

const quickSort = require("../QuickSort");

describe(" QuickSort Test", () => {
  test(" Test QuickSort an array", () => {
    let arr = [80, 40, 31, 29, 63, 54];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([29, 31, 40, 54, 63, 80]);
  });
  it("Test Reverse sorted", () => {
    const arr = [44, 28, 27, 17, 12, 0];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([0, 12, 17, 27, 28, 44]);
  });
  it("Test a more than same item", () => {
    const arr = [1, 33, 11, 1, 1, 11];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 1, 1, 11, 11, 33]);
  });

});
