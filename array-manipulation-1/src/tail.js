/* exported tail */
/*
need a result array
use a for loop
  start index at 1
  append array at index to result array
  stop when index is larger than array length
return result
*/

function tail(array) {
  var result = [];
  for (var i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
