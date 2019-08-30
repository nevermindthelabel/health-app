const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('hey there');
});

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`)
});
