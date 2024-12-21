const { parentPort } = require("worker_threads");

// Perform a simple CPU-intensive task (summing numbers)
let sum = 0;
for (let i = 0; i < 1e8; i++) {
  sum += i;
}

// Send the result back to the main thread
parentPort.postMessage(sum);
