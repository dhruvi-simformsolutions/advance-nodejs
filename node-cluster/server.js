const cluster = require("cluster");
const http = require("http");
const os = require("os");

const numCPUs = os.cpus().length; // Get the number of CPU cores

if (cluster.isMaster) {
  // Master process: Fork workers based on the number of CPU cores
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); // Create a new worker
  }

  // Listen for dying workers and fork new ones
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    console.log("Forking a new worker to replace it");
    cluster.fork(); // Fork a new worker if one dies
  });
} else {
  // Worker process: Each worker creates an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Hello, world! Process ${process.pid}\n`);
    })
    .listen(8000, () => {
      console.log(`Worker ${process.pid} started, listening on port 8000`);
    });
}
