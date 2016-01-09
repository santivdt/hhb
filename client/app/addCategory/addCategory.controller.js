'use strict';

angular.module('hhbApp')
  .controller('AddCategoryCtrl', function ($scope, $http, $state, $filter, categories, entries, used, categoriesService) {

      //bind the data that was loaded on resolve to $scope
      $scope.categories = categories.data;
      $scope.entries = entries.data;

      // when submitting the category, send the input to the node API
    $scope.addCategory = function() {
        categoriesService.addCategory($scope.category)
            .success(function(data) {
              $scope.category = {};
              $scope.categories.push(data);
            })
            .error(function(categories) {
              console.log('Error: ' + categories);
            })
    };

      // delete a category
      $scope.deleteCategory = function(id) {
        categoriesService.deleteCategory(id)
          .success(function(data) {
              $scope.categories.pop(data);
              console.log(data);
              console.log('delete');
          })
          .error(function (data) {
              console.log('Error: ' + data);
          })
      };

      // delete all categories
      $scope.deleteAllCategories = function() {
           categoriesService.deleteAllCategories()
              .success(function(data) {
                  $scope.categories = [];
              })
              .error(function(data) {
                  console.log('Error: ' + data);
              });
      };



      // delete all entries in specific category
      $scope.deleteEntriesInCategory = function(categoryToDelete){
          console.log('function called, deleting entries in ' + categoryToDelete + ' and category');

          //get id of category to delete
          for (var j = 0; j<$scope.categories.length; j++){
              if ($scope.categories[j].title == categoryToDelete) {
                  var id = $scope.categories[j]._id;
                  console.log('the id of ' + categoryToDelete + ' is ' + id);
              }
          }


          if ($scope.categories.used != 0) {
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
          }

          //delete the category
          categoriesService.deleteCategory(id)
              .success(function(data) {
                  $scope.categories.pop(data);
                  console.log(categoryToDelete + ' is sucessfully deleted. Hopefully you really wanted this ;)');
              })
              .error(function(data) {
                  console.log('Error: ' + data);
              });
      }


      //function to assign all entries of a cat to a different cat
      $scope.assignCat = function(oldCategory, newCategory) {
          console.log('change category');
          for (var i = 0; i < $scope.entries.length; i++){
              console.log($scope.entries[i].category);
              console.log('oldcat' + oldCategory);
              console.log('newcat' + newCategory);
              if ($scope.entries[i].category === oldCategory){
                  $scope.entries[i].category = newCategory;
                  $scope.calculateTotals();
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
              categoriesService.deleteCategory(id)
              .success(function(data) {
                  $scope.categories.pop(data);
                  console.log(oldCategory + ' deleted succesfully');
              }).error(function(data) {
              console.log('Error: ' + data);
                });
          }



      }

  });

