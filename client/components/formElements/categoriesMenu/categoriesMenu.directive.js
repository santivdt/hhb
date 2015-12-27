'use strict';

angular.module('hhbApp')
  .directive('categoriesMenu', function () {
    return {
      templateUrl: 'components/formElements/categoriesMenu/categoriesMenu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
