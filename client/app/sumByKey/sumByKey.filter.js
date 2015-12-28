'use strict';

angular.module('hhbApp')
  .filter('sumByKey', function () {
    return function(input, key, type) {
      if (typeof(input) === 'undefined' || typeof(key) === 'undefined') {
        return 0;
      }
      var sum = 0;
      for (var i = input.length - 1; i >= 0; i--) {
        if(input[i].flow == type && typeof(input[i][key]) !== 'undefined') {
          sum += parseInt(input[i][key]);
        }
      }
      return sum;
    }
  });
