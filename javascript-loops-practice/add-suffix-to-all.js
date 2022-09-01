/* exported addSuffixToAll */
/*
need an array for the output
need a counter for the loop
use a while loop
  in each loop, string concatnate the word value at the counter number with the suffix
  push into output array
  incrememnt counter until it is larger than the length of the array
return output
*/

function addSuffixToAll(words, suffix) {
  var result = [];
  var counter = 0;
  while (counter < words.length) {
    result.push(words[counter] + suffix);
    counter++;
  }
  return result;
}
