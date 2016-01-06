'use strict';

angular.module('hhbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addEntry', {
        url: '/addEntry',
        resolve: {
                  categories:  function($http){
                                    return $http.get('/api/categories');
                                }
          },
        templateUrl: 'app/add/add.html',
        controller: 'AddCtrl'
      });
  });
