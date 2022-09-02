/* exported reverseWord */
/*
create an empty string
need a counter
use for loop
  append the letter at string.length - 1 - counter to the empty string
  stop when counter is larger than the length of the string
return result
*/

function reverseWord(word) {
  var result = '';
  for (var i = 0; i < word.length; i++) {
    result += word[word.length - 1 - i];
  }
  return result;
}
