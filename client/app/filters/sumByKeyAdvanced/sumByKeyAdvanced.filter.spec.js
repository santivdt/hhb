'use strict';

describe('Filter: sumByKeyAdvanced', function () {

  // load the filter's module
  beforeEach(module('hhbApp'));

  // initialize a new instance of the filter before each test
  var sumByKeyAdvanced;
  beforeEach(inject(function ($filter) {
    sumByKeyAdvanced = $filter('sumByKeyAdvanced');
  }));

  it('should return the input prefixed with "sumByKeyAdvanced filter:"', function () {
    var text = 'angularjs';
    expect(sumByKeyAdvanced(text)).toBe('sumByKeyAdvanced filter: ' + text);
  });

});
