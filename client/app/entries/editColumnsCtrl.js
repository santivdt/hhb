angular.module('hhbApp').controller('editColumnsCtrl', function ($scope, $uibModalInstance) {
  $scope.dateCheck = true;
  $scope.amountCheck = true;
  $scope.descriptionCheck = true;
  $scope.categoryCheck = false;
  $scope.periodCheck = false;


  $scope.ok = function () {
    $uibModalInstance.close(
      //$scope.checks=[$scope.dateCheck, $scope.amountCheck, $scope.descriptionCheck, $scope.categoryCheck, $scope.periodCheck]
    );
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
