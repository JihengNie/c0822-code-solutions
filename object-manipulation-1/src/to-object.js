/* exported toObject */
/*
need a result object
set result[keyValuePair[0]] = keyValuePair[1]
reutrn result
*/

function toObject(keyValuePair) {
  var result = {};
  result[keyValuePair[0]] = keyValuePair[1];
  return result;
}
