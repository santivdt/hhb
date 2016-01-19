'use strict';

angular.module('hhbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addCategory', {
        url: '/addCategory',
        resolve: {
            entries:  function($http){
                return $http.get('/api/entries');
            },
            categories: function($http) {
                return $http.get('/api/categories');
            },
            used: function(categoriesService, categories, entries) {
                return categoriesService.calculateTotals(categories.data, entries.data);
            }
          },
        templateUrl: 'app/addCategory/addCategory.html',
        controller: 'AddCategoryCtrl'
      });
  });
