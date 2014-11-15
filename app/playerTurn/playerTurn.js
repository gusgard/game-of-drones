'use strict';

angular.module('gameOfDrones.playerTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/playerTurn', {
    templateUrl: 'playerTurn/playerTurn.html',
    controller: 'playerTurnCtrl'
  });
}])

.controller('playerTurnCtrl', function($scope, $location, GameService) {
	$scope.moves = GameService.getMoves();
	$scope.currnetMove = $scope.moves[0];
	$scope.numberOfRounds = GameService.getNumberOfRounds();
	$scope.maxRounds = GameService.getMaxRounds();
	
	$scope.playerOne = GameService.getPlayerOne();
	$scope.playerTwo = GameService.getPlayerTwo();
	$scope.currnetPlayer = $scope.playerOne;
	$scope.isPlayerOneTurn = true;

	this.addMove = function(){

		if ($scope.isPlayerOneTurn) {
			$scope.isPlayerOneTurn = false;
			$scope.currnetPlayer = $scope.playerTwo;
			$scope.playerOne.move = $scope.currnetMove;
			// console.log($scope.playerOne.name + ' ' + $scope.playerOne.move);
		}else{
			$scope.isPlayerOneTurn = true;
			$scope.currnetPlayer = $scope.playerOne;
			
			$scope.playerTwo.move = $scope.currnetMove;

			// c/onsole.log($scope.playerTwo.name + ' ' + $scope.playerTwo.move);

			var isAWinner = GameService.getRoundWinner($scope.playerOne, $scope.playerTwo); 
			
			if (isAWinner) {
				var score = {
					round: $scope.numberOfRounds,
					winner: isAWinner,
				};
				$scope.scores.push(score);
				$scope.numberOfRounds++;
			};
		};

		// $scope.player = $scope.currnetMove;
		$scope.currnetMove = $scope.moves[0];

		if ($scope.numberOfRounds == $scope.maxRounds + 1) {
			console.log('GAME FINISHED!!!');
			var winnerPlayer = GameService.getGameWinner($scope.scores);
			console.log(winnerPlayer);
		}else{
			console.log('GAME dont ended!!!');
		};

	};

	$scope.scores = [];

});
