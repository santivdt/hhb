'use strict';

angular.module('hhbApp')
    .filter('keyValueFilter', function () {
        return function (input, keyToCompare, valueToCompare1, valueToCompare2) {
            if (typeof(input) === 'undefined' || typeof(keyToCompare) === 'undefined' || valueToCompare1 && valueToCompare2) {
                return input;
            }

            var valueToCompare = valueToCompare1 ? valueToCompare1 : valueToCompare2,
                data = [];

            angular.forEach(input, function (item) {
                console.log(item[keyToCompare] == valueToCompare);
                if (item[keyToCompare] == valueToCompare) {
                    data.push(item);
                }
            });

            return data;
        }
    });





