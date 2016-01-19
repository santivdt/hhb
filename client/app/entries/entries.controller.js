'use strict';

angular.module('hhbApp')
  .controller('EntriesCtrl', function ($scope, $http, $filter, entries, entriesService, $uibModal) {
    $scope.formData = {};
    //$scope.checks = [
    //  {$scope.dateCheck = true},
    //  {$scope.amountCheck = true},
    //  {$scope.descriptionCheck = true},
    //  {$scope.categoryCheck = true},
    //  {$scope.periodCheck = false}
    //];
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
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (checks) {
        $scope.dateCheck = checks[0];
        $scope.amountCheck = checks[1];
        $scope.descriptionCheck = checks[2];
        $scope.categoryCheck = checks[3];
        $scope.periodCheck = checks[4];
      });
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

