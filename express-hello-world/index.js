const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('A string that I am sending');
});

app.listen(3000);
