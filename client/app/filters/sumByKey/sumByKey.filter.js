'use strict';

angular.module('hhbApp')
  .filter('sumByKey', function () {
    return function(input, keyToCount) {
      if (typeof(input) === 'undefined' || typeof(keyToCount) === 'undefined') {
        return 0;
      }
      var sum = 0;
      for (var i = input.length - 1; i >= 0; i--) {
        if(typeof(input[i][keyToCount]) !== 'undefined') {
          sum += parseInt(input[i][keyToCount]);
        }
      }
      return sum;
    }
  });
