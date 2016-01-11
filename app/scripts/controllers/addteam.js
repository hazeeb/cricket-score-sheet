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

  var ref = new Firebase("https://burning-inferno-1731.firebaseio.com/teams");


  $scope.teams = $firebaseArray(ref);

  $scope.addTeams = function() {
    $scope.teams.$add({
      name: $scope.teamName,
      group : $scope.groupnumber
    });

  };


  });
