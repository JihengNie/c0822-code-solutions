var bookArray = [
  {
    isbn: '9788869183157',
    title: "Philosopher's Stone",
    author: 'J.K. Rowling'
  },
  {
    isbn: '9780439064873',
    title: 'Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    isbn: '9780807283158',
    title: 'Prisoner of Azkaban',
    author: 'J.K. Rowling'
  }
];

console.log('bookArray: ', bookArray);
console.log('Type of bookArray: ', typeof bookArray);

var jsonBookArray = JSON.stringify(bookArray);
console.log('JSON version of bookArray: ', jsonBookArray);
console.log('Type of JSON version of bookArray: ', typeof jsonBookArray);

var student = '{"idNumber":1234,"name":"Jimmy"}';
console.log('student: ', student);
console.log('Type of student: ', typeof student);

var parsedStudent = JSON.parse(student);
console.log('parsedStudent: ', parsedStudent);
console.log('Type of parsedStudent: ', typeof parsedStudent);
