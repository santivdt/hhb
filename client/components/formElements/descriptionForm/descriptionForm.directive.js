'use strict';

angular.module('hhbApp')
  .directive('descriptionForm', function () {
    return {
      templateUrl: 'components/formElements/descriptionForm/descriptionForm.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
