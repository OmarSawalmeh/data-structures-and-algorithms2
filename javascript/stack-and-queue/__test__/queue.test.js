"use strict";

const Queue = require("../queue/queue");

describe("Queue test", () => {
  test("Can successfully enqueue into a queue", () => {
    const queue = new Queue();
    queue.enqueue(5);
    expect(queue.front.value).toBe(5);
  });

  test("Can successfully enqueue multiple values into a queue", () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(7);
    queue.enqueue(8);
    expect(queue.front.value).toBe(5);
  });

  test("Can successfully dequeue out of a queue the expected value", () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(7);
    queue.enqueue(8);
    let dequeueTest = queue.dequeue();
    expect(dequeueTest).toBe(5);
  });

  test("Can successfully peek into a queue, seeing the expected value", () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(7);
    queue.enqueue(8);
    expect(queue.peek()).toBe(5);
  });

  test("Can successfully empty a queue after multiple dequeues", () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(7);
    queue.enqueue(8);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("Can successfully instantiate an empty queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("Calling dequeue or peek on empty queue raises exception", () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBeNull;
    expect(queue.peek()).toBeNull;
  });
});
