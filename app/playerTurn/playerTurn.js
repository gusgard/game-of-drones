'use strict';

angular.module('gameOfDrones.playerTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/playerTurn', {
    templateUrl: 'playerTurn/playerTurn.html',
    controller: 'playerTurnCtrl'
  });
}])

.controller('playerTurnCtrl', function($scope, $location, GameService) {
	$scope.player = GameService.getNextPlayer();
	$scope.moves = GameService.getMoves();
	$scope.defaultMove = GameService.getDefaultMove();
	$scope.numberOfRounds = GameService.getNumberOfRounds();

	this.addMove = function(){
		// GameService.incrementRound();
		$scope.numberOfRounds++;
		// $location.path('/playerTurn');
		console.log('add move');
		$scope.defaultMove = GameService.getDefaultMove();
		$scope.player = GameService.getNextPlayer();

		// $scope.
	};
});
