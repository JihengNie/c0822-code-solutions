/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return true;
  }
  const last = stack.pop();
  stack.push(value);
  stack.push(last);
  return stack;
}
