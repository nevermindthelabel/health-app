require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const routes = require('./routes');

const db = process.env.mongoURI;
const PORT = process.env.PORT || 3001;
const app = express();

const connectDB = () => {
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(error => console.error(error.message));
  mongoose.set('useCreateIndex', true);
};

connectDB();

app.use(cookieParser(process.env.secretCookie));

app.use(session({
  secret: process.env.session,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
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
