'use strict';

angular.module('hhbApp.add')
  .config(function($stateProvider) {
    $stateProvider
      .state('add', {
        url: '/add',
        templateUrl: 'app/add/add.html',
        controller: 'AddController',
        controllerAs: 'add',
        authenticate: true
      });
  });
