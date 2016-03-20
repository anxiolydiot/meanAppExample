'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieEditCtrl
 * @description
 * # MovieEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieEditCtrl', function ( 
   $scope,
   $routeParams,
   Movie,
   $location
) {
    $scope.editMovie = true;
    $scope.movie ={}; //declare movie as empty object
    Movie.one($routeParams.id).get().then(function(movie){ //call movie at whatever id paramter is
      $scope.movie = movie; // set scope value to what was passed as an argument (movie)
      $scope.saveMovie = function(){
        $scope.movie.save().then(function(){
          $location.path('/movie/' +$routeParams.id);
        });
      };

    });
  });
