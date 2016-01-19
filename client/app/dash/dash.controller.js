'use strict';

angular.module('hhbApp')
  .controller('DashCtrl', function ($scope, $http, $filter, categories, entries) {

      //bind the data that was loaded on resolve to $scope
      $scope.categories = categories.data;
      $scope.entries = entries.data;

      // calculate totals
      $scope.totalExpenseAmount = $filter('sumByKey')($scope.entries, 'amount');

      //get some dates
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      $scope.currentMonth = months[moment().month()];

      //progressbara Data
      $scope.salary = 2500;

      //calculate totals with flexible categories
      $scope.calculateTotals = function (){
          console.log('calculateTotals');
          for (var i = 0; i < $scope.categories.length; i++) {
              var category = $scope.categories[i].title;
              $scope.categories[i].total = $filter('sumByKeyAdvanced')($scope.entries, 'amount', 'category', category);
              console.log($scope.categories[i].total);
          }

          //create array from all categories and all totals
          console.log('create labels and totals');
          console.log($scope.categories.length);
          $scope.labels = [];
          $scope.data = [];
          for (var i = 0; i < $scope.categories.length; i++) {
              $scope.labels.push($scope.categories[i].title);
              $scope.data.push($scope.categories[i].total);
              console.log($scope.labels);
          }

          $scope.totals = [];
          for (var i = 0; i < $scope.categories.length; i++) {
              $scope.totals.push($scope.categories[i].total);
              console.log($scope.totals);
          }
      };
      $scope.vasteLasten = 566;


        //Edit an entry inline
        $scope.searchEntry = function(query) {
            $http.get('/api/entries/search/' + query)
                .success(function(data) {
                    console.log('search');
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };
  });
