const fs = require('fs');
let counter = 2;
const files = [];
const lengthOfInput = process.argv.length;

function readingFiles(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    files[counter] = data;
    counter++;
    if (counter === lengthOfInput) {
      for (let j = 2; j < lengthOfInput; j++) {
        console.log(files[j]);
      }
    }
  });
}

for (let i = 2; i < lengthOfInput; i++) {
  readingFiles(process.argv[i]);
}
