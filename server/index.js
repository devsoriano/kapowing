'use strict';

const path = require('path');
const express = require('express');
const app = express(); // create express app

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/ping', (req, res) => {
  res.sendStatus(200);
});

// add middlewares
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

console.log(`Running on http://${HOST}:${PORT}`);

// start express server on port 5000
app.listen(PORT, HOST, () => {
  console.log('server started on port 8080');
});
