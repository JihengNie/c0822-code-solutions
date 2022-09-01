/* exported sumAll */
/*
need a variable for the sum
need a counter
Use a while loop
  each loop, take sum and add the array at the counter
  incrememnt the counter until it is the same length as the array
  stop when counter is larger than the length of the array
return the result
*/

function sumAll(numbers) {
  var sum = 0;
  var counter = 0;
  while (counter < numbers.length) {
    sum += numbers[counter];
    counter++;
  }
  return sum;
}
