'use strict';

describe('Directive: addEntryModal', function () {

  // load the directive's module and view
  beforeEach(module('hhbApp'));
  beforeEach(module('app/directives/modals/addEntryModal/addEntryModal.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<add-entry-modal></add-entry-modal>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the addEntryModal directive');
  }));
});
