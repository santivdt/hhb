'use strict';

angular.module('hhbApp')
  .service('entriesService', ['$http', function ($http) {

    return {
      getEntries: getEntries,
      searchCategory: searchCategory,
      searchDescription: searchDescription
    };

    function getEntries() {
      return $http.get('/api/entries')
        ;
    }
    function searchCategory(query) {
     return $http.get('/api/entries/searchCategory/' + query )
    }

    function searchDescription(query) {
      return $http.get('/api/entries/search/' + query)
    }
}]);
