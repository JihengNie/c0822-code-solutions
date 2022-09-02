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
  var counter = 0;
  for (var sourceItems in source) {
    counter = 0;
    for (var targetItems in target) {
      if (sourceItems === targetItems) {
        counter++;
      }
    }
    if (counter === 0) {
      target[sourceItems] = source[sourceItems];
    }
  }
}
