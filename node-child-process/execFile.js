// execFile() is efficient for running specific executables directly, without a shell.
const { execFile } = require("child_process");

// Demonstrating execFile()
execFile("ls", ["-lh", "/usr"], (error, stdout, stderr) => {
  if (error) {
    console.error(`execFile error: ${error}`);
    return;
  }
  console.log(`execFile stdout: ${stdout}`);
  console.error(`execFile stderr: ${stderr}`);
});
