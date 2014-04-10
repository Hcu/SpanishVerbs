'use strict';

angular.module('spanishApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      
      .when('/new', {
        templateUrl: 'partials/newverb',
        controller: 'NewVerbCtrl'
      })
      .when('/verb/:verb',{
      templateUrl: 'partials/verb',
        controller: 'VerbCtrl'
      })
      .when('/verb/:verb/edit',{
      templateUrl: 'partials/newverb',
        controller: 'NewVerbCtrl'
      })
      .when('/verbs', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
        })
      .when('/verbs/:qry', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/quiz', {
        templateUrl: 'partials/quiz',
        controller: 'QuizCtrl'
      })
      .otherwise({
         redirectTo: '/verbs'
      });
      
    $locationProvider.html5Mode(true);
  });