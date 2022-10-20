function map(array, transform) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(transform(array[i]));
  }
  return result;
}
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages2 = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled2 = map(numbers2, num => num * 2);
console.log('doubled2:', doubled2);

const prices2 = map(numbers2, num => '$' + num.toFixed(2));
console.log('prices2:', prices2);

const upperCased2 = map(languages2, lang => lang.toUpperCase());
console.log('upperCased2:', upperCased2);

const firstLetters2 = map(languages2, lang => lang[0]);
console.log('firstLetters2:', firstLetters2);
