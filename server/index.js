const express = require('express');
const bodyParser = require('body-parser');
const zipCodeShortener = require('./zipCodeShortener.js');
const app = express();
const port = 3000;

const zipCodes = {};

app.get('/display', (req, res) => {
  res.send(zipCodeShortener(zipCodes));
})

app.get('/has/:code', (req, res) => {
  if (zipCodes[req.params.code]) {
    res.send(true)
  } else {
    res.send(false);
  };
})

app.post('/insert/:code', (req, res) => {
  zipCodes[req.params.code] = true;
  res.status(201).send(`Zipe code ${req.params.code} inserted.`);
})

app.delete('/:code', (req, res) => {
  if (zipCodes[req.params.code]) delete zipCodes[req.params.code];

  res.status(200).send(`Zip code ${req.params.code} deleted.`);
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})