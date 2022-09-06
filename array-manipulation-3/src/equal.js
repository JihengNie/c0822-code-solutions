/* exported equal */
/*
check if both array has the same length
 use a while loop
  check if the array1[i] is equal to array2[i]
    if yes, incrememnt counter
    otherwise, return false
  stop when counter is larger than array1's length
 */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  var counter = 0;
  while (counter < first.length) {
    if (first[counter] === second[counter]) {
      counter++;
    } else {
      return false;
    }
  }
  return true;
}
