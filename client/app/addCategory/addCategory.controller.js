'use strict';

angular.module('hhbApp')
  .controller('AddCategoryCtrl', function ($scope, $http, $state) {

    // when submitting the a category, send the input to the node API
    $scope.addCategory = function() {
      console.log('addCat');
      $http.post('/api/categories', $scope.newCategory)
        .success(function(categories) {
          $scope.newCategory = {}; // clear the form so our user is ready to enter another
          $scope.categories = categories;
          console.log(categories);
        })
        .error(function(categories) {
          console.log('Error: ' + categories);
        })
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
