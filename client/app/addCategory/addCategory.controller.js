'use strict';

angular.module('hhbApp')
  .controller('AddCategoryCtrl', function ($scope, $http, $state) {

      // when landing on the page, get all entries and show them
    $http.get('/api/categories')
          .success(function(data) {
              $scope.categories = data;
              console.log(data);
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });


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

      // delete an category
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


      //$scope.tags = [
    //  { text: 'just' },
    //  { text: 'some' },
    //  { text: 'cool' },
    //  { text: 'tags' }
    //];
    //$scope.loadTags = function(query) {
    //  return $http.get('/tags?query=' + query);
    //};


  });
