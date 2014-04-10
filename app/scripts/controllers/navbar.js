'use strict';

angular.module('spanishApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'All',
      'link': '/'
    },
        {
        'title':'New',
        'link': '/new'
      }, {
        'title':'Quiz',
        'link': '/quiz'
      }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
    
    $scope.searchVerb = function(){
        $location.path('/verbs/' + $scope.searchterm);
    }
  });
