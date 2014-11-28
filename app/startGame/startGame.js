(function(){
	'use strict';

	angular.module('gameOfDrones.startGame', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/startGame', {
	    templateUrl: 'startGame/startGame.html',
	    controller: 'startGameController',
	    controllerAs: 'startGameCtrl'
	  });
	}])

	.controller('startGameController', function($location, GameService) {
		var self = this;
		self.loadConfig = function(){
			GameService.setPlayerOne(self.playerOne);
			GameService.setPlayerTwo(self.playerTwo);
			GameService.loadMoves();
			$location.path('/playerTurn');
		};
	});
})();
