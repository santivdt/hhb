'use strict';

angular.module('hhbApp')
    .filter('dateFilter', function () {
        return function (input, startDate, endDate, keyToCompare, valueToCompare) {
            if (typeof(input) === 'undefined' || typeof(startDate) === 'undefined') {
                return 0;
            }
            console.log('Check if dates have been transferred into filter');
            console.log('Startdate: ' + startDate);
            console.log('Enddate: ' + endDate);

            //change dates to correct ISO format
            console.log('Transform dates');
            for (var i = input.length - 1; i >= 0; i--) {
                var d = input[i].date;
                console.log('Old date: ' + d);
                var n = new Date(Date.parse(d));
                input[i].date = n;
                console.log('New date: ' + input[i].date);
                }

            // create new array with objects that are between start and end date.
            var entriesData = [];
            for (i = input.length - 1; i >= 0; i--) {
                if(input[i].date >= startDate && input[i].date <= endDate && input[i][keyToCompare] == valueToCompare) {
                    console.log(input[i].description);
                    entriesData.push(input[i]);
                }
            }
        return entriesData;

        }
});





