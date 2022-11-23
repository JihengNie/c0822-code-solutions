/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) return list;
  list.next.data = value;
  return list;
}
