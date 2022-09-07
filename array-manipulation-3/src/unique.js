/* exported unique */
/*
need an output array
need a for loop
  for each index, check if the item is in the output array
  if no, add to result array
return output array
*/

function isNotInArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return false;
    }
  }
  return true;
}

function unique(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (isNotInArray(result, array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
