/* exported firstChars */
/*
need an output string
need a stop number
  set stop number to length
check if stop number is larger than string.length
  if yes, set stop number to string.length
use for loop
  concatnate output with input[counter]
return output
*/

function firstChars(length, string) {
  var result = '';
  var stopNumber = length;
  if (stopNumber > string.length) {
    stopNumber = string.length;
  }
  for (var i = 0; i < stopNumber; i++) {
    result += string[i];
  }
  return result;
}
