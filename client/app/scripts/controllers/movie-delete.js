'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieDeleteCtrl', function (
      $scope,
      $routeParams,
      Movie,
      $location
    ) {
      $scope.movie = Movie.one($routeParams.id).get().$object; //get the movie by id
      $scope.deleteMovie = function(){
        $scope.movie.remove().then(function(){ //deletes movie object
        $location.path('/movies'); //redirect to movies page 
      });
      };
      $scope.back = function(){
        $location.path('/movies/'+ $routeParams.id); //redirect to specific movie page depending on user choice 
      };
  });

