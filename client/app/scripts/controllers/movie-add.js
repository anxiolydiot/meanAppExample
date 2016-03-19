'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('MovieAddCtrl',function(
$scope,
Movie,
$location
){
  $scope.movie={}; //creates movie object, attaches to scope
  $scope.saveMovie = function(){ //creates savemovie function and attaches to scope
    Movie.post($scope.movie).then(function(){
      $location.path('/movies');
    });
  };
});