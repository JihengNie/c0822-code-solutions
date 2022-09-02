/* exported getValues */
/*
need an array for result
use a for in loop
  push the input[item] to the result array
  stop once we are throguh all of the items in the object
return result
*/

function getValues(object) {
  var result = [];
  for (var items in object) {
    result.push(object[items]);
  }
  return result;
}
