require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const db = process.env.mongoURI;
const routes = require('./routes');

const app = express();

const connectDB = () => {
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(error => console.error(error.message));
};

connectDB();

app.use(express.json({ extended: false }));

app.use(routes);

app.listen(PORT, () => console.log(`Server 👂 on port http://localhost:${PORT}`));
