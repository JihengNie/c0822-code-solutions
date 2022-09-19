/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  },
  getAverage: function (array) {
    return calculator.sumAll(array) / array.length;
  }
};
