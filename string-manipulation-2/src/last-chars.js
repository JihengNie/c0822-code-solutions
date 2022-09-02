/* exported lastChars */
/*
need an output string
need a stop number
  set stop number to length
check if stop number is larger than string.length
  if yes, set stop number to string.length
use while loop
  concatnate input[counter] with output
return output
*/

function lastChars(length, string) {
  var result = '';
  var stopNumber = length;
  if (stopNumber > string.length) {
    stopNumber = string.length;
  }
  for (var i = 0; i < stopNumber; i++) {
    result = string[string.length - 1 - i] + result;
  }
  return result;
}
