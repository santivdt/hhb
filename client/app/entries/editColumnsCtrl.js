angular.module('hhbApp').controller('editColumnsCtrl', function ($scope, $uibModalInstance, checks) {
  $scope.checks = checks;
  console.log($scope.checks, 'scopechecks jaaa');
  $scope.dateCheck = $scope.checks[0];
  $scope.amountCheck = $scope.checks[1];
  $scope.descriptionCheck = $scope.checks[2];
  $scope.categoryCheck = $scope.checks[3];
  $scope.periodCheck = $scope.checks[4];


  $scope.ok = function () {
    var checks=[$scope.dateCheck, $scope.amountCheck, $scope.descriptionCheck, $scope.categoryCheck, $scope.periodCheck];
    console.log(checks, '<-----shit from the ok function when closing the modal');
    $uibModalInstance.close(checks);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
