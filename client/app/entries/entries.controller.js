'use strict';

angular.module('hhbApp')
  .controller('EntriesCtrl', function ($scope, $http, $filter, entries) {
    $scope.formData = {};
    $scope.dateCheck = true;
    $scope.amountCheck = true;
    $scope.descriptionCheck = true;
    $scope.categoryCheck = true;
    $scope.formData.date = new Date();
    $scope.formData.period = 'Monthly';
    $scope.formData.category = 'Food';
    $scope.isCollapsed = false;
    $scope.entries = entries.data;


    // delete an entry
    $scope.deleteEntry = function(id) {
      $http.delete('/api/entries/' + id)
        .success(function(data) {
          $scope.entries.pop(data);
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

});

