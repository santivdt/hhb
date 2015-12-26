'use strict';

angular.module('hhbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('add', {
        url: '/add',
        templateUrl: 'app/add/add.html',
        controller: 'AddCtrl'
      });
  });
