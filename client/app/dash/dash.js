'use strict';

angular.module('hhbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash', {
        url: '/dash',
        templateUrl: 'app/dash/dash.html',
        controller: 'DashCtrl'
      });
  });
