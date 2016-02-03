'use strict';

angular.module('hhbApp')
  .controller('EntriesCtrl', function ($scope, $http, $filter, entries, entriesService, $uibModal) {
    $scope.formData = {};
    // order of checks Date, Amount, Description, Category, Period
    $scope.checks = [true, true, true, true, false];
    console.log($scope.checks);
    $scope.dateCheck = $scope.checks[0];
    $scope.amountCheck = $scope.checks[1];
    $scope.descriptionCheck = $scope.checks[2];
    $scope.categoryCheck = $scope.checks[3];
    $scope.periodCheck = $scope.checks[4];
    $scope.formData.date = new Date();
    $scope.formData.period = 'Monthly';
    $scope.formData.category = 'Food';
    $scope.entries = entries.data;


    // delete an entry
    $scope.deleteEntry = function(id) {
      $http.delete('/api/entries/' + id)
        .success(function(data) {
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };


    // delete all entries
    $scope.deleteEntries = function () {
      $http.delete('/api/entries')
        .success(function (data) {
          $scope.entries = [];
          console.log('delete');
        })
        .error(function (data) {

          console.log('Error: ' + data);
        })
    };

    //search through search api
    $scope.searchApi = function (query) {
      console.log('search', query);
      entriesService.searchDescription(query)
        .success(function (data) {
          console.log(data);
          $scope.entries = data;
        })
        .error(function (data) {
          console.log('Error: ' + data);
        });
    };


    //Clear Search
    $scope.clearSearch = function() {
      return $scope.entries = entries.data;
    };

    //Edit an entry inline
    $scope.editEntry = function (entry) {
      $http.put('/api/entries/' + entry._id, entry)
        .success(function (data) {
          console.log('edit');
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    //uibModal open

    $scope.open = function () {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/app/entries/editColumns.html',
        controller: 'editColumnsCtrl',
        resolve: {
          checks: function () {
            return $scope.checks;
          }
        }
      });

      modalInstance.result.then(function (checks) {
        $scope.checks = checks;
        console.log(checks, '<----checks from modal from entries controller');
        $scope.dateCheck = $scope.checks[0];
        $scope.amountCheck = $scope.checks[1];
        $scope.descriptionCheck = $scope.checks[2];
        $scope.categoryCheck = $scope.checks[3];
        $scope.periodCheck = $scope.checks[4];
      });
    };

    //create header for export to csv
    $scope.getHeader = function () {
      console.log('getheader');
      return ["id", "Description", "Category", "Amount", "Period", "V", "Date"]
    };


    //to add en antry from the modal
    $scope.addEntry = function () {
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

