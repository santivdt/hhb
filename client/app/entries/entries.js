'use strict';

angular.module('hhbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('entries', {
        url: '/entries',
        templateUrl: 'app/entries/entries.html',
        controller: 'EntriesCtrl'
      });
  });
