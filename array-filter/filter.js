function filter(array, predicate) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names2 = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers2 = filter(numbers2, nums => nums % 2 === 0);
console.log(evenNumbers2);

const overFive2 = filter(numbers2, nums => nums > 5);
console.log(overFive2);

const startWithE2 = filter(names2, name => name.startsWith('E'));
console.log(startWithE2);

const haveD2 = filter(names2, name => name.includes('D') || name.includes('d'));
console.log(haveD2);
