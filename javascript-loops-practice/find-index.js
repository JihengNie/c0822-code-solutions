/* exported findIndex */
/*
need output variable that is a number
need counter
use a while loop
  check if array at counter is equal to value
    if yes, set output variable equal to counter and return the result
    increment counter by 1
    stop when counter is larger than array length
if not, return -1 for output variable
*/
function findIndex(array, value) {
  var result = -1;
  var counter = 0;
  while (counter < array.length) {
    if (array[counter] === value) {
      result = counter;
      return result;
    }
    counter++;
  }
  return result;
}
