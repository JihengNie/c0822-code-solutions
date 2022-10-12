const fs = require('fs');
let mergerdFiles = '';

function conCat(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    mergerdFiles += data;
    console.log(mergerdFiles);
  });
  return mergerdFiles;
}

let i = 2;

while (i !== process.argv.length) {
  conCat(process.argv[i]);
  i++;
}
