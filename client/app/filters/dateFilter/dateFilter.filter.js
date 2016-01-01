'use strict';

angular.module('hhbApp')
    .filter('dateFilter', function () {
        return function (input, startDate, endDate) {
            if (typeof(input) === 'undefined' || typeof(startDate) === 'undefined' || typeof(endDate) === 'undefined') {
                return input;
            }

            var data = [];
            for (var i = input.length - 1; i >= 0; i--) {
                if (moment(input[i].date).isAfter(moment(startDate)) && moment(input[i].date).isBefore(moment(endDate))) {
                    data.push(input[i]);
                }
            }
            return data;
        }
});





