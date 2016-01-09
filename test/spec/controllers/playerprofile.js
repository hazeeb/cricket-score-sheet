'use strict';

describe('Controller: PlayerprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('sample1App'));

  var PlayerprofileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerprofileCtrl = $controller('PlayerprofileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlayerprofileCtrl.awesomeThings.length).toBe(3);
  });
});
