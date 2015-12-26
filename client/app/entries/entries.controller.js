'use strict';

angular.module('hhbApp')
  .controller('EntriesCtrl', function ($scope, $http) {
    $scope.formData = {};

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
          $scope.entries.splice(id, 1);
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
    }

    //Edit an entry inline
    $scope.editEntry = function(id) {
      $http.put('/api/entries/' + id)
        .success(function(data) {
          console.log('edit');
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };


  });

