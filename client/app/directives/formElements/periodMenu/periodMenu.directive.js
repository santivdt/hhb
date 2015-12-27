'use strict';

angular.module('hhbApp')
  .directive('periodMenu', function () {
    return {
      templateUrl: 'app/directives/formElements/periodMenu/periodMenu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
