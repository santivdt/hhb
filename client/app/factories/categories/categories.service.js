'use strict';

angular.module('hhbApp')
    .factory('categoriesService', function ($http, $filter) {

        return {
            getCategories: getCategories,
            addCategory: addCategory,
            deleteCategory: deleteCategory,
            calculateTotals: calculateTotals,
            deleteAllCategories: deleteAllCategories
        };

        function getCategories() {
            return $http.get('/api/categories')
                ;
        };

        function addCategory(category) {
            return $http.post('/api/categories', category)
                .success(function() {
                    console.log('Category added succsefully');
                })
                .error(function(categories) {
                    console.log('Error: ' + categories);
                })
        };

        function deleteCategory(id) {
            return $http.delete('/api/categories/' + id);
        };

        function calculateTotals(categories, entries){
            var i;
            for (i = 0; i < categories.length; i++) {
                categories[i].used =  $filter('sumRecordsWithValue')(entries, 'category', categories[i].title);
            }
            return categories;
        };

        function deleteAllCategories () {
            return $http.delete('/api/categories');
        };

    });
