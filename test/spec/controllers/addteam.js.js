'use strict';

describe('Controller: AddteamJsCtrl', function () {

  // load the controller's module
  beforeEach(module('sample1App'));

  var AddteamJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddteamJsCtrl = $controller('AddteamJsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddteamJsCtrl.awesomeThings.length).toBe(3);
  });
});
