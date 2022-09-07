/* exported union */
/*
Need a result array
Make a copy of the array into the result array
use a for loop
  check if the item is in the array already.
  If no, push it
rerturn the result array
*/

function isNotInArray3(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return false;
    }
  }
  return true;
}

function union(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    result.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (isNotInArray3(second[j], result)) {
      result.push(second[j]);
    }
  }
  return result;
}
