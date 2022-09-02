/* exported swapChars */
/*
need output string
use a for loop
  if counter = firstindex
    output concatnate with string [secondindex]
  if counter = secondindex
    output concatnate with string [firstindex]
  else {
    output concatnate with string [counter]
  }
return output
*/

function swapChars(firstIndex, secondIndex, string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += string[secondIndex];
    } else if (i === secondIndex) {
      result += string[firstIndex];
    } else {
      result += string[i];
    }
  }
  return result;
}
