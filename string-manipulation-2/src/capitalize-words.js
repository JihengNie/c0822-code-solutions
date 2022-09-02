/* exported capitalizeWords */
/*
need output string
need temp to equal input lowercased
need a counter at 0
use a while loop
  check if the string at counter - 1 is equal to ' ' or counter equal 0
  if yes, concatnate string[counter].toUpperCase() to output
  if no, concatnate string[counter] to output
  increment counter
  stop when counter is larger than string.length
return output
*/

function capitalizeWords(string) {
  var result = '';
  var temp = string.toLowerCase();
  var counter = 0;
  while (counter < string.length) {
    if (temp[counter - 1] === ' ' || counter === 0) {
      result += temp[counter].toUpperCase();
    } else {
      result += temp[counter];
    }
    counter++;
  }
  return result;
}
