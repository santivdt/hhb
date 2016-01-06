'use strict';

describe('Controller: AddCategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('hhbApp'));

  var AddCategoryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddCategoryCtrl = $controller('AddCategoryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
