const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors"); // Import CORS

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3001", // React app running on this port
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true, // Allow cookies or authentication headers if needed
  },
});

// Enable CORS for regular HTTP requests
app.use(
  cors({
    origin: "http://localhost:3001", // The React app's URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Serve static files (optional if serving React)
app.use(express.static("public"));

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chatMessage", (msg) => {
    console.log("Message from client:", msg);
    io.emit("chatMessage", msg); // Broadcast the message to all clients
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
