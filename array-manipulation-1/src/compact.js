/* exported compact */
/*
need a result array
use a forloop
  check if the value of the item will return true
  if yes, push it to result
return result array
*/

function compact(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
