'use strict';

describe('Controller: AddteamCtrl', function () {

  // load the controller's module
  beforeEach(module('sample1App'));

  var AddteamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddteamCtrl = $controller('AddteamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddteamCtrl.awesomeThings.length).toBe(3);
  });
});
