'use strict';

describe('Directive: descriptionForm', function () {

  // load the directive's module and view
  beforeEach(module('hhbApp'));
  beforeEach(module('components/formElements/descriptionForm/descriptionForm.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<description-form></description-form>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the descriptionForm directive');
  }));
});
