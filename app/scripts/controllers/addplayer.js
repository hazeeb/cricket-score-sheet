'use strict';

/**
 * @ngdoc function
 * @name sample1App.controller:AddplayerCtrl
 * @description
 * # AddplayerCtrl
 * Controller of the sample1App
 */
angular.module('sample1App')
  .controller('AddplayerCtrl', function ($scope, $routeParams, firebaseService) {

  	var team_id = $routeParams.team_id ;

    //get team name 
    $scope.teamName =  firebaseService.getTeamDetails(team_id);

  	$scope.addPlayer = function(){

  		firebaseService.addPlayer(team_id, {
  			name : $scope.playername,
  			age : $scope.playerage,
  			type: $scope.playertype 
  		});
  	};
  });
