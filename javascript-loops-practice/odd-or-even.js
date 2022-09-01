/* exported oddOrEven */
/*
need an output array
need a counter
use a while loop
  check if the numbers at counter is even
    if yes, push 'even' to the output array
    else, push 'odd' to the output array
  increment counter by 1
  stop when counter is larger than length of the array
return the output array

*/
function oddOrEven(numbers) {
  var result = [];
  var counter = 0;
  while (counter < numbers.length) {
    if (numbers[counter] % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
    counter++;
  }
  return result;
}
