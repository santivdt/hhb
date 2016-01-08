'use strict';

angular.module('hhbApp')
  .controller('DashCtrl', function ($scope, $http, $filter, categories, entries) {

      //bind the data that was loaded on resolve to $scope
      $scope.categories = categories.data;
      $scope.entries = entries.data;

      // calculate totals
      $scope.totalExpenseAmount = $filter('sumByKey')($scope.entries, 'amount');

      //calculate totals with flexible categories
      $scope.calculateTotals = function (){
          console.log('calculateTotals');
          $scope.totals = [];
          for (var i = 0; i < $scope.categories.length; i++) {
              var category = $scope.categories[i].title;
              console.log(category);
              var output = 'total' + (category);
              console.log(output);
              $scope[output] = $filter('sumByKeyAdvanced')($scope.entries, 'amount', 'category', category, 'flow', 'expense');
              console.log($scope[output]);
              $scope.totals.push($scope[output]);
              console.log($scope.totals);
              $scope.data = $scope.totals;
          }
      };

      //create array from all categories and array from totals
      $scope.createLabels = function () {
          console.log('create labels');
          console.log($scope.categories.length);
          $scope.labels = [];
          for (var i = 0; i < $scope.categories.length; i++) {
            $scope.labels.push($scope.categories[i].title);
            console.log($scope.labels);
          }
      //      $scope.data = [];
      //    for (var i = 0; i < $scope.categories.length; i++) {
      //        $scope.data.push($scope.totals[i]);
      //        console.log($scope.totals[i]);
      //    }
      //    console.log($scope.data)
      //
      };
  });
