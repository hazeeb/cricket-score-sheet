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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/addteam', {
        templateUrl: 'views/addteam.html',
        controller: 'AddTeamCtrl',
        controllerAs: 'about'
      })
      .when('/viewteam', {
        templateUrl: 'views/viewteam.html',
        controller: 'ViewTeamCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
