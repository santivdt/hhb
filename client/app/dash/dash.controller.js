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
              var output = 'total' + (category);
              $scope[output] = $filter('sumByKeyAdvanced')($scope.entries, 'amount', 'category', category);
              $scope.categories[i].total = $scope[output];
          }

          //create array from all categories and all totals
          console.log('create labels');
          console.log($scope.categories.length);
          $scope.labels = [];
          for (var i = 0; i < $scope.categories.length; i++) {
              $scope.labels.push($scope.categories[i].title);
              console.log($scope.labels);
          }

          $scope.totals = [];
          for (var i = 0; i < $scope.categories.length; i++) {
              $scope.totals.push($scope.categories[i].total);
              console.log($scope.totals);
          }
      };

      $scope.vasteLasten = 566;
  });
