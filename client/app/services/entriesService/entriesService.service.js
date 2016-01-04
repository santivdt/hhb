'use strict';

angular.module('hhbApp')
  .service('entriesService', ['$http', function ($http) {

    $scope.getEntries = function() {
      return $http.get('/api/entries');
    };
}]);