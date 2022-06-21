"use strict";

const Stack = require("../stack/Stack");

describe("Stack test", () => {
  test("Can successfully push onto a stack", () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(5);
    expect(stack.top.value).toBe(5);
  });

  test("Can successfully push multiple values onto a stack", () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(5);
    stack.push(9);
    stack.push(11);
    expect(stack.length).toBe(4);
  });

  test("Can successfully pop off the stack", () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(5);
    stack.push(9);
    const testPop = stack.pop();
    expect(testPop).toBe(9);
  });
  test("Can successfully empty a stack after multiple pops", () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(5);
    stack.push(9);
    stack.push(11);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
  test("Can successfully peek the next item on the stack", () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(5);
    stack.push(9);
    stack.push(11);
    expect(stack.peek()).toBe(11);
  });
  test("Can successfully instantiate an empty stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });
  test("Calling pop or peek on empty stack raises exception", () => {
    const stack = new Stack();
    expect(stack.pop()).toBeNull;
    expect(stack.peek()).toBeNull;
  });
});
