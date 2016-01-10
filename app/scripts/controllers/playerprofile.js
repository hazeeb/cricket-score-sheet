'use strict';

/**
 * @ngdoc function
 * @name sample1App.controller:PlayerprofileCtrl
 * @description
 * # PlayerprofileCtrl
 * Controller of the sample1App
 */
angular.module('sample1App')
  .controller('PlayerprofileCtrl', function ($scope, $routeParams, firebaseService) {
	
  	var playerid = $routeParams.player_id ;
  	var teamid = $routeParams.team_id;
  	$scope.teamid = $routeParams.team_id;

  	$scope.playerdetails = firebaseService.getPlayerDetails(teamid, playerid);

  	console.log($scope.playerdetails);

  });
 