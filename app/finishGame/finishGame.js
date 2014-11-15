'use strict';

angular.module('gameOfDrones.finishGame', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/finishGame', {
    templateUrl: 'finishGame/finishGame.html',
    controller: 'finishGameController'
  });
}])

.controller('finishGameController', function($location, GameService) {
	this.playerWinner = GameService.getWinner();
	this.changePath = function(){
		$location.path('/startGame');
	};

});