'use strict';

describe('Directive: categoriesMenu', function () {

  // load the directive's module and view
  beforeEach(module('hhbApp'));
  beforeEach(module('components/formElements/categoriesMenu/categoriesMenu.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<categories-menu></categories-menu>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the categoriesMenu directive');
  }));
});
