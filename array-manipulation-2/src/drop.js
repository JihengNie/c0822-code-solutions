/* exported drop */
/*
need a result array
need a stopnumber
  check if count is larger than array length,
    if yes, stopnumber = array.length
    if no, stopnumber = count
use a for loop
  push items after count into result array
  start at count
  end when counter is larger than stopnumber
return result
*/

function drop(array, count) {
  var result = [];
  var stopNumber = count;
  if (stopNumber > array.length) {
    stopNumber = array.length;
  }
  for (var i = stopNumber; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
