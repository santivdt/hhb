'use strict';

angular.module('hhbApp')
    .filter('dateFilter', function () {
        return function (input, startDate, endDate, keyToCompare, valueToCompare) {
            if (typeof(input) === 'undefined' || typeof(startDate) === 'undefined') {
                return 0;
            }

            //change dates to correct ISO format
            for (var i = input.length - 1; i >= 0; i--) {
                var d = input[i].date;
                var n = new Date(Date.parse(d));
                input[i].date.splice();
                console.log(input[i].date);
            }

            // push entries with correct dates to array
            var entriesDate = [];
            for (i = input.length - 1; i >= 0; i--) {
                if(input[i].date >= startDate && input[i].date <= endDate && typeof(input[i][keyToCompare]) == valueToCompare) {
                    entriesDate.push(input[i]);
                }
            }
            return entriesDate;

        };
    });





