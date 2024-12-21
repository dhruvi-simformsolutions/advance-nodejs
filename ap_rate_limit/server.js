const express = require("express");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const port = process.env.API_PORT;

// Define the rate limit rule
const limiter = rateLimit({
  windowMs: 20 * 60 * 1000, // 20 minutes
  max: 50, // limit each IP to 50 requests per windowMs
  message: "Too many requests from this IP, please try again after 20 minutes",
});

// Apply the rate limit to all requests
app.use(limiter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
