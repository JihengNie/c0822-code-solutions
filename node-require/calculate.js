const num1 = parseInt(process.argv[2], 10);
const operation = process.argv[3].toLowerCase();
const num2 = parseInt(process.argv[4], 10);

const addFile = require('./add');
const subtractFile = require('./subtract');
const multiplyFile = require('./multiply');
const divideFile = require('./divide');

if (operation === 'add' || operation === 'plus') {
  console.log(`result: ${addFile.add(num1, num2)}`);
} else if (operation === 'subtract' || operation === 'minus') {
  console.log(`result: ${subtractFile.subtract(num1, num2)}`);
} else if (operation === 'multiply' || operation === 'times') {
  console.log(`result: ${multiplyFile.multiply(num1, num2)}`);
} else if (operation === 'divide' || operation === 'over') {
  console.log(`result: ${divideFile.divide(num1, num2)}`);
} else {
  console.log('Invalid Expression');
}
