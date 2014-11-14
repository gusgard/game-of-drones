'use strict';

angular.module('gameOfDrones.playerTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/playerTurn', {
    templateUrl: 'playerTurn/playerTurn.html',
    controller: 'playerTurnCtrl'
  });
}])

.controller('playerTurnCtrl', function($scope, GameService) {

	// $scope.players =  [];
	// this.playerOne = '';
	// $scope.playerTwo = '';
		// $scope.playerOne = this.playerOne;
		// this.playerOne = 'holas';
		// $scope.players.push($scope.playerOne);
		$scope.playerOne = GameService.getPlayerOne();

});
