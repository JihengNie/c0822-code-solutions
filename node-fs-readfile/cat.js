const fs = require('fs');
var files = [];
var counter = 2;

function readingFiles(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    return data;
  });
}

let index = 0;
while (counter < process.argv.length) {
  files[index] = readingFiles(process.argv[counter]);
  index++;
  counter++;
}

console.log(files);

function non() {
  if (counter < process.argv.length) {
    while (counter < process.argv.length) {
      files[index] = readingFiles(process.argv[counter]);
      index++;
      counter++;
    }
  } else {
    console.log(files);
  }
}

non();
