/* exported removeTail */

function removeTail(list) {
  if (!list.next) return;
  let current = list.next;
  while (current.next.next) {
    current = current.next;
  }
  current.next = null;
}
