require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const DB = process.env.mongo;

const app = express();

const PORT = process.env.PORT || 3001;

const connectToDb = async () => {
  try {
    await mongoose.connect(DB, { useNewUrlParser: true });
    console.log('DB connected');
  } catch (error) {
    console.error(error.message);
  }
};

connectToDb();

app.get('/', (req, res) => {
  res.send({
    hostname: req.hostname,
    method: req.method,
    path: req.path
  });
});

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
