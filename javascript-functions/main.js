function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('10 minutes is', convertMinutesToSeconds(10), 'seconds');

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log(greet('Pam'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('A box with a width of 25 ft and an height of 30 ft has an area of ' + getArea(25, 30) + ' ft\u00B2');

function getFirstName(person) {
  return person.firstName;
}

var examplePerson = ({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('The first name of the example person is:', getFirstName(examplePerson));

function getLastElement(array) {
  var length = array.length;
  return array[length - 1];
}

var exampleArray = ['propane', 'and', 'propane', 'accessories'];

console.log('The last element in the exampleArray is:', getLastElement(exampleArray));
