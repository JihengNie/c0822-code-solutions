/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const valueList = new LinkedList(value);
  valueList.next = list.next;
  list.next = valueList;
}
