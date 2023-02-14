const request = require('request');
const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

// app.get('/api', async (req, res) => {
//   request(req.query.image).pipe(res);
// });

app.get('/api', async (req, res) => {
  res.sendFile(path.resolve('static/assets/image.svg'));
});

app.get('/myImg.svg.png', async (req, res) => {
  res.sendFile(path.resolve('static/assets/image.svg'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
