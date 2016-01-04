'use strict';

angular.module('hhbApp', [
  'hhbApp.auth',
  'hhbApp.admin',
  'hhbApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'nvd3ChartDirectives',
  'chart.js',
  'jsTag',
  'siyfion.sfTypeahead',
  'ngTagsInput'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
