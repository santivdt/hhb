'use strict';

angular.module('hhbApp')
  .controller('AddCtrl', function ($scope, $http) {
    $scope.formData = {};


    // when landing on the page, get all entries and show them
    $http.get('/api/todos')
      .success(function(data) {
        $scope.entries = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    // when submitting the add form, send the input to the node API
    $scope.addEntry = function() {
      $http.post('/api/todos', $scope.formData)
        .success(function(data) {
          $scope.formData = {}; // clear the form so our user is ready to enter another
          $scope.entries = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };
  });

