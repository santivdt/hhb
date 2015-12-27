'use strict';

angular.module('hhbApp')
  .directive('periodMenu', function () {
    return {
      templateUrl: 'components/formElements/periodMenu/periodMenu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
