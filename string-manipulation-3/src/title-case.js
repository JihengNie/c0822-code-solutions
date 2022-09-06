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
      return true;
    }
  }
  return false;
}

function titleCase(title) {
  var lowerCasedTitle = title.toLowerCase();
  var result = '';
  var resultArray = [];
  var stringArray = lowerCasedTitle.split(' ');
  var smallWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'on', 'of', 'per', 'to'];
  for (var i = 0; i < stringArray.length; i++) {
    if (isItemInArray(stringArray[i].toLowerCase(), smallWords)) {
      resultArray.push(stringArray[i].toLowerCase());
      resultArray.push(stringArray[i].toLowerCase());
    } else {
      if (stringArray[i].toLowerCase() === 'javascript') {
        resultArray.push('JavaScript');
      } else if (stringArray[i].toLowerCase() === 'api') {
        resultArray.push('API');
      } else {
        resultArray.push(captilizeString(stringArray[i]));
      }
    }
  }
  for (var j = 0; j < resultArray.length; j++) {
    result += ' ' + resultArray[j];
  }
  return result;
}
