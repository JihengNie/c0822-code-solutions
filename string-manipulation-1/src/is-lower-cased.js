/* exported isLowerCased */
/*
need a counter
need a result
use a while loop
  check if word at counter is the same as word at counter tolowercase
  if yes, result ++
  counter incrememnt
  stop when counter is larger than word.length
return result === word.length
*/
function isLowerCased(word) {
  var counter = 0;
  var result = 0;
  while (counter < word.length) {
    if (word[counter] === word[counter].toLowerCase()) {
      result++;
    }
    counter++;
  }
  return result === word.length;
}
