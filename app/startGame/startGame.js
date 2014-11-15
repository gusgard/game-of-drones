'use strict';

angular.module('gameOfDrones.startGame', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startGame', {
    templateUrl: 'startGame/startGame.html',
    controller: 'startGameCtrl'
  });
}])

.controller('startGameCtrl', function(StorageService, $scope, $location, $http , GameService) {

	$scope.changePath = function(){
		GameService.setPlayerOne($scope.playerOne);
		GameService.setPlayerTwo($scope.playerTwo);
		$http.get('./moves.json').
			success(function(moves){
		    	GameService.setMoves(moves);
				$location.path('/playerTurn');
			}).
			error(function(data, status) {
    	    	console.log('Error code '+ status+ ' ' + data);
	     	});
	};

});