/* exported reverseWords */
/*
need result string
need temp string
use a for loop
  check if the string at index is a space
    if no, concatnate string at index to temp
    if yes, concatnate temp string to result string
add in temp one last time to result
return result
*/

function reverseWords(string) {
  var result = '';
  var temp = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      temp = string[i] + temp;
    } else {
      result = result + temp + ' ';
      temp = '';
    }
  }
  result += temp;
  return result;
}
