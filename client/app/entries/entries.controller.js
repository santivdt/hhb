'use strict';

angular.module('hhbApp')
  .controller('EntriesCtrl', function ($scope, $http, $filter) {
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





    // when landing on the page, get all entries and show them
    $http.get('/api/entries')
      .success(function(data) {
        $scope.entries = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });


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
          console.log('delete')
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

    //filterDate
    //$scope.filterDate = function (startDate, endDate) {
    //    console.log('---> filter Data function has been called');
    //    $scope.entries = $filter('dateFilter')($scope.entries, startDate, endDate);
    //    console.log('---> what does the filter return:' + $scope.entries);
    //}


  //changeDate of all entries
  //   $scope.changeDate = function() {
  //       for (var i = $scope.entries.length - 1; i >= 0; i--) {
  //           var d = $scope.entries[i].date;
  //           var n = new Date(Date.parse(d));
  //           console.log(n);
  //          // i have all the correctly formatted dates just need to insert them into the entries array splice? indexOf?
  //           $scope.entries[i].date = n;
  //           console.log($scope.entries);
  //           }
  //       }


     });

