"use strict";

const PseudoQueue = require("../ pseudo-queue/ pseudo-queue");

describe("PseudoQueue test", () => {
  test("Can successfully enqueue into a PseudoQueue", () => {
    const pq = new PseudoQueue();
    pq.enqueue(5);
    expect(pq.stack1.pop()).toBe(5);
  });

  test("Can successfully enqueue multiple values into a PseudoQueue", () => {
    const pq = new PseudoQueue();
    pq.enqueue(5);
    pq.enqueue(7);
    pq.enqueue(8);
    expect(pq.length).toBe(3);
  });

  test("Can successfully empty a PseudoQueue after multiple dequeues", () => {
    const pq = new PseudoQueue();
    pq.enqueue(5);
    pq.enqueue(7);
    pq.enqueue(8);
    pq.dequeue();
    pq.dequeue();
    pq.dequeue();
    expect(pq.isEmpty()).toBe(true);
  });

  test("Can successfully instantiate an empty PseudoQueue", () => {
    const pq = new PseudoQueue();
    expect(pq.isEmpty()).toBe(true);
  });

  test("Calling dequeue or peek on empty PseudoQueue raises exception", () => {
    const pq = new PseudoQueue();
    expect(pq.dequeue()).toBeNull;
  });
});
