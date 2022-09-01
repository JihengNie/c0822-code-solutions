/* exported getIndexes */
/*
need an array for output
need a counter for the indexes
use a while loop
  push the counter to output
  incrememnt counter
  stop when counter is larger than the length of the array
return output

*/

function getIndexes(array) {
  var result = [];
  var counter = 0;
  while (counter < array.length) {
    result.push(counter);
    counter++;
  }
  return result;
}
