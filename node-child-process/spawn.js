//spawn() allows you to interact with the input/output of the child process more flexibly.

const { spawn } = require("child_process");

// Demonstrating spawn()
const spawnProcess = spawn("ls", ["-lh", "/usr"]);
spawnProcess.stdout.on("data", (data) => {
  console.log(`spawn stdout: ${data}`);
});
spawnProcess.stderr.on("data", (data) => {
  console.error(`spawn stderr: ${data}`);
});
spawnProcess.on("close", (code) => {
  console.log(`spawn process exited with code ${code}`);
});
