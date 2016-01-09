'use strict';

/**
 * @ngdoc overview
 * @name sample1App
 * @description
 * # sample1App
 *
 * Main module of the application.
 */
angular
  .module('sample1App', [
    'ngResource',
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/addteam', {
        templateUrl: 'views/addteam.html',
        controller: 'AddTeamCtrl'
      })
      .when('/viewteam', {
        templateUrl: 'views/viewteam.html',
        controller: 'ViewTeamCtrl'
      })
      .when('/viewplayers/:team_id', {
        templateUrl: 'views/viewplayers.html',
        controller: 'ViewPlayersCtrl'
      })
      .when('/addplayer/:team_id', {
        templateUrl: 'views/addplayer.html',
        controller: 'AddplayerCtrl'
      })
      .when('/playerprofile/:team_id/:player_id', {
        templateUrl: 'views/playerprofile.html',
        controller: 'PlayerprofileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
