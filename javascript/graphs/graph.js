module.exports = class Graph {
  constructor(node, edges) {
    this.node = node;
    this.edges = edges;
    this.nodes = {};
    this.edges = {};
  }

  addNode(airport) {
    let adjacencyList = new Map();
    adjacencyList.set(airport, []);
  }

  removeNode(node) {
    if (this.contains(node)) {
      delete this.nodes[node];
    }
  }

  // Add edge, undirected
  addEdge(origin, destination) {
    let adjacencyList = new Map();
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
  }

  bfs(start) {
    let adjacencyList = new Map();
    const visited = new Set();

    const queue = [start];

    while (queue.length > 0) {
      const airport = queue.shift(); // mutates the queue

      const destinations = adjacencyList.get(airport);

      for (const destination of destinations) {
        if (destination === "BKK") {
          console.log(`BFS found Bangkok!`);
        }

        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push(destination);
        }
      }
    }
  }
};
