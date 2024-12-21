const AWS = require("aws-sdk");
const multer = require("multer");
const express = require("express");
require("dotenv").config();

const app = express();

// Configure AWS with your access keys
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new AWS.S3();

// Configure multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Create an endpoint for uploading files
app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME, // Your S3 Bucket name
    Key: file.originalname, // File name
    Body: file.buffer, // File data
    ContentType: file.mimetype, // File type (e.g., image/jpeg)
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error uploading file.");
    }
    res.send(`File uploaded successfully. URL: ${data.Location}`);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
