/* exported takeRight */
/*
need output array
need a stopNumber
  check if stopNumber is larger than array.length
  if yes, return original array
use a for loop
  set i = 0 as initial value
  push array at array.length - stopnumber + index value to output array
  increment the index value
  stop when index is larger than stopnumber
return the output array
*/

function takeRight(array, count) {
  var result = [];
  var stopNumber = count;
  if (stopNumber > array.length) {
    return array;
  }
  for (var i = 0; i < stopNumber; i++) {
    result.push(array[array.length - stopNumber + i]);
  }
  return result;
}
