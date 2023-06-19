function calculateMinCost() {
  // Get the input from the user
  const input = document.getElementById("input").value;
  const arr = input.split(",").map(Number);

  // Create a min-heap to store the ropes
  const heap = new PriorityQueue();
  for (const length of arr) {
    heap.enqueue(length);
  }

  // Initialize the minimum cost
  let cost = 0;

  // While there are more than two ropes in the heap
  while (heap.size() > 1) {
    // Extract the two smallest ropes from the heap
    const first = heap.dequeue();
    const second = heap.dequeue();

    // Add the two ropes and insert the sum back into the heap
    cost += first + second;
    heap.enqueue(first + second);
  }

  // Return the minimum cost
  return cost;
}
const resultDiv = document.getElementById("result");

const cost = calculateMinCost();

resultDiv.innerHTML = `The minimum cost is ${cost}`;
