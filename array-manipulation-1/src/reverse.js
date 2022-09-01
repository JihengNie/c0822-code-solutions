/* exported reverse */
/*
need a result array
use a for loop
  start index at 0
  append array at array.length - 1 - i to result array
  stop when index is larger than array length
return result
*/
function reverse(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(array[array.length - 1 - i]);
  }
  return result;
}
