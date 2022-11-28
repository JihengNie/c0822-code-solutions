const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sumFunction = (num1, num2) => num1 + num2;
const sum = numbers.reduce(sumFunction);
console.log('sum:', sum);

const product = numbers.reduce((num1, num2) => num1 * num2);
console.log('product:', product);

const depositFunction = (balance, nextObj) => {
  if (nextObj.type === 'deposit') {
    return balance + nextObj.amount;
  } else {
    return balance - nextObj.amount;
  }
};

const balance = account.reduce(depositFunction, 0);
console.log('balance:', balance);

const compositeFunction = (obj1, obj2) => {
  return Object.assign(obj1, obj2);
};

const composite = traits.reduce(compositeFunction);
console.log('composite:', composite);
