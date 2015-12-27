'use strict';

angular.module('hhbApp')
  .directive('addEntryModal', function () {
    return {
      templateUrl: 'app/directives/modals/addEntryModal/addEntryModal.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
