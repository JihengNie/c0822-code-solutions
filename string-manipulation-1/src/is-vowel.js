/* exported isVowel */
/*
create an array of vowels
use a for loop
  check if the char is equal to the vowels at index's upper or lower
  if yes, break loop
  return true
otherwise return false
*/

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (char === vowels[i] || char === vowels[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}
