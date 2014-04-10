'use strict';

angular.module('spanishApp')
  .controller('VerbCtrl', function ($scope, $routeParams, $http) {
    $http.get('/api/verbs').success(function(verbs) {
      $scope.verbs = verbs;
      $scope.index = 0;
      $scope.hasNext = (verbs.length > 1);
      $scope.nextVerb = $scope.hasNext ? verbs[$scope.index+1].verb : "";
      $scope.getVerb($routeParams.verb);
    });    
    
    $scope.getVerb = function(verb){
        for (var index in $scope.verbs){
            if ($scope.verbs[index].verb === verb)
            {
                $scope.v = $scope.verbs[index];
                $scope.index = index - 0;
                break;
            }
        }
        
        //Show previous button
        if ($scope.index === 0)
        {
            $scope.hasPrevious = false;
        } else {
            $scope.hasPrevious = true;
            $scope.previousVerb = $scope.verbs[$scope.index-1].verb;
        }
        
        //Show next button
        if ($scope.index < $scope.verbs.length -1){
            $scope.hasNext = true;
            $scope.nextVerb = $scope.verbs[$scope.index+1].verb;
        } else {
            $scope.hasNext = false;
        }
        
    };
    
  });
