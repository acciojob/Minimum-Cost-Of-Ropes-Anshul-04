function calculateMinCost() {
  const input = document.getElementById('rope-input').value;
  const ropes = input.split(',').map(Number);

  // Create a min-heap priority queue
  const PriorityQueue = require('./PriorityQueue');
  const pq = new PriorityQueue();

  // Insert all the rope lengths into the priority queue
  ropes.forEach((rope) => {
    pq.insert(rope);
  });

  let totalCost = 0;

  // Connect the ropes until only one rope remains in the priority queue
  while (pq.size() > 1) {
    // Extract the two smallest ropes from the priority queue
    const rope1 = pq.extractMin();
    const rope2 = pq.extractMin();

    // Calculate the cost of connecting the ropes
    const cost = rope1 + rope2;

    // Add the cost to the total cost
    totalCost += cost;

    // Insert the combined rope length back into the priority queue
    pq.insert(cost);
  }

  // Display the minimum cost inside the <div id="result"></div> element
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = totalCost.toString();
}
