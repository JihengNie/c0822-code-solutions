/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return undefined;
  let first = queue.dequeue();
  let next = queue.peek();
  if (next === undefined) return first;
  while (first > next) {
    queue.enqueue(first);
    first = queue.dequeue();
    next = queue.peek();
  }
  return first;
}
