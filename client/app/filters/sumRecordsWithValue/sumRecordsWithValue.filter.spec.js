'use strict';

describe('Filter: sumRecordsWithValue', function () {

  // load the filter's module
  beforeEach(module('hhbApp'));

  // initialize a new instance of the filter before each test
  var sumRecordsWithValue;
  beforeEach(inject(function ($filter) {
    sumRecordsWithValue = $filter('sumRecordsWithValue');
  }));

  it('should return the input prefixed with "sumRecordsWithValue filter:"', function () {
    var text = 'angularjs';
    expect(sumRecordsWithValue(text)).toBe('sumRecordsWithValue filter: ' + text);
  });

});
