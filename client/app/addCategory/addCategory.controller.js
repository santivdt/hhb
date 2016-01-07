'use strict';

angular.module('hhbApp')
  .controller('AddCategoryCtrl', function ($scope, $http, $state, $filter, categories, entries) {

      //bind the data that was loaded on resolve to $scope
      $scope.categories = categories.data;
      $scope.entries = entries.data;

      //modal data
      $scope.items = ['item1', 'item2', 'item3'];
      $scope.animationsEnabled = true;


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

      // delete all entries in specific category
      $scope.deleteEntriesByCategory = function(categoryToDelete){
          console.log('function called, deleting entries in ' + categoryToDelete + ' and category');

          //get id of category to delete
          for (var j = 0; j<$scope.categories.length; j++){
              if ($scope.categories[j].title == categoryToDelete) {
                  var id = $scope.categories[j]._id;
              }
          }

          //delete all the entries in the category
          for (var i = 0; i<$scope.entries.length; i++){
                  if ($scope.entries[i].category == categoryToDelete){
                      $http.delete('/api/entries/' + $scope.entries[i]._id)
                          .success(function(data) {
                              console.log(' All entries deleted from ' + categoryToDelete + ' succesfully');
                          }).error(function(data) {
                              console.log('Error: ' + data);
                          });
                  }
          }

          //delete the category
          $http.delete('/api/categories/' + id)
              .success(function(data) {
                  console.log(categoryToDelete + ' is sucessfully deleted. Hopefully you really wanted this ;)');
              })
              .error(function(data) {
                  console.log('Error: ' + data);
              });
      }


      //function to assign all entries of a cat to a different cat
      $scope.assignCat = function(oldCategory, newCategory) {
          for (var i = 0; i < $scope.entries.length; i++){
              if ($scope.entries[i].category === oldCategory){
                  $scope.entries[i].category = newCategory;
              }
          }

          // if category has to be deleted get id
          if ($scope.deleteOldCat) {
              for (var i = 0; i < $scope.categories.length; i++){
                  if($scope.categories[i].title === oldCategory){
                      var id = $scope.categories[i]._id;
                      console.log(id);
                  }
              }

          //delete old category
          $http.delete('/api/entries/' + id)
              .success(function(data) {
                  console.log(oldCategory + ' deleted succesfully');
              }).error(function(data) {
              console.log('Error: ' + data);
                });
          }



      }

  });

