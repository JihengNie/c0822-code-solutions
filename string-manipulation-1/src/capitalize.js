/* exported capitalize */
/*
need a result variable
set temp equal lowercase all letters in word with tolowercase
slice the string after the first index
concatanate the slice and word at 0 with touppercase
return result
*/

function capitalize(word) {
  var result = '';
  var temp = word.toLowerCase();
  temp = temp.slice(1);
  result = word[0].toUpperCase() + temp;
  return result;
}
