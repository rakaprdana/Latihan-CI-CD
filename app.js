const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

module.exports = app;
