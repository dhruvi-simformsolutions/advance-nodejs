const { Worker } = require("worker_threads");

// Function to create and run the worker
function runWorker() {
  return new Promise((resolve, reject) => {
    // Create a new Worker and run the 'worker.js' file
    const worker = new Worker("./worker.js");

    // Listen for messages from the worker
    worker.on("message", (message) => {
      console.log("Result from Worker:", message);
      resolve(message);
    });

    // Handle any errors in the worker
    worker.on("error", (error) => {
      console.error("Worker error:", error);
      reject(error);
    });

    // Handle worker exit
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

// Run the worker
runWorker()
  .then((result) => {
    console.log("Worker completed with result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
