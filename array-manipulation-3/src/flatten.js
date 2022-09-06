/* exported flatten */
/*
need an output array
use a for loop
  check if the item at each index is an array
  if yes, push it to the output array
  if no, use a for loop
    push the items in the nested array into the output array
return the output array
*/

function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      result.push(array[i]);
    } else {
      for (var j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    }
  }
  return result;
}
