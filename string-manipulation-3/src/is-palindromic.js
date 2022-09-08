/* exported isPalindromic */
/*
Need a counter
use a while loop
  check if the first letter is the same as the last letter and it is not ' '
  increment inedx by 1
  stop once index is at math.floor(string.length/2)
  if at any time it is false, return false
return true
*/

function isPalindromic(string) {
  var counter = 0;
  while (counter < Math.floor((string.length / 2))) {
    if (string[counter] !== string[string.length - 1 - counter] && (string[counter] !== ' ') && string[string.length - 1 - counter] !== ' ') {
      return false;
    }
    counter++;
  }
  return true;
}
