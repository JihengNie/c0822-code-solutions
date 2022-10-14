const express = require('express');
const app = express();

var nextId = 1;
var grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const items in grades) {
    gradesArray.push(grades[items]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.iD = nextId;
  grades[nextId] = req.body;
  res.status(201).send(grades[nextId]);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
