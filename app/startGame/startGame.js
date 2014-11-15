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
		GameService.setPlayerOne($scope.playerOne);
		GameService.setPlayerTwo($scope.playerTwo);
		$location.path('/playerTurn');
	};

});