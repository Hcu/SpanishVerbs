'use strict';

angular.module('spanishApp')
  .controller('MainCtrl', function ($scope, $routeParams, $http) {
    var qry = $routeParams.qry;
    if (qry){
        $http.get('/api/verb/' + qry).success(function(verbs) {
          
          $scope.verbs = verbs;
        }); 
    }
    else {
        $http.get('/api/verbs').success(function(verbs) {
          
          $scope.verbs = verbs;
        });    
    }
});
