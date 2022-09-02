/* exported take */
/*
need output array
need counter
need a stopnumber
  check if count is larger than array length,
    if yes, stopnumber = array.length
    if no, stopnumber = count
use while loop
  push element at counter to the result array
  increment counter
  stop when counter is larger than stopNumber
resturn output
*/

function take(array, count) {
  var result = [];
  var counter = 0;
  var stopNumber = count;
  if (stopNumber > array.length) {
    stopNumber = array.length;
  }
  while (counter < stopNumber) {
    result.push(array[counter]);
    counter++;
  }
  return result;
}
