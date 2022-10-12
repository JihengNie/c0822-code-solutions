const fs = require('fs');

const initialFile = process.argv[2];
const copyFile = process.argv[3];

fs.readFile(initialFile, (err, data) => {
  if (err) throw err;
  fs.writeFile(copyFile, data, err => {
    if (err) throw err;
  });
});
