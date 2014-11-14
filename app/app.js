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
        var numberOfRounds = 1;
        // var playerOne = 'playerone';
        // var playerTwo = 'playertwo';
        var moves = gameMoves;
        var defaultMove = moves[0];
        var currentPlayerIndex = 0;
        var players = [];

        this.nextIndex = function(){
			currentPlayerIndex = (currentPlayerIndex+1) % 2;        	
        };

		this.addPlayer = function(name) {
            var player = {
            	name: name,
            	score: 0,
            };
            players.push(player);
            console.log('seteo player ' + name );
        };
        this.getNextPlayer = function(){
            this.nextIndex();
        	return players[currentPlayerIndex].name;
        };

        this.getMoves = function(){
        	return moves;
        };

        this.getDefaultMove = function(){
        	return defaultMove;
        };

        this.getNumberOfRounds = function(){
        	return numberOfRounds;
        };

    });

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
