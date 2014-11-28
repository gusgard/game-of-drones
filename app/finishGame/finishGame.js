(function(){
	'use strict';

	angular.module('gameOfDrones.finishGame', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/finishGame', {
		  templateUrl: 'finishGame/finishGame.html',
		  controller: 'finishGameController',
		  controllerAs: 'finishGameCtrl'
	  });
	}])

	.controller('finishGameController', function($location, GameService, StorageService) {
		var self = this;
		self.playerWinner = GameService.getWinner();
		self.restartGame = function(){
			$location.path('/startGame');
			StorageService.setPlayer(self.playerWinner.name, self.playerWinner);
			var player = StorageService.getItem(self.playerWinner.name);
			console.log('Winner: ' + player.name);
			console.log('Score: ' + player.score);
		};
	});
})();
