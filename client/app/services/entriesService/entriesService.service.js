'use strict';

angular.module('hhbApp')
  .service('entriesService', ['$http', function ($http) {

    return {
      getEntries: getEntries,
      searchCategory: searchCategory,
    };

    function getEntries() {
      return $http.get('/api/entries')
        ;
    }
    function searchCategory(query) {
     return $http.get('/api/entries/searchCategory/' + query )
    }
}]);
