'use strict';

angular.module('hhbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addCategory', {
        url: '/addCategory',
        templateUrl: 'app/addCategory/addCategory.html',
        controller: 'AddCategoryCtrl'
      });
  });
