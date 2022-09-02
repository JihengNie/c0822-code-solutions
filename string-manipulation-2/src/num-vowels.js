/* exported numVowels */
/*
need a result number
need a counter
use while loop
  if string[counter] lowercased is equal to a,e,i,o,u
    result++
  counter++
  stop when counter is larger than string.length
return result
*/

function numVowels(string) {
  var result = 0;
  var counter = 0;
  while (counter < string.length) {
    if (string[counter].toLowerCase() === 'a' || string[counter].toLowerCase() === 'e' || string[counter].toLowerCase() === 'i' || string[counter].toLowerCase() === 'o' || string[counter].toLowerCase() === 'u') {
      result++;
    }
    counter++;
  }
  return result;
}
