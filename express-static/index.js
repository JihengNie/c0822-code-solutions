const express = require('express');
const path = require('node:path');
const app = express();

const joinedPath = path.join(__dirname, 'public');
console.log('joinedPath', joinedPath);

function serveFunction(path) {
  return express.static(path);
}

const resultOfServe = app.use(serveFunction(joinedPath));
console.log('resultOfServe', resultOfServe);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
