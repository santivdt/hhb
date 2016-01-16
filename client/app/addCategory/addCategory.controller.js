'use strict';

angular.module('hhbApp')
    .controller('AddCategoryCtrl', function ($scope,
                                             $http,
                                             $state,
                                             $filter,
                                             categories,
                                             entries,
                                             used,
                                             categoriesService,
                                             $uibModal,
                                             $log) {

        //bind the data that was loaded on resolve to $scope
        $scope.categories = categories.data;
        $scope.entries = entries.data;

        // when submitting the category, send the input to the node API
        $scope.addCategory = function () {
            categoriesService.addCategory($scope.category)
                .success(function (data) {
                    $scope.category = {};
                    $scope.categories.push(data);
                })
                .error(function (categories) {
                    console.log('Error: ' + categories);
                })
        };

        // delete a category
        $scope.deleteCategory = function (id) {
            categoriesService.deleteCategory(id)
                .success(function (data) {
                    $scope.categories.pop(data);
                    console.log(data);
                    console.log('delete');
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                })
        };

        // delete all categories
        $scope.deleteAllCategories = function () {
            categoriesService.deleteAllCategories()
                .success(function (data) {
                    $scope.categories = [];
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };

        //UIBMODAL
        $scope.animationsEnabled = true;
        $scope.open = function (category) {

            var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: '/app/addCategory/categoryEditModal.html',
              controller: 'deleteCategoryCtrl',
              resolve: {
                entries: function ($http) {
                  return $http.get('/api/entries');
                },
                  categories: function ($http) {
                      return $http.get('/api/categories');
                  },
                  category: function() {
                    return category;
                  }
              }
            });
            //
            //modalInstance.result.then(function (selectedItem) {
            //    console.log(selectedItem);
            //    $scope.selected = selectedItem;
            //}, function () {
            //    $log.info('Modal dismissed at: ' + new Date());
            //});
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

    });
