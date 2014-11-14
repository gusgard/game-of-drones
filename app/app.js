(function(){
	'use strict';

	// Declare app level module which depends on views, and components
	var app = angular.module('gameOfDrones', [
	  'ngRoute',
	  'gameOfDrones.view1',
	  'gameOfDrones.playerTurn',
	  // 'myApp.version',
	  'playerControllers'
	]).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/view1'});
	}]);

	var playerControllers = angular.module('playerControllers', []);

	playerControllers.controller("ReviewController", function($location){  
		
		// this.players = data;

		this.playerOne = '';
		this.playerTwo = '';
		// this.players = ['hola']
		this.addPlayers = function(){
			// this.players.push(this.playerOne);
			// this.players.push(this.playerTwo);
			$location.path('/playerTurn');
		};
	});

	// var data = [{
	// 	name: 'playerName',
	// 	score: 0,
	// }];
})();
