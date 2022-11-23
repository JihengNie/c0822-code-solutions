/* exported getTail */

function getTail(list) {
  if (!list.next) return list.data;
  let current = list.next;
  while (current.next) {
    current = current.next;
  }
  return current.data;
}
