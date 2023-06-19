function calculateMinCost() {
  const input = document.getElementById('ropes-input').value;
  const ropes = input.split(',').map(Number);

  // Create a priority queue (min-heap)
  const priorityQueue = new MinHeap();

  // Insert ropes into the priority queue
  ropes.forEach((rope) => priorityQueue.insert(rope));

  let minCost = 0;

  // Connect the ropes until only one rope remains in the priority queue
  while (priorityQueue.size() > 1) {
    // Extract the two smallest ropes from the priority queue
    const rope1 = priorityQueue.extractMin();
    const rope2 = priorityQueue.extractMin();

    // Calculate the cost of connecting the two ropes
    const cost = rope1 + rope2;

    // Add the cost to the total minimum cost
    minCost += cost;

    // Insert the connected rope back into the priority queue
    priorityQueue.insert(cost);
  }

  const resultDiv = document.getElementById('result');
  resultDiv.textContent = minCost.toString();
}

