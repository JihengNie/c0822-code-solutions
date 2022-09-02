/* exported truncate */
/*
need an output string
need a stop number
check if length is larger than string length
  if yes, set stop = string.length
  if no, set stop = length
use for loop
  concatnate string at counter to the output string
  increment counter
  stop when counter is larger than stop number
concatnate string "..."
return output
*/

function truncate(length, string) {
  var result = '';
  var stopNumber = length;
  if (length > string.length) {
    stopNumber = string.length;
  }
  for (var i = 0; i < stopNumber; i++) {
    result += string[i];
  }
  return result + '...';
}
