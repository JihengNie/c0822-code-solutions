var colors = [
  'red',
  'white',
  'blue'
];

console.log('value of colors[0] is:', colors[0]);
console.log('value of colors[1] is:', colors[1]);
console.log('value of colors[2] is:', colors[2]);

var americaColors = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(americaColors);

colors[2] = 'green';
var mexicoColors = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(mexicoColors);

console.log('value of colors: ', colors);

var students = [
  'Abe',
  'Bob',
  'Cody',
  'Denny'
];

var numberOfStudents = students.length;
console.log('There are', numberOfStudents, 'students in the class');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('value of lastStudent: ', lastStudent);
console.log('value of student:', students);
