/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return undefined;
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (second === undefined) return first;
  const min = first < second ? first : second;
  const max = first > second ? first : second;
  queue.enqueue(max);
  return min;
}
