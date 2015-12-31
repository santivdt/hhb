'use strict';

angular.module('hhbApp')
    .filter('dateFilter', function () {
        return function (input, startDate, endDate) {
            console.log('---> Check if dates have been transferred into filter');
            console.log('Startdate: ' + startDate);
            console.log('Enddate: ' + endDate);
            console.log('Input: ' + input);

            if (typeof(input) === 'undefined' || typeof(startDate) === 'undefined' || typeof(endDate) === 'undefined') {
                return input;
            }

            var data = [];
            angular.forEach(input, function (item) {
                if (moment(item.date).isAfter(startDate) && moment(item.date).isBefore(endDate)) {
                    data.push(item);
                }
            });
            return data;

        }
});





