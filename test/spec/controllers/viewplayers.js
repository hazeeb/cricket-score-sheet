'use strict';

describe('Controller: ViewplayersCtrl', function () {

  // load the controller's module
  beforeEach(module('sample1App'));

  var ViewplayersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewplayersCtrl = $controller('ViewplayersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewplayersCtrl.awesomeThings.length).toBe(3);
  });
});
