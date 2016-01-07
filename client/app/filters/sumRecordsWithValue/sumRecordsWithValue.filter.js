'use strict';

angular.module('hhbApp')
    .filter('sumRecordsWithValue', function () {
        return function(input, keyToCompare, valueToCompare) {
            if (typeof(input) === 'undefined' || typeof(keyToCompare) === 'undefined' || typeof(valueToCompare) === 'undefined') {
                return 0;
            }
            var sum = 0;
            for (var i = input.length - 1; i >= 0; i--) {
                if(input[i][keyToCompare] == valueToCompare) {
                    sum ++;
                }
            }
            return sum;
        }
    });
