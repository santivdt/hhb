'use strict';

describe('Filter: dateFilter', function () {

  // load the filter's module
  beforeEach(module('hhbApp'));

  // initialize a new instance of the filter before each test
  var dateFilter;
  beforeEach(inject(function ($filter) {
    dateFilter = $filter('dateFilter');
  }));

  it('should return the input prefixed with "dateFilter filter:"', function () {
    var text = 'angularjs';
    expect(dateFilter(text)).toBe('dateFilter filter: ' + text);
  });

});
