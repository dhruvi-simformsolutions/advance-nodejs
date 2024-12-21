// Handling message from parent
process.on("message", (message) => {
  console.log(`child received: ${message}`);

  // Sending response back to parent
  process.send("Hello from child");
});
