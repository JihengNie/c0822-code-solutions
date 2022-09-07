/* exported isAnagram */
/*
combine both string
need a count number
check if the length of first string and second string is the same
use a for loop to loop through combined string
  initialize count = 0 before the second loop
  if combined string at index is not ' '
    use a for loop
      count increments every time that letter appears in the combined string
  if the count is odd, return false
return true
*/

function removeSpaces(string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      result += string[i];
    }
  }
  return result;
}

function isAnagram(firstString, secondString) {
  var toy = firstString + secondString;
  var count = 0;
  if (removeSpaces(firstString).length !== removeSpaces(secondString).length) {
    return false;
  }
  for (var i = 0; i < toy.length; i++) {
    count = 0;
    if (toy[i] !== ' ') {
      for (var j = 0; j < toy.length; j++) {
        if (toy[i] === toy[j]) {
          count++;
        }
      }
    }
    if (count % 2 !== 0) {
      return false;
    }
  }
  return true;
}
