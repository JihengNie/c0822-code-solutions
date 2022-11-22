/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const last = stack.pop();
  const secondLast = stack.peek();

  if (last === undefined) {
    return undefined;
  }
  stack.push(last);
  return secondLast;
}
