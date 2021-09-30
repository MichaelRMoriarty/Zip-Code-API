const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Mike!');
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})