(function(){
	'use strict';

	angular.module('gameOfDrones.playerTurn', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/playerTurn', {
	    templateUrl: 'playerTurn/playerTurn.html',
	    controller: 'playerTurnController'
	  });
	}])

	.controller('playerTurnController', function($scope, $location, GameService) {
		$scope.moves = GameService.getMoves();
		$scope.currnetMove = $scope.moves[0];
		$scope.numberOfRounds = 1;
		$scope.scores = [];
		$scope.playerOne = GameService.getPlayerOne();
		$scope.playerTwo = GameService.getPlayerTwo();
		$scope.currnetPlayer = $scope.playerOne;
		$scope.isPlayerOneTurn = true;

		this.addMove = function(){
			if ($scope.isPlayerOneTurn) {
				$scope.isPlayerOneTurn = false;
				$scope.currnetPlayer = $scope.playerTwo;
				$scope.playerOne.move = $scope.currnetMove;
			}else{
				$scope.isPlayerOneTurn = true;
				$scope.currnetPlayer = $scope.playerOne;
				
				$scope.playerTwo.move = $scope.currnetMove;

				var winnerName = GameService.getRoundWinner($scope.playerOne, $scope.playerTwo); 
				var score = {
					round: $scope.numberOfRounds,
					winner: winnerName,
				};
				$scope.scores.push(score);
				$scope.numberOfRounds++;
			};

			if ($scope.playerOne.rounds == GameService.getMaxRounds()) {
				GameService.setWinner($scope.playerOne);
				$location.path('/finishGame');
			}else if ($scope.playerTwo.rounds == GameService.getMaxRounds()) {
				GameService.setWinner($scope.playerTwo);
				$location.path('/finishGame');
			};
			$scope.currnetMove = $scope.moves[0];
		};
	});
})();