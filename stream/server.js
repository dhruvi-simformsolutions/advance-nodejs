const fs = require("fs");
const { Writable, Readable } = require("stream");

// Step 1: Create a Writable Stream to write data to a file
const writableStream = fs.createWriteStream("stream.txt");

// Write some data into the file using the writable stream
writableStream.write("This is an example of using streams in Node.js.\n");
writableStream.write(
  "Streams help in handling large data efficiently without loading everything into memory.\n"
);
writableStream.end(() => {
  console.log("Data written to output.txt.");

  // Step 2: After writing, create a Readable Stream to read the content from the file
  const readableStream = fs.createReadStream("stream.txt");

  // Pipe the readable stream to the console to display the file content
  readableStream.pipe(process.stdout);
});
