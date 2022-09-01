/* exported initial */
/*
need a result array
use a for loop
  start index at 0
  append array at index to result array
  stop when index is larger than array length - 1
return result
*/

function initial(array) {
  var result = [];
  for (var i = 0; i < array.length - 1; i++) {
    result.push(array[i]);
  }
  return result;
}
