'use strict';

/**
 * @ngdoc function
 * @name sample1App.controller:Viewteamctrl
 * @description
 * # ViewteamctrlCtrl
 * Controller of the sample1App
 */
angular.module('sample1App')
    .controller('ViewTeamCtrl', function($scope, firebaseService) {

        $scope.teams = firebaseService.getTeams();


    });
