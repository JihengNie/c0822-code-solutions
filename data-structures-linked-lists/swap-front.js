/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const second = list.next.data;
  const first = list.data;
  list.next.data = first;
  list.data = second;
  return list;
}
