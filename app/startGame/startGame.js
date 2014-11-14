'use strict';

angular.module('gameOfDrones.startGame', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startGame', {
    templateUrl: 'startGame/startGame.html',
    controller: 'startGameCtrl'
  });
}])

.controller('startGameCtrl', function($scope, $location, GameService) {

	// $scope.players =  [];
	// $scope.playerOne = 'pepe';
	// $scope.playerTwo = '';
	this.changePath = function(){
		// $scope.playerOne = this.playerOne;
		// this.playerOne = 'holas';
		// $scope.players.push($scope.playerOne);
		GameService.addPlayer($scope.playerOne);
		GameService.addPlayer($scope.playerTwo);
		$location.path('/playerTurn');
	};

});