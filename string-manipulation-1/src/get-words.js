/* exported getWords */
/*
create an array for result
need a counter
need a temp variable
use for loop
  check if the character is a string of space
    if not, concatnate the string at index to temp
    if yes, push the temp variable to result then set temp varaible to ''
return result array
*/
function getWords(string) {
  var result = [];
  var temp = '';
  if (string === '') {
    return result;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      temp += string[i];
    } else if (string[i] === ' ') {
      result.push(temp);
      temp = '';
    }
  }
  result.push(temp);
  return result;
}
