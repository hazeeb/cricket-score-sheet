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

		service.deletePlayer = function(player,team_id, player_id) {
			var ref = new Firebase(service.baseUrl + "teams/" + team_id + "/players/" + player_id);
			$firebaseObject.$remove(player);
			return $firebaseArray(ref);
		};
		
		service.getPlayerDetails = function(team_id,player_id){
			var ref = new Firebase(service.baseUrl + "teams/" + team_id + "/players/" + player_id);
			return $firebaseObject(ref);
		};

		service.getTeamDetails = function(teamid){
			var ref = new Firebase(service.baseUrl + "teams/" + teamid ); 
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



