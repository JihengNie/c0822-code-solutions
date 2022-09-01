/* exported countdown */
/*
Need an output array to store the numbers
use while loop
  push the number to the output array
  decrement the number
  stop when number is 0
output the array
*/

function countdown(number) {
  var result = [];
  while (number >= 0) {
    result.push(number);
    number--;
  }
  return result;
}
