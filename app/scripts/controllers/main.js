'use strict';

angular.module('twApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$http.get('posts.json').success(function(data) {
  		$scope.posts = data;
  	});
  });