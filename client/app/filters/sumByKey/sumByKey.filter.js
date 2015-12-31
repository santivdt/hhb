'use strict';

angular.module('hhbApp')
  .filter('sumByKey', function () {
    return function(input, keyToCount, keyToCompare, valueToCompare) {
      if (typeof(input) === 'undefined' || typeof(keyToCount) === 'undefined') {
        return 0;
      }
      var sum = 0;
      for (var i = input.length - 1; i >= 0; i--) {
        if(input[i][keyToCompare] == valueToCompare && typeof(input[i][keyToCount]) !== 'undefined') {
          sum += parseInt(input[i][keyToCount]);
        }
      }
      return sum;
    }
  });
