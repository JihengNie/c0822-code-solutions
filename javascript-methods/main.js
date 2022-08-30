// Math object
var num1 = 12;
var num2 = 32;
var num3 = 7;

var maximumValue = Math.max(num1, num2, num3);

console.log('The maximum value of my three numbers is', maximumValue);

// Array Methods
var heros = ['Spiderman', 'Loki', 'Batman', 'Thor'];

var randomNumber = Math.random();
randomNumber = heros.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log('The value of randomIndex is', randomIndex);

var randomHero = heros[randomIndex];
console.log('My random hero is', randomHero);

var library = [
  {
    title: "Philosopher's Stone",
    author: 'J. K. Rowling'
  },
  {
    title: 'Chamber of Secrets',
    author: 'J. K. Rowling'
  },
  {
    title: 'Prisoner of Azkaban',
    author: 'J. K. Rowling'
  }
];

var lastBook = library.pop();
console.log('My last book is', lastBook);

var firstBook = library.shift();
console.log('My first book is', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('My final library is ', library);

// String Methods
var fullName = 'Jiheng Nie';
var firstAndLastName = fullName.split(' ');
console.log('The value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('The value of sayMyName:', sayMyName);
