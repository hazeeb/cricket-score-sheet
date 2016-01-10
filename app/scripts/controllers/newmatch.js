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
 	
  	$scope.teamnames = firebaseService.getTeams();

  });
