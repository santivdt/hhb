'use strict';

angular.module('hhbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addCategory', {
        url: '/addCategory',
        resolve: {
              categories:  function($http){
                  return $http.get('/api/categories');
              },
              entries:  function($http){
                  return $http.get('/api/entries');
              }
          },
        templateUrl: 'app/addCategory/addCategory.html',
        controller: 'AddCategoryCtrl'
      });
  });
