/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const result = new LinkedList(value);
  result.next = list;
  return result;
}
