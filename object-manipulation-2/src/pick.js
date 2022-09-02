/* exported pick */
/*
need an output object
use a for loop
  use for in loop
    check if the item is in the source and the item is not undefined
      if yes, add source at index as a property with a value at source[keys[index]]
  incrememnt index
  stop when i larger than keys length
return output
*/

function pick(source, keys) {
  var result = {};

  for (var i = 0; i < keys.length; i++) {
    for (var items in source) {
      if (items === keys[i] && source[items] !== undefined) {
        result[keys[i]] = source[keys[i]];
      }
    }
  }
  return result;
}
