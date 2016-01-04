'use strict';

describe('Service: entriesService', function () {

  // load the service's module
  beforeEach(module('hhbApp'));

  // instantiate service
  var entriesService;
  beforeEach(inject(function (_entriesService_) {
    entriesService = _entriesService_;
  }));

  it('should do something', function () {
    expect(!!entriesService).toBe(true);
  });

});
