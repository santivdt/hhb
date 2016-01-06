'use strict';

angular.module('hhbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('entries', {
        url: '/entries',
        resolve: {
                    entries:  function($http){
                      return $http.get('/api/entries');
                    }
        },
        templateUrl: 'app/entries/entries.html',
        controller: 'EntriesCtrl'
      });
  });
