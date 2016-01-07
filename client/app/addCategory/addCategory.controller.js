'use strict';

angular.module('hhbApp')
  .controller('AddCategoryCtrl', function ($scope, $http, $state, $filter, categories, entries) {

      //bind the data that was loaded on resolve to $scope
      $scope.categories = categories.data;
      $scope.entries = entries.data;

      // when submitting the category, send the input to the node API
    $scope.addCategory = function() {
      console.log('addCat');
      $http.post('/api/categories', $scope.category)
        .success(function(data) {
          $scope.category = {}; // clear the form so our user is ready to enter another
          $scope.categories = data;
          console.log(data);
        })
        .error(function(categories) {
          console.log('Error: ' + categories);
        })
    };

      // delete all categories
      $scope.deleteCategories = function() {
          $http.delete('/api/categories')
              .success(function(data) {
                  $scope.categories = [];
                  console.log('delete');
              })
              .error(function (data) {
                  console.log('Error: ' + data);
              })
      };

      // delete a category
      $scope.deleteCategory = function(id) {
          $http.delete('/api/categories/' + id)
              .success(function(data) {
                  $scope.categories =$scope.categories.filter(function( obj ) {
                      return obj._id !== id;
                  });
                  console.log(data);
              })
              .error(function(data) {
                  console.log('Error: ' + data);
              });
      };

      // calculate total uses of each category and add them to category array
      $scope.calculateTotals = function () {
          $scope.totals = [];
          for (var i = 0; i < $scope.categories.length; i++) {
              var category = $scope.categories[i].title;
              var name = 'total' + (category);
              $scope[name] = $filter('sumRecordsWithValue')($scope.entries, 'category', category);
              $scope.categories[i].used = $scope[name];
          }

      };
  });
