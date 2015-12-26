'use strict';

angular.module('hhbApp.auth', [
  'hhbApp.constants',
  'hhbApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
