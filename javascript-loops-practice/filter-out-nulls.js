/* exported filterOutNulls */
/*
create output array
creat counter
use while loop
  check if the input at counter is null
    if no, append it to output array
  increment counter by 1
  stop when counter is larger than length of input array
return output
*/

function filterOutNulls(values) {
  var result = [];
  var counter = 0;
  while (counter < values.length) {
    if (values[counter] !== null) {
      result.push(values[counter]);
    }
    counter++;
  }
  return result;
}
