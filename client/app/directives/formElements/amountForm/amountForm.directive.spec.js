'use strict';

describe('Directive: amountForm', function () {

  // load the directive's module and view
  beforeEach(module('hhbApp'));
  beforeEach(module('app/directives/formElements/amountForm/amountForm.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<amount-form></amount-form>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the amountForm directive');
  }));
});
