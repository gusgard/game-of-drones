'use strict';

angular.module('gameOfDrones.finishGame', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/finishGame', {
    templateUrl: 'finishGame/finishGame.html',
    controller: 'finishGameController'
  });
}])

.controller('finishGameController', function($location, GameService, StorageService) {
	this.playerWinner = GameService.getWinner();
	this.changePath = function(){
		$location.path('/startGame');
		StorageService.setPlayer(this.playerWinner.name, this.playerWinner);
		StorageService.getItem('ganador '+ this.playerWinner.name);
	};

});