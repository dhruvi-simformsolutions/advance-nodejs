// Import the 'fs' module
const fs = require("fs");

// Create a file and write data to it
fs.writeFile("example.txt", "Hello, Node.js File System!", (err) => {
  if (err) {
    console.log("Error writing to file:", err);
    return;
  }
  console.log("File written successfully!");

  // Read the file after writing
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error reading the file:", err);
      return;
    }
    console.log("File contents:", data);

    // Append new data to the file
    fs.appendFile("example.txt", "\nAppended text to the file!", (err) => {
      if (err) {
        console.log("Error appending to file:", err);
        return;
      }
      console.log("Text appended successfully!");

      // Read the file again after appending
      fs.readFile("example.txt", "utf8", (err, updatedData) => {
        if (err) {
          console.log("Error reading the updated file:", err);
          return;
        }
        console.log("Updated file contents:", updatedData);
      });
    });
  });
});
