'use strict';

angular.module('hhbApp')
    .controller('AddCtrl', function ($scope, $http, $state) {
        $scope.formData = {};
        $scope.formData.flow = 'expense';
        $scope.formData.date = new Date();
        $scope.formData.period = 'Monthly';
        $scope.formData.category = 'Food';
        $scope.isCollapsed = false;



        // when submitting the add form, send the input to the node API
        $scope.addEntry = function(addAnother) {
            console.log('click');
            $http.post('/api/entries', $scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.entries = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                })

            if (addAnother === 0){
                $state.go('entries');
                console.log('state changed')
            }
        };

        // when submitting the a category, send the input to the node API
        $scope.addCategory = function() {
            console.log('addCat');
            $http.post('/api/categories', $scope.newCategory)
                .success(function(data) {
                    $scope.newCategory = {}; // clear the form so our user is ready to enter another
                    $scope.categories = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                })
        };

    });

