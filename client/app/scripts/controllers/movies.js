'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope, Movie) {
    //$object auto populates itself once the list is fetched
    $scope.movies = Movie.getList().$object;
      
  });
