'use strict';

angular.module('hhbApp')
  .controller('EntriesCtrl', function ($scope, $http, $filter, entries) {
    $scope.formData = {};
    $scope.dateCheck = true;
    $scope.amountCheck = true;
    $scope.descriptionCheck = true;
    $scope.categoryCheck = true;
    $scope.flowCheck = true;
    $scope.incomeCheck = true;
    $scope.expenseCheck = true;
    $scope.formData.flow = 'expense';
    $scope.formData.date = new Date();
    $scope.formData.period = 'Monthly';
    $scope.formData.category = 'Food';
    $scope.isCollapsed = false;
    $scope.entries = entries.data;


    // delete an entry
    $scope.deleteEntry = function(id) {
      $http.delete('/api/entries/' + id)
        .success(function(data) {
         // var deleted = $scope.entries.splice(id, 1);
          $scope.entries =$scope.entries.filter(function( obj ) {
            return obj._id !== id;
          });
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };


    // delete all entries
    $scope.deleteEntries = function() {
      $http.delete('/api/entries')
        .success(function (data) {
          $scope.entries = [];
          console.log('delete');
        })
        .error(function (data) {

          console.log('Error: ' + data);
        })
    };

    //Edit an entry inline
    $scope.editEntry = function(entry) {
      $http.put('/api/entries/' + entry._id, entry)
        .success(function(data) {
            console.log('edit');
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };


     //to add en antry from the modal
    $scope.addEntry = function() {
        console.log('click');
        $http.post('/api/entries', $scope.formData)
            .success(function (data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.entries = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });

        console.log('close');
        close();
    };

    $scope.flow = function () {
        if ($scope.expenseCheck === true && $scope.incomeCheck === true) {
              console.log('both are true');
              $scope.entries = entries.data;
        }
        else if ($scope.incomeCheck === true) {
              console.log('incomecheck is true');
              $scope.entries = entries.data;
              $scope.entries =  $filter('keyValueFilter')($scope.entries, 'flow', 'income');
              console.log('function returns');
              console.log($scope.entries);
        }
        else if ($scope.expenseCheck === true) {
              console.log('expensecheck is true');
              $scope.entries = entries.data;
              $scope.entries =  $filter('keyValueFilter')($scope.entries, 'flow', 'expense');
              console.log('function returns');
              console.log($scope.entries);
        }
        else {
              console.log('both are false');
              $scope.entries = [];
        }
    }
});

