const num1 = parseInt(process.argv[2], 10);
const operation = process.argv[3].toLowerCase();
const num2 = parseInt(process.argv[4], 10);

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (operation === 'add' || operation === 'plus') {
  console.log(`result: ${add.add(num1, num2)}`);
} else if (operation === 'subtract' || operation === 'minus') {
  console.log(`result: ${subtract.subtract(num1, num2)}`);
} else if (operation === 'multiply' || operation === 'times') {
  console.log(`result: ${multiply.multiply(num1, num2)}`);
} else if (operation === 'divide' || operation === 'over') {
  console.log(`result: ${divide.divide(num1, num2)}`);
} else {
  console.log('Invalid Expression');
}
