'use strict';

/**
 * @ngdoc function
 * @name sample1App.controller:NewmatchCtrl
 * @description
 * # NewmatchCtrl
 * Controller of the sample1App
 */
angular.module('sample1App')
  .controller('NewmatchCtrl', function ($scope, firebaseService) {
 	
 	//for dropdown list
  	$scope.teamnames = firebaseService.getTeams();

  	//testing 

  	$scope.addmatch = function(unique){
  		var ref = new Firebase('https://burning-inferno-1731.firebaseio.com/matches');
  		ref.child(unique).set({
  			mtachvenue : $scope.venue,
  			matchteam1 : $scope.teamformatch1,
  			matchteam2 : $scope.teamformatch2
  			}
  		);
  	};

  });
