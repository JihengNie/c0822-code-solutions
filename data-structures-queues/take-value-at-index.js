/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return undefined;
  let count = 0;
  while (count < index) {
    const temp = queue.dequeue();
    queue.enqueue(temp);
    count++;
  }

  return queue.dequeue();
}
