/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newNode = new LinkedList(value);
  if (!list.next) return list.data;
  let current = list.next;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
}
