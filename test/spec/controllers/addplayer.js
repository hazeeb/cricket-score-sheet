'use strict';

describe('Controller: AddplayerCtrl', function () {

  // load the controller's module
  beforeEach(module('sample1App'));

  var AddplayerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddplayerCtrl = $controller('AddplayerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddplayerCtrl.awesomeThings.length).toBe(3);
  });
});
