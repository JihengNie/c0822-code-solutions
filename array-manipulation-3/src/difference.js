/* exported difference */
/*
need an result array
use a for loop
  check if array[index] is in the second array
  if no, push the item into the result array
use a for loop to check if the item is in the result array
  if no, use a for loop
    check if the item is in the first array
      if no, push it to the result array
return the result array
*/

function isNotInArray2(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return false;
    }
  }
  return true;
}

function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (isNotInArray2(first[i], second)) {
      result.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (isNotInArray2(second[j], result) && isNotInArray2(second[j], first)) {
      result.push(second[j]);
    }
  }
  return result;
}
