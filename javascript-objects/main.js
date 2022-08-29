var student = {
  firstName: 'Jiheng',
  lastName: 'Nie',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Risk Analyst';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student object: ', student);

var vehicle = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2006
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('value of vehicle object: ', vehicle);

var pet = {
  name: 'Max',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet object: ', pet);
