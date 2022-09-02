/* exported includes */
/*
use for loop
  check if value is equal to array at index
  if yes
    return true
return false
*/
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
