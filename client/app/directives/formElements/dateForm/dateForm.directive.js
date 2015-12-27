'use strict';

angular.module('hhbApp')
  .directive('dateForm', function () {
    return {
      templateUrl: 'app/directives/formElements/dateForm/dateForm.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
