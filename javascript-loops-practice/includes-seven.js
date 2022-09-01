/* exported includesSeven */
/*
need counter
use a while loop
  check if input at counter is === to the number 7
    return true
  else return false
  counter increases by 1
  stop when counter is larger than input length
*/

function includesSeven(array) {
  var counter = 0;
  while (counter < array.length) {
    if (array[counter] === 7) {
      return true;
    }
    counter++;
  }
  return false;
}
