/* exported getKeys */
/*
need an array for result
use a for in loop
  push the item to the result array
  stop once we are throguh all of the items in the object
return result
*/

function getKeys(object) {
  var result = [];
  for (var items in object) {
    result.push(items);
  }
  return result;
}
