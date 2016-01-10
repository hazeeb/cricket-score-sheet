'use strict';

describe('Controller: NewmatchCtrl', function () {

  // load the controller's module
  beforeEach(module('sample1App'));

  var NewmatchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewmatchCtrl = $controller('NewmatchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewmatchCtrl.awesomeThings.length).toBe(3);
  });
});
