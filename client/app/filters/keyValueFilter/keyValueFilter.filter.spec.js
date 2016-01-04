'use strict';

describe('Filter: keyValueFilter', function () {

  // load the filter's module
  beforeEach(module('hhbApp'));

  // initialize a new instance of the filter before each test
  var keyValueFilter;
  beforeEach(inject(function ($filter) {
    keyValueFilter = $filter('keyValueFilter');
  }));

  it('should return the input prefixed with "keyValueFilter filter:"', function () {
    var text = 'angularjs';
    expect(keyValueFilter(text)).toBe('keyValueFilter filter: ' + text);
  });

});
