'use strict';

angular.module('hhbApp')
  .directive('descriptionForm', function () {
    return {
      templateUrl: 'app/directives/formElements/descriptionForm/descriptionForm.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
