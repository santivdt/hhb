'use strict';

angular.module('hhbApp')
    .filter('keyValueFilter', function () {
        return function (input, keyToCompare, valueToCompare) {
            if (typeof(input) === 'undefined' || typeof(keyToCompare) === 'undefined' || typeof(valueToCompare) === 'undefined') {
                return input;
            }

            var entries = [];
            for (var i = input.length - 1; i >= 0; i--) {
                if (input[i][keyToCompare] == valueToCompare) {
                    entries.push(input[i]);
                }
            }
            return entries;
        }
    });





