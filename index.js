const express = require('express');

const app = express();
const userData = require('./demodata.json');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Demo data for React Academy');
});

app.get('/users', (req, res) => {
  res.send(userData);
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
