(function(){
	'use strict';

	angular.module('gameOfDrones.startGame', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/startGame', {
	    templateUrl: 'startGame/startGame.html',
	    controller: 'startGameController',
	    controllerAs: 'startGameCtrl'
	  });
	}])

	.controller('startGameController', function($location, $http, GameService) {
		var self = this;
		self.loadConfig = function(){
			GameService.setPlayerOne(self.playerOne);
			GameService.setPlayerTwo(self.playerTwo);
			$http.get('./moves.json').
				success(function(moves){
					GameService.setMoves(moves);
					$location.path('/playerTurn');
				}).
				error(function(data, status) {
					console.log('Error code '+ status+ ' ' + data);
				});

			//if (GameService.loadMoves()) {
			//	console.log('asd');
			//	$location.path('/playerTurn');
			//}
		};
	});
})();
