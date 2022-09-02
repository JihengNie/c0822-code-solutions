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

  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}
