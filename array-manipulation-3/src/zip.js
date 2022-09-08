/* exported zip */
/*
need an output array
need a temp array
need a variable for length
  set length to the length of first array
  if length of second is shorter, set the length to the second length
use a for loop
  push first[i] and second[i] into temp array
  push temp array into output array
  reset temp array
  stop when length is hit
return output array
*/

function zip(first, second) {
  var result = [];
  var temp = [];
  var length = first.length;
  if (length > second.length) {
    length = second.length;
  }
  for (var i = 0; i < length; i++) {
    temp.push(first[i]);
    temp.push(second[i]);
    result.push(temp);
    temp = [];
  }
  return result;
}
