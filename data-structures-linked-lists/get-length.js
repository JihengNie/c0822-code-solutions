/* exported getLength */

function getLength(list) {
  let current = list.next;
  let counter = 1;
  while (current) {
    current = current.next;
    counter++;
  }
  return counter;
}
