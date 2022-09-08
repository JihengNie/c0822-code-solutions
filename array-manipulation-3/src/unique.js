/* exported unique */
/*
need an output array
need a for loop
  for each index, check if the item is in the output array
  if no, add to result array
return output array
*/

function isNotInArray(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return false;
    }
  }
  return true;
}

function unique(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (isNotInArray(array[i], result)) {
      result.push(array[i]);
    }
  }
  return result;
}
