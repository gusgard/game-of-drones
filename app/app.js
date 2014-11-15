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
	});

	app.service('GameService', function () {
        var rounds = 1;
        var maxRounds = 3;
        var moves = gameMoves;
        var currentPlayerIndex = 0;
        var playerOne;
        var playerTwo;
        // this.nextIndex = function(){
			// currentPlayerIndex = (currentPlayerIndex+1) % 2;        	
        // };

		this.setPlayerOne = function(name) {
            playerOne = {
            	name: name,
            	score: 0,
            	// moves : [];
            };
        };
		this.setPlayerTwo = function(name) {
            playerTwo = {
            	name: name,
            	score: 0,
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
        		return playerOne;
        	}else if(moves[playerTwo.move.kill].name === playerOne.move.name) {
        		//wins player two
        		return playerTwo;
        	}else{
        		//draw
        		return false;
        	};
        };
        this.getGameWinner = function(scores){
        	var count = {
        		one: 0,
        		two: 0,
        	};
        	var key;
        	for (key in scores){
        		var score = scores[key];
        		if (score.winner.name === playerOne.name) {
        			count.one++;
        		}else{
        			count.two++;
        		};
        	};
        	if (count.one > count.two) {
        		playerOne.score ++;
        		return playerOne.name;
        	}else{
				playerTwo.score ++;
        		return playerTwo.name;
        	};
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
