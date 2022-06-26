"use strict";

const AnimalShelter = require("../stack-queue-animal-shelter/AnimalShelter");

describe("AnimalShelter test", () => {
  test("Can successfully enqueue into a AnimalShelter", () => {
    const anim = new AnimalShelter();
    anim.enqueue('cat');
    expect(anim.front.value).toBe('cat');
  });

  test("Can successfully enqueue multiple values into a AnimalShelter", () => {
    const anim = new AnimalShelter();
    anim.enqueue('dog');
    anim.enqueue('dog');
    anim.enqueue('cat');
    anim.enqueue('dog');

    expect(anim.front.value).toBe('dog');
  });

  test("Check When enqueue a empty value to AnimalShelter", () => {
    const anim = new AnimalShelter();

    expect(anim.enqueue(' ')).toBeNull;
  });

  test("Check When enqueue a value not between dog or cat object to AnimalShelter", () => {
    const anim = new AnimalShelter();

    expect(anim.enqueue('Leon')).toBeNull;
  });

  test("Can successfully dequeue a cat or dog from AnimalShelter, when dequeue case in the front of queue", () => {
    const anim = new AnimalShelter();
    anim.enqueue('dog');
    anim.enqueue('dog');
    anim.enqueue('cat');
    anim.enqueue('dog');

    expect(anim.dequeue('dog')).toBe('dog');
  });

  test("Can successfully dequeue a cat or dog from AnimalShelter, when dequeue case not in the front of queue(EDGE CASES)", () => {
    const anim = new AnimalShelter();
    anim.enqueue('dog');
    anim.enqueue('dog');
    anim.enqueue('cat');
    anim.enqueue('dog');

    expect(anim.dequeue('cat')).toBe('cat');
  });

  test("Check if length queue is correct after multiple right and wrong enqueue into AnimalShelter", () => {
    const anim = new AnimalShelter();
    anim.enqueue('dog');
    anim.enqueue('XXX'); // X
    anim.enqueue('cat');
    anim.enqueue('dog');
    anim.enqueue('XXX'); // X
    anim.enqueue('dog');
    anim.enqueue('cat');
    anim.enqueue('dog');
    anim.enqueue('XXX'); // X
    anim.enqueue('dog');
    anim.enqueue('XXX'); // X
    anim.enqueue('dog');

    expect(anim.length).toBe(8);
  });

});
