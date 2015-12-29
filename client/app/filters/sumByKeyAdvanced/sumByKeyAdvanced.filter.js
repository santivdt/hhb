'use strict';


angular.module('hhbApp')
    .filter('sumByKeyAdvanced', function () {
        return function(input, keyToCount, keyToCompare, valueToCompare, keyToCompare2, valueToCompare2) {
            if (typeof(input) === 'undefined' || typeof(keyToCount) === 'undefined') {
                return 0;
            }
            var sum = 0;
            for (var i = input.length - 1; i >= 0; i--) {
                if(input[i][keyToCompare] == valueToCompare && input[i][keyToCompare2] == valueToCompare2 && typeof(input[i][keyToCount]) !== 'undefined') {
                    sum += parseInt(input[i][keyToCount]);
                }
            }
            return sum;
        }
    });

