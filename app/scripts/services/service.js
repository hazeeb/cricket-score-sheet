/*global angular */

angular.module('sample1App')
	.service('firebaseService', function ($firebaseArray, $firebaseObject) {
		'use strict';

		var service = {
			baseUrl : 'https://burning-inferno-1731.firebaseio.com/'
		};

		service.getTeams = function(){
			var ref = new Firebase(service.baseUrl + "teams");
			return $firebaseArray(ref);
		};

		// service.deletePlayer = function(player) {
		// 	var ref = new Firebase(service.baseUrl + "teams/" + team_id + /"players" );
		// 	$firebaseObject.$remove(player);
		// 	return $firebaseArray(ref);
		// };

		service.getTeamDetails = function(team_id){
			var ref = new Firebase(service.baseUrl + "teams/" + team_id ); 
			return $firebaseObject(ref);
		};

		service.addPlayer = function(team_id, player){
			console.log(team_id);
			console.log(player);

			var ref = new Firebase(service.baseUrl + "teams/" + team_id + "/players");
			 $firebaseArray(ref).$add(player);
			 return true;
		};



		return service;
    	

	});



