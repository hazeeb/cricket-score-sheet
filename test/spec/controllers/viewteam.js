'use strict';

describe('Controller: ViewteamctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('sample1App'));

  var ViewteamctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewteamctrlCtrl = $controller('ViewteamctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewteamctrlCtrl.awesomeThings.length).toBe(3);
  });
});
