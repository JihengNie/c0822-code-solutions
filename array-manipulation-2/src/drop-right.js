/* exported dropRight */
/*
need an output array
check if count is larger than the array length
  if yes, return original array
use a for loop
  push array at index to output
  increment index
  stop when index is larger than array length - count
return output
*/

function dropRight(array, count) {
  var result = [];
  if (count > array.length) {
    return array;
  }
  for (var i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  return result;
}
