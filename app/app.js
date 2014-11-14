(function(){
	'use strict';

	// Declare app level module which depends on views, and components
	var app = angular.module('gameOfDrones', [
	  'ngRoute',
	  'gameOfDrones.startGame',
	  'gameOfDrones.playerTurn',
	  // 'playerControllers'
	]).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/startGame'});
	}]);

	// var playerControllers = angular.module('playerControllers', []);

	app.controller("movesListCtrl", function($scope){  
		
		$scope.moves = gameMoves;
		$scope.defaultMove = $scope.moves[0];
		// $scope.playerOne = 'a';
		// $scope.playerTwo = 'b';
		
		// $scope.setPlayer = 
		// $scope.players = [];
		// this.playerOne = '';
		// this.playerTwo = '';
	});

	app.service('GameService', function () {
        var playerOne = '1';
        var playerTwo = '2';

        this.setPlayerOne = function (player) {
            playerOne = player;
            console.log('seteo playerone!!');
            console.log(player);
        };
        this.getPlayerOne = function(){
            console.log(playerOne);
        	return playerOne;
        };
    });

	// var data = [{
	// 	name: 'playerName',
	// 	score: 0,
	// }];

	var gameMoves = [
		{
			name: 'Paper',
			kill: 'Rock'
		},
		{
			name: 'Rock',
			kill: 'Scissors'
		},
		{
			name: 'Scissors',
			kill: 'Paper'
		}
	];
})();
