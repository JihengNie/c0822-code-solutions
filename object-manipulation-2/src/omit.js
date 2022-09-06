/* exported omit */
/*
need a result object
need a counter number
use for in loop
  set counter to 0
  use a for loop
    check if the key from the source is in the keys array
    if yes, counter++
  if counter is still 0, add the item and its value to the result
return result
*/

function omit(source, keys) {
  var result = {};
  var check = true;
  for (var items in source) {
    check = true;
    for (var i = 0; i < keys.length; i++) {
      if (items === keys[i]) {
        check = false;
      }
    }
    if (check === true) {
      result[items] = source[items];
    }
  }
  return result;
}
