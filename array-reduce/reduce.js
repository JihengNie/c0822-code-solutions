function reduce(array, reducer, initialValue) {
  let tempReturn;
  if (initialValue !== undefined) {
    tempReturn = reducer(initialValue, array[0]);
    for (let j = 1; j < array.length; j++) {
      tempReturn = reducer(tempReturn, array[j]);
    }
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      if (i === 0) {
        tempReturn = reducer(array[i], array[i + 1]);
      } else {
        tempReturn = reducer(tempReturn, array[i + 1]);
      }
    }
  }
  const result = tempReturn;
  return result;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account2 = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits2 = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sumFunction2 = (num1, num2) => num1 + num2;
console.log('sum2', reduce(numbers2, sumFunction2));

const product2 = reduce(numbers2, (num1, num2) => num1 * num2);
console.log('product2:', product2);

const compositeFunction2 = (obj1, obj2) => {
  return Object.assign(obj1, obj2);
};

const composite2 = reduce(traits2, compositeFunction2);
console.log('composite2:', composite2);

const depositFunction2 = (balance, nextObj) => {
  if (nextObj.type === 'deposit') {
    return balance + nextObj.amount;
  } else {
    return balance - nextObj.amount;
  }
};

const balance2 = reduce(account2, depositFunction2, 0);
console.log('balance2:', balance2);
