(function(){
	'use strict';

	// Declare app level module which depends on views, and components
	var app = angular.module('gameOfDrones', [
	  'ngRoute',
	  'gameOfDrones.startGame',
	  'gameOfDrones.playerTurn',
	  'gameOfDrones.finishGame',
	]).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/startGame'});
	}]);

	// var playerControllers = angular.module('playerControllers', []);
	app.controller("movesListCtrl", function($scope){  
		$scope.moves = gameMoves;
		$scope.defaultMove = $scope.moves[0];
	});

	app.service('GameService', function () {
        var rounds = 1;
        var maxRounds = 3;
        var moves = gameMoves;
        var currentPlayerIndex = 0;
        var playerOne;
        var playerTwo;
        var currentWinner;
        // this.nextIndex = function(){
			// currentPlayerIndex = (currentPlayerIndex+1) % 2;        	
        // };
        
		this.setPlayerOne = function(name) {
            playerOne = {
            	name: name,
            	score: 0,
            	rounds: 0,
            	// moves : [];
            };
        };
		this.setPlayerTwo = function(name) {
			//refactoring de estos 2 metodos!.
            playerTwo = {
            	name: name,
            	score: 0,
            	rounds: 0,
            	// moves : [];
            };
        };
		this.getPlayerOne = function(){
        	return playerOne;
        };
        this.getPlayerTwo = function(){
        	return playerTwo;
        };
        this.getMoves = function(){
        	return moves;
        };
        this.getNumberOfRounds = function(){
        	return rounds;
        };
        this.getMaxRounds = function(){
        	return maxRounds;
        };
        this.getRoundWinner = function(playerOne, playerTwo){
        	if (moves[playerOne.move.kill].name === playerTwo.move.name) {
        		//wins player one
        		playerOne.rounds++;
        		return playerOne.name;
        	}else if(moves[playerTwo.move.kill].name === playerOne.move.name) {
        		playerTwo.rounds++;
        		//wins player two
        		return playerTwo.name;
        	}else{
        		//draw
        		return 'Draw';
        	};
        };
        this.setWinner = function(player){
        	currentWinner = player;
        };
        this.getWinner = function(){
        	return currentWinner;
        };

    });

	var gameMoves = [
		{
			name: 'Paper',
			kill: 1,		//kills the position of the array.
		},
		{
			name: 'Rock',
			kill: 2,
		},
		{
			name: 'Scissors',
			kill: 0,
		}
	];
})();
