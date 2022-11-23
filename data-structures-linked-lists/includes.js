/* exported includes */

function includes(list, value) {
  if (list.data === value) return true;
  while (list.next) {
    if (list.data === value) return true;
    list = list.next;
  }
  if (list.data === value) return true;
  return false;
}
