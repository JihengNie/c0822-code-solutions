/* exported filterOutStrings */
/*
need output array
need counter
use a while loop
  each loop, check if the input at index counter is a string or not
  if it is not a string, push it to output
  increment counter by 1
  stop when counter is bigger than input length
return output array
*/

function filterOutStrings(values) {
  var result = [];
  var counter = 0;
  while (counter < values.length) {
    if (typeof values[counter] !== 'string') {
      result.push(values[counter]);
    }
    counter++;
  }
  return result;
}
