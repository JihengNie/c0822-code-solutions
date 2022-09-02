/* exported capitalizeWord */
/*
need an output string
set word to lowercase
check if the lowercase word is = javascript
  if yes, return 'JavaScript'
slice the lowercase word after index 1.
set output to the string[0] uppercase concatnated with the sliced word
return output
*/

function capitalizeWord(word) {
  var result = '';
  var temp = word.toLowerCase();
  if (temp === 'javascript') {
    return 'JavaScript';
  }
  temp = temp.slice(1);
  result = word[0].toUpperCase() + temp;
  return result;
}
