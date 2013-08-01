'use strict';

angular.module('twApp')
  .controller('ShareCtrl', function ($scope, $location) {
  	$scope.goHome = function(hash) {
  		$location.url('/');
  	};
  });