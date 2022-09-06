/* exported titleCase */
function captilizeString(string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
}

function isItemInArray(item, array) {
  for (var i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return false;
    }
  }
  return true;
}

function titleCase(title) {
  var stringArray = title.split(' ');
  var captilizedArray = [];
  var smallWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'on', 'of', 'per', 'to'];
  for (var i = 0; i < stringArray.length; i++) {
    if (isItemInArray(stringArray[i].toLowerCase(), smallWords)) {
      captilizedArray.push(captilizeString(stringArray[i]));
    }
  }
}
