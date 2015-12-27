'use strict';

angular.module('hhbApp')
  .controller('EntriesCtrl', function ($scope, $http) {
    $scope.formData = {};
    $scope.dateCheck = true;
    $scope.amountCheck = true;
    $scope.descriptionCheck = true;
    $scope.categoryCheck = true;




      $scope.desc = 'hoi';
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






  });

