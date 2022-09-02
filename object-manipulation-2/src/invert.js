/* exported invert */
/*
need a result object
need a key array
need a values array
use a for in loop
  push the item value to key array
  push the source[item] to the value array
use a for loop
  result[value[index]] is key[index]
return result
*/

function invert(source) {
  var result = {};
  var key = [];
  var value = [];
  for (var items in source) {
    key.push(items);
    value.push(source[items]);
  }
  for (var i = 0; i < key.length; i++) {
    result[value[i]] = key[i];
  }
  return result;
}
