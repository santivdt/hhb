'use strict';

angular.module('hhbApp')
  .controller('DashCtrl', function ($scope, $http, $filter) {

      // when landing on the page, get all entries and show them, then execute calculation methods
      // TODO make that it loads entries when state is changed @Daphne
      $http.get('/api/entries')
          .success(function (data) {
              $scope.entries = data;
              $scope.totalExpenseAmount = $filter('sumByKey')(data, 'amount', 'flow', 'expense');
              $scope.totalIncomeAmount = $filter('sumByKey')(data, 'amount', 'flow', 'income');
              $scope.totalFood = $filter('sumByKeyAdvanced')(data, 'amount', 'category', 'Food', 'flow', 'expense');
              $scope.totalParty = $filter('sumByKeyAdvanced')(data, 'amount', 'category', 'Party', 'flow', 'expense');
              $scope.totalTravel = $filter('sumByKeyAdvanced')(data, 'amount', 'category', 'Travel', 'flow', 'expense');
              $scope.data = [$scope.totalFood, $scope.totalParty, $scope.totalTravel];
              console.log(data);
          })
          .error(function (data) {
              console.log('Error: ' + data);
          });

      //get totals of each categories


      // Pie chart
      $scope.labels = ["Food", " Party", "Travel"];
      //$scope.data = [10, 30, 150];



  })
