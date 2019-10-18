require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const mongoose = require('mongoose');
const db = process.env.mongoURI;
const routes = require('./routes');
const path = require('path');

const app = express();

const connectDB = () => {
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(error => console.error(error.message));
  mongoose.set('useCreateIndex', true);
};

connectDB();

app.use(express.json({ extended: false }));

app.use(cors());

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
}

app.listen(PORT, () => console.log(`Server 👂 on port http://localhost:${PORT}`));
