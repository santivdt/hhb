'use strict';

angular.module('hhbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash', {
        url: '/dash',
        resolve: {
              categories:  function($http){
                  return $http.get('/api/categories');
              },
                entries:  function($http){
                return $http.get('/api/entries');
            }
          },
        templateUrl: 'app/dash/dash.html',
        controller: 'DashCtrl'
      });
  });
