// exec() is useful when you don't need to interact with the child process directly and just want to run a command.
const { exec } = require("child_process");

// Demonstrating exec()
exec("ls -lh /usr", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`exec stdout: ${stdout}`);
  console.error(`exec stderr: ${stderr}`);
});
