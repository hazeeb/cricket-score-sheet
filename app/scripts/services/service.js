/*global angular */

angular.module('sample1App')
	.service('firebaseService', function ($firebaseArray) {
		'use strict';

		var service = {
			baseUrl : 'https://burning-inferno-1731.firebaseio.com/'
		};

		service.getTeamNames = function(){
			var ref = new Firebase(service.baseUrl + "messages");
			return $firebaseArray(ref);
		};



		return service;
    	

	});



