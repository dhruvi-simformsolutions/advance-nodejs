// fork() is used to spawn new Node.js processes.

const { fork } = require("child_process");

// Demonstrating fork()
const child = fork("./child.js");

child.send("Hello from parent"); // Sending message to child
child.on("message", (message) => {
  console.log(`fork received from child: ${message}`);
});

child.on("exit", (code) => {
  console.log(`fork child process exited with code ${code}`);
});
