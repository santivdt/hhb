'use strict';

angular.module('hhbApp')
    .controller('AddCtrl', function ($scope, $http, $state, categories) {
        $scope.formData = {};
        $scope.formData.date = new Date();
        $scope.formData.period = 'Monthly';
        $scope.formData.category = 'Food';
        $scope.categories = categories.data;

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
                });

            if (addAnother === 0){
                $state.go('entries');
                $scope.formData = {};
                $scope.formData.date = new Date();
                $scope.formData.period = 'Monthly';
                $scope.formData.category = 'Food';
                console.log('state changed')
            }
        };
    });

