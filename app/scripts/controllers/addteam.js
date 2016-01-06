'use strict';

/**
 * @ngdoc function
 * @name sample1App.controller:AddteamCtrl
 * @description
 * # AddteamCtrl
 * Controller of the sample1App
 */
angular.module('sample1App')
  .controller('AddTeamCtrl', function ($scope, $firebaseArray) {

  var ref = new Firebase("https://burning-inferno-1731.firebaseio.com/messages");

  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };



  });
