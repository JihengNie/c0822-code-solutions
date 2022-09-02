/* exported ransomCase */
/*
need an output string
need a counter
lowercase all inputs
use a while loop
  if counter is even
    output concatnate string[counter]
  if counter is odd
    output concatnate string[counter] uppercased
  incrememnt counter by 1
  stop when counter is larger than string.length
return output
*/
function ransomCase(string) {
  var result = '';
  var counter = 0;
  var stringLowerCased = string.toLowerCase();
  while (counter < stringLowerCased.length) {
    if (counter % 2 === 0) {
      result += stringLowerCased[counter];
    } else {
      result += stringLowerCased[counter].toUpperCase();
    }
    counter++;
  }
  return result;
}
