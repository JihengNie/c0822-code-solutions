/* exported defaults */
/*
set counter to 0
use a for in loop for the source
  set counter = 0 for each loop
  use a for in loop for the target
    check if items in the target is equal to the one item in the source
      if yes, counter ++
    if counter is 0, then the item is not in the target
      add the item
*/

function defaults(target, source) {
  var check = true;
  for (var sourceItems in source) {
    check = true;
    for (var targetItems in target) {
      if (sourceItems === targetItems) {
        check = false;
      }
    }
    if (check === true) {
      target[sourceItems] = source[sourceItems];
    }
  }
}
