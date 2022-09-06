/* exported isAnagram */
/*
combine both string
need a count number
use a for loop to loop through combined string
  initialize count = 0 before the second loop
  if combined string at index is not ' '
    use a for loop
      count increments every time that letter appears in the combined string
  if the count is odd, return false
return true
*/

function isAnagram(firstString, secondString) {
  var toy = firstString + secondString;
  var count = 0;
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
