const fs = require('fs');
var files = [];

function readingFiles(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    files.push(data);
  });
}

for (let j = 2; j < process.argv.length; j++) {
  readingFiles(process.argv[j]);
}

for (let i = 0; i < files.length; i++) {
  console.log(files[i]);
}
