/* exported intersection */
/*
need a result array
use a for loop
  check if the first[index] is in the second array
  if yes, push it into result array
use a for loop
  check if the second[index] is in the result array
  if no, check if it is in the first array
    if yes, push it to the result array
return result
*/
function isInArray(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

function intersection(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (isInArray(first[i], second)) {
      result.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!isInArray(second[j], result) && isInArray(second[j], first)) {
      result.push(second[j]);
    }
  }
  return result;
}
