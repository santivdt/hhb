'use strict';

angular.module('hhbApp')
  .controller('DashCtrl', function ($scope, $http, $filter) {

    // when landing on the page, get all entries and show them, then execute calculation methods
    $http.get('/api/entries')
      .success(function(data) {
        $scope.entries = data;
        $scope.totalExpenseAmount =  $filter('sumByKey')(data,'amount','expense');
        $scope.totalIncomeAmount =  $filter('sumByKey')(data,'amount','income');
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });



    // get total amount of expenses
    // TODO make it so that it only calculates for expense not income, also counts income meh
    $scope.totalExpense = function(){
      var total = 0;
      for (var j = 0; j < $scope.entries.length; j++) {
        if ($scope.entries[j].flow === 'income') {
          for (var i = 0; i < $scope.entries.length; i++) {
            total += $scope.entries[i].amount;
          }
          $scope.total = total;
        }
      }

      for ( j = 0; j < $scope.entries.length; j++) {
        if ($scope.entries[j].flow === 'expense') {
          console.log('ja');
        }
      }
    };

  });
