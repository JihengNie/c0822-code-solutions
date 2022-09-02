/* exported chunk */
/*
need output array
need a temp array
check if size is larger than array.length
  if yes, return input array
use a for loop
  check if length of temp array is less than size
    if yes, push array[index] into temp
    if no, push temp into output and
      set temp = []
push temp into output if temp has length greater than 0
return output
*/

function chunk(array, size) {
  var result = [];
  var temp = [];
  if (size > array.length) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    temp.push(array[i]);
    if (temp.length === size) {
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length > 0) {
    result.push(temp);
  }
  return result;
}
