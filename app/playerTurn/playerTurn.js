(function(){
	'use strict';

	angular.module('gameOfDrones.playerTurn', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/playerTurn', {
	    templateUrl: 'playerTurn/playerTurn.html',
	    controller: 'playerTurnController',
			controllerAs: 'playerTurnCtrl'
	  });
	}])

	.controller('playerTurnController', function($location, GameService) {
		var self = this;

		self.moves = GameService.getMoves();
		self.currnetMove = self.moves[0];
		self.numberOfRounds = 1;
		self.scores = [];
		self.playerOne = GameService.getPlayerOne();
		self.playerTwo = GameService.getPlayerTwo();
		self.currnetPlayer = self.playerOne;
		self.isPlayerOneTurn = true;

		self.addMove = function(){
			if (self.isPlayerOneTurn) {
				self.isPlayerOneTurn = false;
				self.currnetPlayer = self.playerTwo;
				self.playerOne.move = self.currnetMove;
			}else{
				self.isPlayerOneTurn = true;
				self.currnetPlayer = self.playerOne;

				self.playerTwo.move = self.currnetMove;

				var winnerName = GameService.getRoundWinner(self.playerOne, self.playerTwo);
				var score = {
					round: self.numberOfRounds,
					winner: winnerName
				};
				self.scores.push(score);
				self.numberOfRounds++;
			}

			if (self.playerOne.rounds == GameService.getMaxRounds()) {
				GameService.setWinner(self.playerOne);
				$location.path('/finishGame');
			}else if (self.playerTwo.rounds == GameService.getMaxRounds()) {
				GameService.setWinner(self.playerTwo);
				$location.path('/finishGame');
			}
			self.currnetMove = self.moves[0];
		};
	});
})();
