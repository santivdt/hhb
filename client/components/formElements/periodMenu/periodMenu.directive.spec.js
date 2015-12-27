'use strict';

describe('Directive: periodMenu', function () {

  // load the directive's module and view
  beforeEach(module('hhbApp'));
  beforeEach(module('components/formElements/periodMenu/periodMenu.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<period-menu></period-menu>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the periodMenu directive');
  }));
});
