/* exported getStudentNames */
/*
need an output array
need a counter
use a while loop
  push the name property of the students object at counter into the output array
  incrememnt counter by 1
  stop when counter is larger than the students array
return result
*/

function getStudentNames(students) {
  var result = [];
  var counter = 0;
  while (counter < students.length) {
    result.push(students[counter].name);
    counter++;
  }
  return result;
}
