'use strict';

/**
 * @ngdoc function
 * @name sample1App.controller:ViewplayersCtrl
 * @description
 * # ViewplayersCtrl
 * Controller of the sample1App
 */
angular.module('sample1App')
  .controller('ViewPlayersCtrl', function ($scope, $routeParams, firebaseService ) {

  	var team_id = $routeParams.team_id ;

  	$scope.teamdetails = firebaseService.getTeamDetails(team_id);


  });
