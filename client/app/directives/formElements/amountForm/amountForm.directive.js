'use strict';

angular.module('hhbApp')
  .directive('amountForm', function () {
    return {
      templateUrl: 'app/directives/formElements/amountForm/amountForm.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
