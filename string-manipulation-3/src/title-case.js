/* exported titleCase */
/*
Need a function for captilizing strings
  use a for loop
    captilize first letter
    keep the rest of the string the same
Need a function for checking if an item is in an array
  use a for loop
    if the item is in the array, return true
    otherwise, return false
need a varaible for results
need an array of bad words
need a temp string
need an array of the title split by spaces

use a for loop
  captilize all of the strings in the array that is not in the bad array list
use a for loop
 concatnate the words from the first array with a space in the back
use a for loop
  captilize letters that are the beginning of a title
  check for JavaScript and API's that have symbols next to them
  concatnate the words into the final result
use a for loop and remove the last space in the string
captilize the string
*/

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
  var eachWordCaptilized = '';
  var wordCapitalizedWithPunctuation = '';
  var finalResult = '';
  var temp = '';
  var resultArray = [];
  var stringArray = lowerCasedTitle.split(' ');
  var smallWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'on', 'of', 'per', 'to'];
  for (var i = 0; i < stringArray.length; i++) {
    if (isItemInArray(stringArray[i].toLowerCase(), smallWords)) {
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
    eachWordCaptilized += resultArray[j] + ' ';
  }

  for (var k = 0; k < eachWordCaptilized.length; k++) {
    if (temp === 'Javascript') {
      temp = 'JavaScript';
    }
    if (temp === 'Api') {
      temp = 'API';
    }
    if (eachWordCaptilized[k - 1] === '-' || eachWordCaptilized[k - 1] === ':' || eachWordCaptilized[k - 2] === ':' || eachWordCaptilized[k - 1] === '"') {
      temp += eachWordCaptilized[k].toUpperCase();
    } else {
      temp += eachWordCaptilized[k];
    }
    if (eachWordCaptilized[k] === ' ') {
      wordCapitalizedWithPunctuation += temp;
      temp = '';
    }
  }
  wordCapitalizedWithPunctuation += temp;
  for (var n = 0; n < wordCapitalizedWithPunctuation.length - 1; n++) {
    finalResult += wordCapitalizedWithPunctuation[n];
  }
  finalResult = captilizeString(finalResult);
  return finalResult;
}
