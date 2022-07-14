"use strict";

function fizzBuzz(tree) {
  if (tree.root === null) {
    return "Tree is Empty";
  }

  let queue = [];
  let visited = [];
  let currentNode = tree.root;
  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift();
    if (currentNode.value % 5 === 0 && currentNode.value % 3 === 0) {
      currentNode.value = "FizzBuzz";
      visited.push(currentNode.value);
    } else if (currentNode.value % 3 === 0) {
      currentNode.value = "Fizz";
      visited.push(currentNode.value);
    } else if (currentNode.value % 5 === 0) {
      currentNode.value = "Buzz";
      visited.push(currentNode.value);
    } else {
      currentNode.value = currentNode.value.toString();
      visited.push(currentNode.value);
    }

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return visited;
}

module.exports = fizzBuzz;
