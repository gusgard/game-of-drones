(function(){
	'use strict';

	// Declare app level module which depends on views, and components
	var app = angular.module('gameOfDrones', [
	  'ngRoute',
	  'gameOfDrones.startGame',
	  'gameOfDrones.playerTurn',
	  'gameOfDrones.finishGame',
	  'LocalStorageModule',
	]).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/startGame'});
	}]);

	app.service('GameService', function () {
        var maxRounds = 1;
        var moves = [];
        var playerOne;
        var playerTwo;
        var currentWinner;

		this.setMoves = function(newMoves){
			moves = newMoves;
		};
		this.setPlayerOne = function(name) {
            playerOne = {
            	name: name,
            	rounds: 0,
            };
        };
		this.setPlayerTwo = function(name) {
            playerTwo = {
            	name: name,
            	rounds: 0,
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
	app.service('StorageService', function (localStorageService) {
		this.setPlayer = function(key, value) {
			if (localStorageService.get(key)!=null) {
				var player = localStorageService.get(key);
				player.score++;
				localStorageService.set(key, player);
			}else{
				value.score = 1;
				localStorageService.set(key, value);
			}
		}
		this.getItem = function(key) {
			return localStorageService.get(key);
		}
    });
})();