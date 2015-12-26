'use strict';

describe('Controller: EntriesCtrl', function () {

  // load the controller's module
  beforeEach(module('hhbApp'));

  var EntriesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntriesCtrl = $controller('EntriesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
